import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Shield, Send, Plus, DollarSign, MapPin, Camera, Image as ImageIcon, X, Lock } from 'lucide-react';
import { Screen, ChatRecipient, UserProfileData } from '../App';

interface ChatScreenProps {
  onNavigate: (screen: Screen, recipientOrQuery?: ChatRecipient | string, request?: any, userProfile?: UserProfileData) => void;
  recipient?: ChatRecipient | null;
  userProfile?: UserProfileData;
}

interface Message {
  id: number;
  sender: 'other' | 'me';
  text?: string;
  image?: string;
  location?: {
    latitude: number;
    longitude: number;
  };
  time: string;
}

export function ChatScreen({ onNavigate, recipient, userProfile }: ChatScreenProps) {
  const [showPlusMenu, setShowPlusMenu] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'other',
      text: 'Hi! I saw your parcel request to Munich. I can help!',
      time: '10:30 AM',
    },
    {
      id: 2,
      sender: 'me',
      text: 'Great! When are you traveling?',
      time: '10:32 AM',
    },
    {
      id: 3,
      sender: 'other',
      text: 'I\'m departing on December 18th. The package looks manageable.',
      time: '10:33 AM',
    },
    {
      id: 4,
      sender: 'me',
      text: 'Perfect timing! Can you deliver by the 20th?',
      time: '10:35 AM',
    },
    {
      id: 5,
      sender: 'other',
      text: 'Absolutely. I\'ll be in Munich on the 19th.',
      time: '10:36 AM',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Use recipient data if provided, otherwise use default
  const chatRecipient = recipient || {
    name: 'Sarah Johnson',
    initial: 'S',
    verified: true,
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      sender: 'me',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newMessage: Message = {
          id: Date.now(),
          sender: 'me',
          image: reader.result as string,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages([...messages, newMessage]);
        setShowPlusMenu(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleShareLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      setShowPlusMenu(false);
      return;
    }

    setIsLoadingLocation(true);
    setShowPlusMenu(false);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newMessage: Message = {
          id: Date.now(),
          sender: 'me',
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages([...messages, newMessage]);
        setIsLoadingLocation(false);
      },
      (error) => {
        console.error('Error getting location:', error);
        setIsLoadingLocation(false);
        
        let errorMessage = 'Unable to get your location. ';
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage += 'Please enable location permissions in your browser settings.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage += 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage += 'Location request timed out.';
            break;
          default:
            errorMessage += 'An unknown error occurred.';
            break;
        }
        
        alert(errorMessage);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  return (
    <div className="h-full w-full bg-[#F8FAFB] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('home')}>
            <ArrowLeft className="w-6 h-6 text-[#008080]" />
          </button>
          
          <div className="flex items-center gap-3 flex-1">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#006666] rounded-full flex items-center justify-center">
                <span className="text-white">{chatRecipient.initial}</span>
              </div>
              {/* Verified Shield Badge */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#27AE60] rounded-full flex items-center justify-center border-2 border-white">
                <Shield className="w-3 h-3 text-white" />
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-[#121212]" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
                {chatRecipient.name}
              </h2>
              <p className="text-xs text-[#27AE60]">Verified User</p>
            </div>
          </div>

          <button 
            onClick={() => onNavigate('view-user-profile', undefined, undefined, userProfile)}
            className="text-[#008080] hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-colors"
          >
            <span className="text-sm">View Profile</span>
          </button>
        </div>
      </div>

      {/* Escrow Security Banner */}
      <div 
        className="px-6 py-3 flex items-center gap-2"
        style={{ backgroundColor: 'rgba(0, 128, 128, 0.1)' }}
      >
        <Lock className="w-4 h-4 text-[#008080]" />
        <span className="text-sm text-[#008080] font-medium">🔒 $45 Secure in Escrow</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {/* System Message - Escrow Explanation */}
        <div className="flex justify-center mb-4">
          <div className="max-w-[85%] bg-white rounded-2xl px-4 py-3 border border-gray-200" style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)' }}>
            <p className="text-sm text-[#121212] opacity-70 text-center leading-relaxed">
              Payment is held safely by ShipLink. It will only be released to Sarah after you scan her handover QR code.
            </p>
          </div>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl overflow-hidden ${
                msg.sender === 'me'
                  ? 'bg-[#008080] text-white'
                  : 'bg-gray-100 text-[#121212]'
              }`}
            >
              {msg.image ? (
                <div className="p-1">
                  <img src={msg.image} alt="Attachment" className="rounded-xl w-full h-auto object-cover max-h-60" />
                </div>
              ) : msg.location ? (
                <div className="p-3">
                  <a
                    href={`https://www.google.com/maps?q=${msg.location.latitude},${msg.location.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className={`rounded-xl overflow-hidden border ${msg.sender === 'me' ? 'border-white border-opacity-20' : 'border-gray-300'}`}>
                      {/* Map Preview */}
                      <div className="relative h-32 bg-gradient-to-br from-blue-100 to-blue-200">
                        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="gray" strokeWidth="0.5"/>
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#map-grid)" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 bg-red-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                      {/* Location Info */}
                      <div className={`p-3 ${msg.sender === 'me' ? 'bg-white bg-opacity-10' : 'bg-white'}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className={`w-4 h-4 ${msg.sender === 'me' ? 'text-white' : 'text-[#008080]'}`} />
                          <span className={`text-sm font-semibold ${msg.sender === 'me' ? 'text-white' : 'text-[#121212]'}`}>
                            My Location
                          </span>
                        </div>
                        <p className={`text-xs ${msg.sender === 'me' ? 'text-white opacity-80' : 'text-[#121212] opacity-60'}`}>
                          {msg.location.latitude.toFixed(6)}, {msg.location.longitude.toFixed(6)}
                        </p>
                        <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-white opacity-80' : 'text-[#008080]'}`}>
                          Tap to open in maps
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              ) : (
                <p className="px-4 py-3 text-[15px] leading-relaxed" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif' }}>
                  {msg.text}
                </p>
              )}
              
              <p
                className={`text-xs px-4 pb-2 mt-0 ${
                  msg.sender === 'me' ? 'text-white opacity-60' : 'text-[#121212] opacity-40'
                } ${msg.image ? 'pt-1' : ''}`}
              >
                {msg.time}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <div className="px-6 py-4 bg-white border-t border-gray-200">
        <div className="relative flex items-center gap-3">
          {/* Plus Button with Menu */}
          <div className="relative">
            <button
              onClick={() => setShowPlusMenu(!showPlusMenu)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                showPlusMenu ? 'bg-[#008080] text-white' : 'bg-gray-100 text-[#121212] hover:bg-gray-200'
              }`}
            >
              {showPlusMenu ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </button>

            {/* Popup Menu */}
            {showPlusMenu && (
              <div className="absolute bottom-full mb-4 left-0 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50 w-48 animate-in fade-in slide-in-from-bottom-2 duration-200">

                <button
                  onClick={handleShareLocation}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-[rgba(0,128,128,0)] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#008080]" />
                  </div>
                  <span className="text-sm text-[#121212]">Share Location</span>
                </button>
                <button
                  onClick={triggerFileInput}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <ImageIcon className="w-4 h-4 text-[#121212]" />
                  </div>
                  <span className="text-sm text-[#121212]">Photos</span>
                </button>
                <button
                  onClick={triggerFileInput}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Camera className="w-4 h-4 text-[#121212]" />
                  </div>
                  <span className="text-sm text-[#121212]">Camera</span>
                </button>
              </div>
            )}
            
            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileSelect}
            />
          </div>

          {/* Input Field */}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#008080] transition-all"
            style={{ fontFamily: 'SF Pro Display, Inter, sans-serif' }}
          />

          {/* Send Button */}
          <button
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              message.trim() 
                ? 'bg-[#008080] hover:bg-[#006666] cursor-pointer' 
                : 'bg-gray-200 cursor-default'
            }`}
            onClick={handleSendMessage}
            disabled={!message.trim()}
          >
            <Send className={`w-5 h-5 ${message.trim() ? 'text-white' : 'text-gray-400'}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
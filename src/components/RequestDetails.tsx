import { ArrowLeft, MapPin, Package, Weight, DollarSign, MessageSquare, User } from 'lucide-react';
import { Screen, ChatRecipient, RequestData, UserProfileData } from '../App';

interface RequestDetailsProps {
  onNavigate: (screen: Screen, recipient?: ChatRecipient, request?: RequestData, userProfile?: UserProfileData) => void;
}

export function RequestDetails({ onNavigate }: RequestDetailsProps) {
  // Request data for this specific request
  const requestData: RequestData = {
    title: 'Electronics Package',
    destination: 'Munich, Germany',
    packageType: 'Books',
    weight: '5 kg',
    reward: '$45',
    sender: {
      name: 'Emma Schmidt',
      rating: '4.8',
      deliveries: '32 deliveries',
    },
    expectedDelivery: 'December 20, 2024',
  };

  // Sender information for chat
  const senderInfo: ChatRecipient = {
    name: 'Emma Schmidt',
    initial: 'E',
    rating: '4.8',
    deliveries: '32 deliveries',
    verified: true,
  };

  // Sender profile data
  const senderProfile: UserProfileData = {
    name: 'Emma Schmidt',
    initial: 'E',
    verified: true,
    rating: '4.8',
    reviewCount: '32',
    university: 'Humboldt University of Berlin',
    major: 'Business Administration',
    year: '4th Year (Senior)',
    location: 'Berlin, Germany',
    totalDeliveries: '32',
    successRate: '100%',
    memberSince: 'Sep 2023',
    about: 'Hey! I\'m a business student at Humboldt University. I frequently travel between Berlin and other German cities for internships and conferences. Always happy to help fellow students with their packages! Reliable and communicate throughout the journey. 📦✈️'
  };

  return (
    <div className="h-full w-full bg-[#F8FAFB] overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 flex items-center justify-between">
        <button onClick={() => onNavigate('home')}>
          <ArrowLeft className="w-6 h-6 text-[#008080]" />
        </button>
        <h1 className="text-[20px] text-[#121212]" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
          Request Details
        </h1>
        <div className="w-6"></div>
      </div>

      {/* Map & Parcel Photo Section */}
      <div className="px-6 mb-6">
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 border border-gray-200">
          
          {/* Map Background Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="gray" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Route Line with Curve */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#008080" />
                <stop offset="100%" stopColor="#27AE60" />
              </linearGradient>
            </defs>
            {/* Curved route path from left to right */}
            <path
              d="M 60 80 Q 195 120, 330 100"
              stroke="url(#routeGradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="8 4"
              strokeLinecap="round"
            />
          </svg>

          {/* Start Marker - Berlin */}
          <div className="absolute top-16 left-12">
            <div className="relative">
              <div className="w-10 h-10 bg-[#008080] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white rounded-lg px-3 py-1.5 shadow-md whitespace-nowrap">
                <span className="text-xs font-semibold text-[#121212]">Berlin</span>
              </div>
            </div>
          </div>

          {/* End Marker - Munich */}
          <div className="absolute top-20 right-12">
            <div className="relative">
              <div className="w-10 h-10 bg-[#27AE60] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white rounded-lg px-3 py-1.5 shadow-md whitespace-nowrap">
                <span className="text-xs font-semibold text-[#121212]">Munich</span>
              </div>
            </div>
          </div>

          {/* Current Location Pulse - Midpoint */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2">
            <div className="relative">
              {/* Animated pulse rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-[#FF4F00] rounded-full animate-ping opacity-75"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-[#FF4F00] rounded-full animate-pulse"></div>
              </div>
              {/* Center dot */}
              <div className="relative w-4 h-4 bg-[#FF4F00] rounded-full border-2 border-white shadow-lg"></div>
            </div>
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-[#FF4F00] rounded-lg px-2 py-1 shadow-md whitespace-nowrap">
              <span className="text-xs font-semibold text-white">Current Location</span>
            </div>
          </div>

          {/* Distance Info */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg">
            <span className="text-xs text-[#121212] font-medium">~584 km</span>
          </div>

          {/* Parcel Photo Thumbnail */}
          <div className="absolute bottom-4 right-4 w-20 h-20 rounded-xl overflow-hidden border-2 border-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1601739308534-b06bc53fc27d?w=200"
              alt="Parcel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="px-6 pb-32">
        <h2 className="text-[24px] text-[#121212] mb-4" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 700 }}>
          Electronics Package
        </h2>

        {/* Info Cards */}
        <div className="space-y-3 mb-6">
          {/* Destination */}
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#008080]" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-[#121212] opacity-50 mb-1">Destination</p>
              <p className="text-[#121212]" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
                Munich, Germany
              </p>
            </div>
          </div>

          {/* Package Type */}
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
              <Package className="w-5 h-5 text-[#008080]" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-[#121212] opacity-50 mb-1">Package Type</p>
              <p className="text-[#121212]" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
                Books
              </p>
            </div>
          </div>

          {/* Weight */}
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
              <Weight className="w-5 h-5 text-[#008080]" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-[#121212] opacity-50 mb-1">Weight</p>
              <p className="text-[#121212]" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
                5 kg
              </p>
            </div>
          </div>

          {/* Reward */}
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-5 h-5 text-[#008080]" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-[#121212] opacity-50 mb-1">Reward</p>
              <p className="text-[#008080] text-[20px]" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 700 }}>
                $45
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-[16px] text-[#121212] mb-2" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
            Description
          </h3>
          <p className="text-[#121212] opacity-70 leading-relaxed">
            Collection of academic books needed for university. Handle with care. Preferably delivery before December 20th.
          </p>
        </div>

        {/* Sender Info */}
        <div 
          onClick={() => onNavigate('view-user-profile', undefined, undefined, senderProfile)}
          className="p-4 bg-gray-50 rounded-xl mb-6 cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <h3 className="text-[16px] text-[#121212] mb-3" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
            Sender
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#006666] rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-[#121212] mb-1" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
                Emma Schmidt
              </p>
              <div className="flex items-center gap-1 text-sm text-[#121212] opacity-60">
                <span>★</span>
                <span>4.8</span>
                <span className="mx-1">•</span>
                <span>32 deliveries</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6 mt-auto">
        <div className="max-w-[390px] mx-auto flex gap-3">
          <button
            onClick={() => onNavigate('chat', senderInfo)}
            className="flex-1 py-4 px-6 bg-white border-2 border-[#008080] rounded-xl text-[#008080] transition-all hover:bg-gray-50 active:scale-95 flex items-center justify-center gap-2"
            style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}
          >
            <MessageSquare className="w-5 h-5" />
            Message
          </button>
          <button
            onClick={() => onNavigate('request-accepted', undefined, requestData)}
            className="flex-1 py-4 px-6 bg-[#FF4F00] rounded-xl text-white transition-all hover:bg-[#E64600] active:scale-95"
            style={{ 
              fontFamily: 'SF Pro Display, Inter, sans-serif',
              fontWeight: 600,
              boxShadow: '0 4px 16px rgba(255, 79, 0, 0.25)'
            }}
          >
            Accept Request
          </button>
        </div>
      </div>
    </div>
  );
}
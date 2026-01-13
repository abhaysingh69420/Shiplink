import { Bell, Search, MapPin, Calendar, Package, User, Home, MessageSquare, Plus, CheckCircle } from 'lucide-react';
import { Screen, ChatRecipient, UserProfileData } from '../App';
import { useState } from 'react';

interface HomeDashboardProps {
  onNavigate: (screen: Screen, recipientOrQuery?: ChatRecipient | string, request?: any, userProfile?: UserProfileData) => void;
}

export function HomeDashboard({ onNavigate }: HomeDashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      onNavigate('search', searchQuery.trim());
    }
  };

  const travelers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      bio: 'Student at TU Munich',
      from: 'New York',
      to: 'London',
      date: 'Dec 15',
      rating: 4.9,
      status: 'Departing Soon',
      statusColor: 'bg-yellow-500',
      mutualConnections: 3,
      verifiedStudent: true,
      university: 'Technical University of Munich',
      major: 'Computer Science',
      year: '3rd Year',
      location: 'Munich, Germany',
      totalDeliveries: '24',
      successRate: '98%',
      memberSince: 'Jan 2024',
      about: 'CS student at TU Munich. I frequently travel between New York and London for family visits. Always happy to help fellow students with their packages! 📦✈️',
      reviewCount: '18'
    },
    {
      id: 2,
      name: 'Michael Chen',
      bio: 'Student at Sciences Po',
      from: 'Tokyo',
      to: 'Paris',
      date: 'Dec 18',
      rating: 5.0,
      status: 'Verified',
      statusColor: 'bg-[#27AE60]',
      mutualConnections: 5,
      verifiedStudent: true,
      university: 'Sciences Po Paris',
      major: 'International Relations',
      year: '4th Year (Senior)',
      location: 'Paris, France',
      totalDeliveries: '38',
      successRate: '100%',
      memberSince: 'Aug 2023',
      about: 'International Relations student at Sciences Po. I travel frequently between Tokyo and Paris. Reliable and communicative. Happy to help! 🌏',
      reviewCount: '28'
    },
  ];

  const handleTravelerClick = (traveler: typeof travelers[0]) => {
    const chatRecipient: ChatRecipient = {
      name: traveler.name,
      initial: traveler.name.charAt(0),
      rating: traveler.rating.toString(),
      deliveries: traveler.totalDeliveries,
      verified: traveler.verifiedStudent
    };

    const userProfile: UserProfileData = {
      name: traveler.name,
      initial: traveler.name.charAt(0),
      verified: traveler.verifiedStudent,
      rating: traveler.rating.toString(),
      reviewCount: traveler.reviewCount,
      university: traveler.university,
      major: traveler.major,
      year: traveler.year,
      location: traveler.location,
      totalDeliveries: traveler.totalDeliveries,
      successRate: traveler.successRate,
      memberSince: traveler.memberSince,
      about: traveler.about
    };

    onNavigate('chat', chatRecipient, undefined, userProfile);
  };

  const parcelRequests = [
    {
      id: 1,
      title: 'Electronics Package',
      from: 'Berlin',
      to: 'Munich',
      weight: '2.5 kg',
      reward: '$45',
      status: 'New Request',
      statusColor: 'bg-[#2F80ED]',
    },
    {
      id: 2,
      title: 'Document Delivery',
      from: 'Madrid',
      to: 'Barcelona',
      weight: '0.5 kg',
      reward: '$25',
      status: 'Urgent',
      statusColor: 'bg-red-500',
    },
  ];

  return (
    <div className="h-full w-full bg-[#F8FAFB] flex flex-col relative">
      {/* Header */}
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-[32px] font-bold text-[#121212]">
              ShipLink
            </h1>
            <p className="text-[16px] text-[#121212] opacity-60">Welcome back!</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('notifications')}
              className="relative"
            >
              <Bell className="w-6 h-6 text-[#008080]" />
              {/* Red notification dot */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
            </button>
            <button className="relative" onClick={() => onNavigate('profile')}>
              <div className="w-10 h-10 bg-[#008080] rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              {/* Red notification dot */}
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#008080] opacity-60" />
          <input
            type="text"
            placeholder="Search travelers or parcels..."
            className="w-full pl-12 pr-4 py-3 bg-white rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#008080] transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-24">
        {/* Travelers Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[20px] font-semibold text-[#121212]">
              Available Travelers
            </h2>
            <button className="text-sm text-[#008080]" onClick={() => onNavigate('travelers')}>See all</button>
          </div>

          <div className="space-y-3">
            {travelers.map((traveler) => (
              <div
                key={traveler.id}
                onClick={() => handleTravelerClick(traveler)}
                className="relative bg-white rounded-[24px] p-4 cursor-pointer transition-all hover:shadow-md"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
              >
                {/* Status Tag */}
                <div className={`absolute top-3 right-3 ${traveler.statusColor} text-white text-xs px-2 py-1 rounded-full`}>
                  {traveler.status}
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#006666] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">{traveler.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-[16px] font-semibold text-[#121212]">
                        {traveler.name}
                      </h3>
                      {traveler.verifiedStudent && (
                        <div className="flex items-center gap-1 bg-[rgba(0,128,128,0)] bg-opacity-10 px-2 py-0.5 rounded-full">
                          <CheckCircle className="w-3 h-3 text-[#008080]" />
                          <span className="text-xs text-[#008080] font-medium">Verified Student</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-[#121212] opacity-60 mb-1">{traveler.bio}</p>
                    <div className="flex items-center gap-1 text-sm text-[#121212] opacity-60">
                      <span>★</span>
                      <span>{traveler.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[16px] text-[#121212] opacity-70">
                    <MapPin className="w-4 h-4" />
                    <span>{traveler.from} → {traveler.to}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[16px] text-[#121212] opacity-70">
                      <Calendar className="w-4 h-4" />
                      <span>{traveler.date}</span>
                    </div>
                    <div className="text-xs text-[#008080] font-medium">
                      {traveler.mutualConnections} Mutual Connections
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parcel Requests Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[20px] font-semibold text-[#121212]">
              Parcel Requests
            </h2>
            <button className="text-sm text-[#008080]" onClick={() => onNavigate('all-requests')}>See all</button>
          </div>

          <div className="space-y-3">
            {parcelRequests.map((request) => (
              <div
                key={request.id}
                onClick={() => onNavigate('details')}
                className="relative bg-white rounded-[24px] p-4 cursor-pointer transition-all hover:shadow-md"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
              >
                {/* Status Tag */}
                <div className={`absolute top-3 right-3 ${request.statusColor} text-white text-xs px-2 py-1 rounded-full`}>
                  {request.status}
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-[#121212] opacity-60" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[16px] font-semibold text-[#121212] mb-1">
                      {request.title}
                    </h3>
                    <p className="text-[16px] text-[#008080] font-medium">{request.reward}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[16px] text-[#121212] opacity-70">
                    <MapPin className="w-4 h-4" />
                    <span>{request.from} → {request.to}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[16px] text-[#121212] opacity-70">
                    <Package className="w-4 h-4" />
                    <span>{request.weight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glassmorphic Bottom Navigation */}
      <div 
        className="absolute bottom-0 left-0 right-0 border-t border-gray-200"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="flex items-center justify-around px-6 py-4">
          <button className="flex flex-col items-center gap-1 text-[#008080]">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#121212] opacity-40" onClick={() => onNavigate('chat')}>
            <MessageSquare className="w-6 h-6" />
            <span className="text-xs">Messages</span>
          </button>
          <button 
            onClick={() => onNavigate('create')}
            className="flex flex-col items-center gap-1 -mt-4"
          >
            <div className="w-14 h-14 bg-[#FF4F00] rounded-full flex items-center justify-center shadow-lg">
              <Plus className="w-7 h-7 text-white" />
            </div>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#121212] opacity-40" onClick={() => onNavigate('parcels')}>
            <Package className="w-6 h-6" />
            <span className="text-xs">Parcels</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#121212] opacity-40" onClick={() => onNavigate('profile')}>
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
import { ArrowLeft, MapPin, Calendar, Star, Shield, Search } from 'lucide-react';
import { Screen, ChatRecipient, UserProfileData } from '../App';

interface AvailableTravelersProps {
  onNavigate: (screen: Screen, recipientOrQuery?: ChatRecipient | string, request?: any, userProfile?: UserProfileData) => void;
}

export function AvailableTravelers({ onNavigate }: AvailableTravelersProps) {
  const travelers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      from: 'New York',
      to: 'London',
      date: 'Dec 15',
      rating: 4.9,
      reviews: 124,
      status: 'Departing Soon',
      statusColor: 'bg-yellow-500',
      capacity: '5kg available',
      transport: 'Flight'
    },
    {
      id: 2,
      name: 'Michael Chen',
      from: 'Tokyo',
      to: 'Paris',
      date: 'Dec 18',
      rating: 5.0,
      reviews: 89,
      status: 'Verified',
      statusColor: 'bg-[#27AE60]',
      capacity: '10kg available',
      transport: 'Flight'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      from: 'Berlin',
      to: 'Amsterdam',
      date: 'Dec 20',
      rating: 4.8,
      reviews: 56,
      status: 'Open for Offers',
      statusColor: 'bg-[#2F80ED]',
      capacity: '2kg available',
      transport: 'Train'
    },
    {
      id: 4,
      name: 'James Rodriguez',
      from: 'Madrid',
      to: 'Barcelona',
      date: 'Dec 22',
      rating: 4.7,
      reviews: 42,
      status: 'Verified',
      statusColor: 'bg-[#27AE60]',
      capacity: '8kg available',
      transport: 'Car'
    }
  ];

  return (
    <div className="h-full w-full bg-[#F8FAFB] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={() => onNavigate('home')}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#008080]" />
          </button>
          <h1 className="text-[20px] font-bold text-[#121212]">
            Available Travelers
          </h1>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#008080] opacity-60" />
          <input
            type="text"
            placeholder="Search destination or date..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#008080] transition-all text-[16px]"
          />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="space-y-4">
          {travelers.map((traveler) => {
            // Create chat recipient data
            const chatRecipient: ChatRecipient = {
              name: traveler.name,
              initial: traveler.name.charAt(0),
              rating: traveler.rating.toString(),
              deliveries: `${traveler.reviews}`,
              verified: traveler.status === 'Verified'
            };

            // Create user profile data
            const userProfile: UserProfileData = {
              name: traveler.name,
              initial: traveler.name.charAt(0),
              verified: traveler.status === 'Verified',
              rating: traveler.rating.toString(),
              reviewCount: `${traveler.reviews}`,
              university: traveler.from === 'New York' ? 'Columbia University' : 
                          traveler.from === 'Tokyo' ? 'University of Tokyo' :
                          traveler.from === 'Berlin' ? 'Humboldt University' : 'IE University',
              major: traveler.from === 'New York' ? 'Business Administration' :
                     traveler.from === 'Tokyo' ? 'Computer Science' :
                     traveler.from === 'Berlin' ? 'International Relations' : 'Economics',
              year: '3rd Year',
              location: traveler.from,
              totalDeliveries: `${traveler.reviews}`,
              successRate: '99%',
              memberSince: 'Jan 2024',
              about: `Verified student traveler traveling from ${traveler.from} to ${traveler.to}. ${traveler.capacity} for delivery.`
            };

            return (
              <div
                key={traveler.id}
                onClick={() => onNavigate('chat', chatRecipient, undefined, userProfile)}
                className="bg-white rounded-[24px] p-4 cursor-pointer transition-all relative"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
              >
                 {/* Status Tag */}
                 <div className={`absolute top-4 right-4 ${traveler.statusColor} text-white text-[10px] px-2 py-1 rounded-full font-medium`}>
                    {traveler.status}
                  </div>

                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#006666] rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-lg">
                    {traveler.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#121212] mb-1">
                      {traveler.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-medium">{traveler.rating}</span>
                      <span className="text-xs text-gray-400">({traveler.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[16px] text-[#121212] opacity-80">
                      <MapPin className="w-4 h-4 text-[#008080]" />
                      <span className="font-medium">{traveler.from} → {traveler.to}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-lg">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{traveler.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-lg">
                      <Shield className="w-3.5 h-3.5" />
                      <span>{traveler.capacity}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
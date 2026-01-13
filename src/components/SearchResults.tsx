import { ArrowLeft, MapPin, Calendar, Package, User, CheckCircle } from 'lucide-react';
import { Screen } from '../App';

interface SearchResultsProps {
  onNavigate: (screen: Screen) => void;
  query: string;
}

export function SearchResults({ onNavigate, query }: SearchResultsProps) {
  // All available travelers
  const allTravelers = [
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
    },
    {
      id: 3,
      name: 'Emma Schmidt',
      bio: 'Freelance Designer',
      from: 'Berlin',
      to: 'Munich',
      date: 'Dec 20',
      rating: 4.8,
      status: 'Available',
      statusColor: 'bg-[#008080]',
      mutualConnections: 2,
      verifiedStudent: false,
    },
    {
      id: 4,
      name: 'Carlos Ruiz',
      bio: 'Business Consultant',
      from: 'Madrid',
      to: 'Barcelona',
      date: 'Dec 22',
      rating: 4.7,
      status: 'Verified',
      statusColor: 'bg-[#27AE60]',
      mutualConnections: 4,
      verifiedStudent: false,
    },
  ];

  // All available parcels
  const allParcels = [
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
    {
      id: 3,
      title: 'Gift Box',
      from: 'Paris',
      to: 'Lyon',
      weight: '1.2 kg',
      reward: '$30',
      status: 'New Request',
      statusColor: 'bg-[#2F80ED]',
    },
    {
      id: 4,
      title: 'Medical Supplies',
      from: 'London',
      to: 'Manchester',
      weight: '3.0 kg',
      reward: '$55',
      status: 'Urgent',
      statusColor: 'bg-red-500',
    },
  ];

  // Filter travelers based on search query
  const filteredTravelers = allTravelers.filter((traveler) =>
    traveler.name.toLowerCase().includes(query.toLowerCase()) ||
    traveler.from.toLowerCase().includes(query.toLowerCase()) ||
    traveler.to.toLowerCase().includes(query.toLowerCase())
  );

  // Filter parcels based on search query
  const filteredParcels = allParcels.filter((parcel) =>
    parcel.title.toLowerCase().includes(query.toLowerCase()) ||
    parcel.from.toLowerCase().includes(query.toLowerCase()) ||
    parcel.to.toLowerCase().includes(query.toLowerCase())
  );

  const hasResults = filteredTravelers.length > 0 || filteredParcels.length > 0;

  return (
    <div className="h-full w-full bg-[#F8FAFB] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-4 mb-3">
          <button onClick={() => onNavigate('home')}>
            <ArrowLeft className="w-6 h-6 text-[#008080]" />
          </button>
          <h1 className="text-[20px] font-semibold text-[#121212]">
            Search Results
          </h1>
        </div>
        <div className="bg-gray-50 rounded-xl px-4 py-2">
          <p className="text-sm text-[#121212] opacity-60">
            Searching for: <span className="font-semibold text-[#008080]">"{query}"</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {!hasResults ? (
          /* No Results */
          <div className="flex flex-col items-center justify-center h-full pb-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Package className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-[#121212] mb-2">No results found</h2>
            <p className="text-sm text-[#121212] opacity-60 text-center max-w-xs">
              Try searching with different keywords or check the spelling
            </p>
          </div>
        ) : (
          <div className="space-y-6 pb-6">
            {/* Travelers Results */}
            {filteredTravelers.length > 0 && (
              <div>
                <h2 className="text-[18px] font-semibold text-[#121212] mb-3">
                  Travelers ({filteredTravelers.length})
                </h2>
                <div className="space-y-3">
                  {filteredTravelers.map((traveler) => (
                    <div
                      key={traveler.id}
                      onClick={() => onNavigate('chat')}
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
                              <div className="flex items-center gap-1 bg-[#008080] bg-opacity-10 px-2 py-0.5 rounded-full">
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
            )}

            {/* Parcels Results */}
            {filteredParcels.length > 0 && (
              <div>
                <h2 className="text-[18px] font-semibold text-[#121212] mb-3">
                  Parcels ({filteredParcels.length})
                </h2>
                <div className="space-y-3">
                  {filteredParcels.map((parcel) => (
                    <div
                      key={parcel.id}
                      onClick={() => onNavigate('details')}
                      className="relative bg-white rounded-[24px] p-4 cursor-pointer transition-all hover:shadow-md"
                      style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
                    >
                      {/* Status Tag */}
                      <div className={`absolute top-3 right-3 ${parcel.statusColor} text-white text-xs px-2 py-1 rounded-full`}>
                        {parcel.status}
                      </div>

                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Package className="w-6 h-6 text-[#121212] opacity-60" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[16px] font-semibold text-[#121212] mb-1">
                            {parcel.title}
                          </h3>
                          <p className="text-[16px] text-[#008080] font-medium">{parcel.reward}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[16px] text-[#121212] opacity-70">
                          <MapPin className="w-4 h-4" />
                          <span>{parcel.from} → {parcel.to}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[16px] text-[#121212] opacity-70">
                          <Package className="w-4 h-4" />
                          <span>{parcel.weight}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
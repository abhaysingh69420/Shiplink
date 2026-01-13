import { ArrowLeft, Package, MapPin, DollarSign, Clock, Filter } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface AllParcelRequestsProps {
  onNavigate: (screen: Screen) => void;
}

type FilterType = 'all' | 'high-reward' | 'urgent' | 'fragile';

export function AllParcelRequests({ onNavigate }: AllParcelRequestsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const requests = [
    {
      id: 1,
      title: 'Electronics Package',
      from: 'Berlin',
      to: 'Munich',
      weight: '2.5 kg',
      reward: '$45',
      rewardValue: 45,
      status: 'New Request',
      statusColor: 'bg-[#2F80ED]',
      deadline: 'Dec 20',
      isFragile: false
    },
    {
      id: 2,
      title: 'Document Delivery',
      from: 'Madrid',
      to: 'Barcelona',
      weight: '0.5 kg',
      reward: '$25',
      rewardValue: 25,
      status: 'Urgent',
      statusColor: 'bg-red-500',
      deadline: 'Dec 16',
      isFragile: false
    },
    {
      id: 3,
      title: 'Gift Box (Fragile)',
      from: 'Paris',
      to: 'Lyon',
      weight: '1.2 kg',
      reward: '$35',
      rewardValue: 35,
      status: 'Standard',
      statusColor: 'bg-gray-500',
      deadline: 'Dec 22',
      isFragile: true
    },
    {
      id: 4,
      title: 'Clothing Bundle',
      from: 'London',
      to: 'Manchester',
      weight: '4.0 kg',
      reward: '$50',
      rewardValue: 50,
      status: 'Flexible',
      statusColor: 'bg-[#27AE60]',
      deadline: 'Dec 25',
      isFragile: false
    },
    {
      id: 5,
      title: 'Fragile Glassware',
      from: 'Rome',
      to: 'Milan',
      weight: '3.0 kg',
      reward: '$60',
      rewardValue: 60,
      status: 'Urgent',
      statusColor: 'bg-red-500',
      deadline: 'Dec 17',
      isFragile: true
    }
  ];

  // Filter requests based on active filter
  const filteredRequests = requests.filter((request) => {
    switch (activeFilter) {
      case 'high-reward':
        return request.rewardValue >= 40;
      case 'urgent':
        return request.status === 'Urgent';
      case 'fragile':
        return request.isFragile;
      default:
        return true;
    }
  });

  return (
    <div className="h-full w-full bg-[#F8FAFB] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('home')}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-[#008080]" />
            </button>
            <h1 className="text-[20px] font-bold text-[#121212]">
              Parcel Requests
            </h1>
          </div>
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <Filter className="w-5 h-5 text-[#008080]" />
          </button>
        </div>

        {/* Categories / Filter tabs (Visual only) */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <button
            className={`px-4 py-2 bg-[#008080] text-white text-xs rounded-full font-medium whitespace-nowrap ${activeFilter === 'all' ? 'bg-[#008080]' : 'bg-gray-100 text-[#121212] opacity-60'}`}
            onClick={() => setActiveFilter('all')}
          >
            All Requests
          </button>
          <button
            className={`px-4 py-2 bg-[#008080] text-white text-xs rounded-full font-medium whitespace-nowrap ${activeFilter === 'high-reward' ? 'bg-[#008080]' : 'bg-gray-100 text-[#121212] opacity-60'}`}
            onClick={() => setActiveFilter('high-reward')}
          >
            High Reward
          </button>
          <button
            className={`px-4 py-2 bg-[#008080] text-white text-xs rounded-full font-medium whitespace-nowrap ${activeFilter === 'urgent' ? 'bg-[#008080]' : 'bg-gray-100 text-[#121212] opacity-60'}`}
            onClick={() => setActiveFilter('urgent')}
          >
            Urgent
          </button>
          <button
            className={`px-4 py-2 bg-[#008080] text-white text-xs rounded-full font-medium whitespace-nowrap ${activeFilter === 'fragile' ? 'bg-[#008080]' : 'bg-gray-100 text-[#121212] opacity-60'}`}
            onClick={() => setActiveFilter('fragile')}
          >
            Fragile
          </button>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="space-y-4">
          {filteredRequests.map((request) => (
            <div
              key={request.id}
              onClick={() => onNavigate('details')}
              className="bg-white rounded-[24px] p-4 cursor-pointer transition-all relative"
              style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                    <Package className="w-5 h-5 text-[#121212] opacity-70" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#121212]">
                      {request.title}
                    </h3>
                    <div className={`text-[10px] inline-flex items-center px-2 py-0.5 rounded-full mt-1 ${request.statusColor} text-white`}>
                      {request.status}
                    </div>
                  </div>
                </div>
                <div className="text-[#008080] font-bold text-lg">
                  {request.reward}
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-gray-50 mt-2">
                <div className="flex items-center gap-2 text-[16px] text-[#121212] opacity-80">
                  <MapPin className="w-4 h-4 text-[#008080]\" />
                  <span className="font-medium">{request.from} → {request.to}</span>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5" />
                    <span>{request.weight}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Before {request.deadline}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
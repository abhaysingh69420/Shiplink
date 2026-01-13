import { ArrowLeft, Package, MapPin, Calendar, Scale, Box, DollarSign, Truck } from 'lucide-react';
import { Screen } from '../App';

interface AcceptedParcelsProps {
  onNavigate: (screen: Screen) => void;
}

export function AcceptedParcels({ onNavigate }: AcceptedParcelsProps) {
  const acceptedParcels = [
    {
      id: 1,
      title: 'Gaming Console',
      type: 'Electronics',
      weight: '2.5 kg',
      dimensions: '40x30x15 cm',
      from: 'Berlin',
      to: 'Munich',
      date: 'Dec 19, 2024',
      reward: '$45',
      status: 'In Transit',
      statusColor: 'bg-[#2F80ED]',
      traveler: 'Sarah Johnson'
    },
    {
      id: 2,
      title: 'Legal Documents',
      type: 'Documents',
      weight: '0.5 kg',
      dimensions: 'A4 Envelope',
      from: 'Madrid',
      to: 'Barcelona',
      date: 'Dec 20, 2024',
      reward: '$25',
      status: 'Picked Up',
      statusColor: 'bg-[#27AE60]',
      traveler: 'Carlos Ruiz'
    },
    {
      id: 3,
      title: 'Handmade Ceramics',
      type: 'Fragile',
      weight: '1.2 kg',
      dimensions: '20x20x20 cm',
      from: 'Paris',
      to: 'Lyon',
      date: 'Dec 22, 2024',
      reward: '$35',
      status: 'Awaiting Pickup',
      statusColor: 'bg-yellow-500',
      traveler: 'Marie Curie'
    },
    {
      id: 4,
      title: 'Winter Clothes',
      type: 'Clothing',
      weight: '5.0 kg',
      dimensions: '50x40x30 cm',
      from: 'Oslo',
      to: 'Stockholm',
      date: 'Dec 24, 2024',
      reward: '$60',
      status: 'Pending',
      statusColor: 'bg-gray-500',
      traveler: 'Lars Ulrich'
    }
  ];

  return (
    <div className="h-full w-full bg-[#F8FAFB] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('home')}>
            <ArrowLeft className="w-6 h-6 text-[#008080]" />
          </button>
          <h1 className="text-[20px] font-semibold text-[#121212]">
            Accepted Parcels
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        {acceptedParcels.map((parcel) => (
          <div
            key={parcel.id}
            className="bg-white rounded-[24px] p-4 transition-shadow"
            style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
          >
            {/* Header with Status */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                  <Package className="w-5 h-5 text-[#121212]" />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#121212]">{parcel.title}</h3>
                  <span className="text-xs text-gray-500">{parcel.type}</span>
                </div>
              </div>
              <div className={`${parcel.statusColor} text-white text-[10px] px-2 py-1 rounded-full font-medium`}>
                {parcel.status}
              </div>
            </div>

            {/* Route */}
            <div className="flex items-center gap-3 mb-4 bg-gray-50 p-3 rounded-xl">
              <MapPin className="w-4 h-4 text-[#008080]" />
              <div className="flex items-center gap-2 text-sm text-[#121212]">
                <span className="font-medium">{parcel.from}</span>
                <span className="text-gray-400">→</span>
                <span className="font-medium">{parcel.to}</span>
              </div>
            </div>

            {/* Delivery Timeline - Only show for In Transit */}
            {parcel.status === 'In Transit' && (
              <div className="mb-4 p-3 bg-[#008080] bg-opacity-5 rounded-xl">
                <p className="text-xs text-gray-600 mb-3 font-medium">Delivery Timeline</p>
                <div className="flex items-center justify-between mb-3">
                  {/* Picked Up */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-3 h-3 rounded-full bg-[#27AE60] mb-1"></div>
                    <span className="text-[10px] text-gray-600 text-center">Picked Up</span>
                  </div>
                  {/* Line */}
                  <div className="flex-1 h-0.5 bg-[#008080] mx-2"></div>
                  {/* In Transit */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-3 h-3 rounded-full bg-[#008080] mb-1 animate-pulse"></div>
                    <span className="text-[10px] text-[#008080] font-semibold text-center">In Transit</span>
                  </div>
                  {/* Line */}
                  <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>
                  {/* Delivered */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-3 h-3 rounded-full bg-gray-300 mb-1"></div>
                    <span className="text-[10px] text-gray-400 text-center">Delivered</span>
                  </div>
                </div>
              </div>
            )}

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Scale className="w-3 h-3" />
                <span>{parcel.weight}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Box className="w-3 h-3" />
                <span>{parcel.dimensions}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Calendar className="w-3 h-3" />
                <span>{parcel.date}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#008080] font-medium">
                <DollarSign className="w-3 h-3" />
                <span>{parcel.reward}</span>
              </div>
            </div>

            {/* Traveler Info */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#008080] rounded-full flex items-center justify-center text-[10px] text-white">
                  {parcel.traveler.charAt(0)}
                </div>
                <span className="text-xs text-gray-600">Carried by {parcel.traveler}</span>
              </div>
              <button className="text-xs text-[#008080] font-medium">
                Track
              </button>
            </div>

            {/* Live Status - Only show for In Transit */}
            {parcel.status === 'In Transit' && (
              <div className="mt-3 p-3 bg-blue-50 rounded-xl">
                <p className="text-xs text-gray-700">
                  Sarah is currently at Berlin Brandenburg Airport ✈️
                </p>
              </div>
            )}

            {/* Scan QR Button */}
            <button 
              onClick={() => onNavigate('handover-qr')}
              className="w-full mt-3 py-3 px-4 bg-[#FF4F00] rounded-xl text-white text-[14px] font-medium transition-all hover:bg-[#E64600] active:scale-95"
              style={{ 
                boxShadow: '0 2px 8px rgba(255, 79, 0, 0.2)'
              }}
            >
              Scan QR to Handover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
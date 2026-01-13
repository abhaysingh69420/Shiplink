import { CheckCircle, MapPin, Package, Weight, DollarSign, User, Calendar, ArrowLeft } from 'lucide-react';
import { Screen, ChatRecipient, RequestData } from '../App';

interface RequestAcceptedProps {
  onNavigate: (screen: Screen, recipient?: ChatRecipient, request?: RequestData) => void;
  requestData?: {
    title: string;
    destination: string;
    packageType: string;
    weight: string;
    reward: string;
    sender: {
      name: string;
      rating: string;
      deliveries: string;
    };
    expectedDelivery: string;
  };
}

export function RequestAccepted({ onNavigate, requestData }: RequestAcceptedProps) {
  // Default data if none provided
  const data = requestData || {
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

  // Create chat recipient from sender data
  const senderInfo: ChatRecipient = {
    name: data.sender.name,
    initial: data.sender.name.charAt(0),
    rating: data.sender.rating,
    deliveries: data.sender.deliveries,
    verified: true,
  };

  return (
    <div className="h-full w-full bg-[#F8FAFB] overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 flex items-center justify-between">
        <button onClick={() => onNavigate('home')}>
          <ArrowLeft className="w-6 h-6 text-[#008080]" />
        </button>
        <h1 className="text-[20px] text-[#121212]" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
          Request Accepted
        </h1>
        <div className="w-6"></div>
      </div>

      {/* Success Animation */}
      <div className="px-6 py-8 flex flex-col items-center justify-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#27AE60] opacity-10 rounded-full blur-2xl animate-pulse"></div>
          <CheckCircle className="w-24 h-24 text-[#27AE60] relative z-10" strokeWidth={1.5} />
        </div>
        <h2 className="text-[28px] text-[#121212] mb-2 text-center" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 700 }}>
          Request Accepted!
        </h2>
        <p className="text-[#121212] opacity-60 text-center max-w-xs">
          You've successfully accepted this delivery request. The sender will be notified.
        </p>
      </div>

      {/* Request Summary */}
      <div className="px-6 pb-8">
        <div className="bg-gradient-to-br from-[#008080] to-[#006666] rounded-2xl p-6 mb-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[20px]" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
              {data.title}
            </h3>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-sm">Active</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 opacity-80" />
              <span className="opacity-90">{data.destination}</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 opacity-80" />
              <span className="opacity-90">Expected: {data.expectedDelivery}</span>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 opacity-80" />
              <span className="text-[24px]" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 700 }}>
                {data.reward}
              </span>
            </div>
          </div>
        </div>

        {/* Details Cards */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
              <Package className="w-5 h-5 text-[#008080]" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-[#121212] opacity-50 mb-1">Package Type</p>
              <p className="text-[#121212]" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
                {data.packageType}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
              <Weight className="w-5 h-5 text-[#008080]" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-[#121212] opacity-50 mb-1">Weight</p>
              <p className="text-[#121212]" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
                {data.weight}
              </p>
            </div>
          </div>
        </div>

        {/* Sender Info */}
        <div className="p-4 bg-gray-50 rounded-xl mb-6">
          <h3 className="text-[16px] text-[#121212] mb-3" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
            Sender
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#006666] rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-[#121212] mb-1" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
                {data.sender.name}
              </p>
              <div className="flex items-center gap-1 text-sm text-[#121212] opacity-60">
                <span>★</span>
                <span>{data.sender.rating}</span>
                <span className="mx-1">•</span>
                <span>{data.sender.deliveries}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-[#008080] border-opacity-20 rounded-xl p-4 mb-6">
          <h3 className="text-[#008080] mb-2" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
            Next Steps
          </h3>
          <ul className="space-y-2 text-sm text-[#121212] opacity-70">
            <li className="flex items-start gap-2">
              <span className="text-[#008080] mt-0.5">•</span>
              <span>Coordinate pickup details with the sender</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#008080] mt-0.5">•</span>
              <span>Ensure package is properly secured for travel</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#008080] mt-0.5">•</span>
              <span>Update delivery status upon completion</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => onNavigate('chat', senderInfo, data)}
            className="w-full py-4 px-6 bg-[#FF4F00] rounded-xl text-white transition-all hover:bg-[#E64600]"
            style={{ 
              fontFamily: 'SF Pro Display, Inter, sans-serif',
              fontWeight: 600,
              boxShadow: '0 4px 16px rgba(255, 79, 0, 0.25)'
            }}
          >
            Message Sender
          </button>
          <button
            onClick={() => onNavigate('home')}
            className="w-full py-4 px-6 bg-white border-2 border-gray-200 rounded-xl text-[#121212] transition-all hover:bg-gray-50"
            style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
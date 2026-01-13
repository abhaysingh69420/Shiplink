import { useState } from 'react';
import { ArrowLeft, CheckCircle, Star } from 'lucide-react';
import { Screen } from '../App';

interface ConfirmDeliveryProps {
  onNavigate: (screen: Screen) => void;
}

export function ConfirmDelivery({ onNavigate }: ConfirmDeliveryProps) {
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState('');

  return (
    <div className="h-full w-full bg-white overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 flex items-center">
        <button onClick={() => onNavigate('home')}>
          <ArrowLeft className="w-6 h-6 text-[#121212]" />
        </button>
      </div>

      {/* Content */}
      <div className="px-6 pb-12">
        {/* Success Checkmark Animation */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Outer glow circle */}
            <div className="absolute inset-0 bg-[#27AE60] opacity-10 rounded-full animate-pulse scale-125"></div>
            {/* Main circle */}
            <div className="relative w-32 h-32 bg-[#27AE60] rounded-full flex items-center justify-center">
              <CheckCircle className="w-20 h-20 text-white" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-2">
          <h1 className="text-[32px] text-[#121212] mb-2" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 700 }}>
            Confirm Delivery
          </h1>
          <p className="text-[#27AE60] text-[18px]" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
            Thank you!
          </p>
        </div>

        {/* Delivery Info */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 bg-white rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1601739308534-b06bc53fc27d?w=200"
                alt="Parcel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-[#121212] mb-1" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
                Electronics Package
              </h3>
              <p className="text-sm text-[#121212] opacity-60">Delivered to Munich</p>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-[#121212] opacity-70">Reward Earned</span>
              <span className="text-[#27AE60] text-[24px]" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 700 }}>
                $45
              </span>
            </div>
          </div>
        </div>

        {/* Rating Section */}
        <div className="mb-6">
          <h2 className="text-[20px] text-[#121212] mb-4 text-center" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
            Rate Your Experience
          </h2>
          
          {/* Large Golden Stars */}
          <div className="flex justify-center gap-3 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`w-12 h-12 ${
                    star <= rating
                      ? 'fill-[#FFD700] text-[#FFD700]'
                      : 'fill-none text-gray-300'
                  }`}
                  strokeWidth={2}
                />
              </button>
            ))}
          </div>

          {/* Traveler Info */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2F80ED] to-[#121212] rounded-full flex items-center justify-center">
              <span className="text-white">S</span>
            </div>
            <div>
              <p className="text-[#121212]" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
                Sarah Johnson
              </p>
              <p className="text-sm text-[#121212] opacity-60">Traveler</p>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className="mb-6">
          <label className="block text-[#121212] opacity-70 mb-2 text-sm">
            Additional Feedback (Optional)
          </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your experience with Sarah..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#2F80ED] transition-colors resize-none"
            style={{ fontFamily: 'SF Pro Display, Inter, sans-serif' }}
          />
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => onNavigate('home')}
            className="w-full py-4 px-6 bg-[#121212] rounded-xl text-white transition-all hover:bg-[#2a2a2a]"
            style={{ 
              fontFamily: 'SF Pro Display, Inter, sans-serif',
              fontWeight: 600,
              boxShadow: '0 4px 16px rgba(18, 18, 18, 0.25)'
            }}
          >
            Confirm Delivery
          </button>
          
          <button
            onClick={() => onNavigate('home')}
            className="w-full py-4 px-6 bg-white border border-gray-300 rounded-xl text-[#121212] transition-all hover:bg-gray-50"
            style={{ 
              fontFamily: 'SF Pro Display, Inter, sans-serif',
              fontWeight: 600
            }}
          >
            Cancel
          </button>
        </div>

        {/* Trust Message */}
        <p className="text-center text-sm text-[#121212] opacity-50 mt-6 leading-relaxed">
          Your feedback helps build trust in our community
        </p>
      </div>
    </div>
  );
}

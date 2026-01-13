import { Star, ArrowLeft, User } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface RatePeerProps {
  onNavigate: (screen: Screen) => void;
}

export function RatePeer({ onNavigate }: RatePeerProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');
  const [shareToFeed, setShareToFeed] = useState(false);

  const handleSubmit = () => {
    // Navigate to home or show success message
    onNavigate('home');
  };

  return (
    <div className="h-full w-full bg-[#F8FAFB] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('home')}>
            <ArrowLeft className="w-6 h-6 text-[#008080]" />
          </button>
          <h1 className="text-[20px] font-semibold text-[#121212]">
            Rate your Peer
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        {/* Profile Photo */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-[#008080] to-[#006666] rounded-full flex items-center justify-center mb-4">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-[18px] font-semibold text-[#121212] mb-1">
            Sarah Johnson
          </h2>
          <p className="text-[14px] text-gray-600">
            delivered your Electronics Package!
          </p>
        </div>

        {/* Rating Stars */}
        <div className="bg-white rounded-[24px] p-6 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <p className="text-[14px] text-gray-600 mb-4 text-center">
            How was your experience?
          </p>
          <div className="flex justify-center gap-3 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110 active:scale-95"
              >
                <Star
                  className={`w-12 h-12 ${
                    star <= (hoveredRating || rating)
                      ? 'fill-[#FF4F00] text-[#FF4F00]'
                      : 'text-gray-300'
                  } transition-colors`}
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-center text-sm text-[#FF4F00] font-medium mt-2">
              {rating === 5 ? 'Excellent!' : rating === 4 ? 'Great!' : rating === 3 ? 'Good!' : rating === 2 ? 'Okay' : 'Needs Improvement'}
            </p>
          )}
        </div>

        {/* Comment Box */}
        <div className="bg-white rounded-[24px] p-6 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <label className="block text-[14px] text-gray-600 mb-3">
            Write a public thank-you note
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a public thank-you note to Sarah..."
            className="w-full h-32 px-4 py-3 bg-gray-50 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#008080] text-[14px] text-[#121212]"
          />
        </div>

        {/* Social Toggle */}
        <div 
          className="bg-white rounded-[24px] p-5 mb-6" 
          style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-[14px] text-[#121212] font-medium mb-1">
                Share to Community Feed
              </p>
              <p className="text-xs text-gray-500">
                Let others see this successful delivery
              </p>
            </div>
            <button
              onClick={() => setShareToFeed(!shareToFeed)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                shareToFeed ? 'bg-[#008080]' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  shareToFeed ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={rating === 0}
          className={`w-full py-4 px-6 rounded-xl text-white text-[16px] font-semibold transition-all ${
            rating === 0
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-[#008080] hover:bg-[#006666] active:scale-95'
          }`}
          style={rating > 0 ? { boxShadow: '0 4px 16px rgba(0, 128, 128, 0.3)' } : {}}
        >
          Release Payment & Complete
        </button>

        {rating === 0 && (
          <p className="text-center text-xs text-gray-500 mt-3">
            Please rate your experience to continue
          </p>
        )}
      </div>
    </div>
  );
}

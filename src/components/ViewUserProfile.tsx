import { ArrowLeft, User, Star, Shield, MapPin, GraduationCap, Calendar, Package, CheckCircle, Award } from 'lucide-react';
import { Screen, UserProfileData, ChatRecipient } from '../App';

interface ViewUserProfileProps {
  onNavigate: (screen: Screen, recipientOrQuery?: ChatRecipient | string, request?: any, userProfile?: UserProfileData) => void;
  userProfile?: UserProfileData;
}

export function ViewUserProfile({ onNavigate, userProfile }: ViewUserProfileProps) {
  // Default profile data (Emma Schmidt)
  const defaultProfile: UserProfileData = {
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

  const profile = userProfile || defaultProfile;

  const reviews = [
    {
      id: 1,
      reviewer: 'Michael Chen',
      rating: 5,
      comment: 'Super reliable! Sarah delivered my textbooks on time and kept me updated throughout. Great communication!',
      date: 'Dec 15, 2024'
    },
    {
      id: 2,
      reviewer: 'Emma Rodriguez',
      rating: 5,
      comment: 'Excellent service! Very careful with my laptop. Highly recommend!',
      date: 'Dec 10, 2024'
    },
    {
      id: 3,
      reviewer: 'David Kim',
      rating: 4,
      comment: 'Good experience overall. Package arrived safely.',
      date: 'Dec 5, 2024'
    }
  ];

  return (
    <div className="h-full w-full bg-[#F8FAFB] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('chat')}>
            <ArrowLeft className="w-6 h-6 text-[#008080]" />
          </button>
          <h1 className="text-[20px] font-semibold text-[#121212]">
            Profile
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {/* User Header */}
        <div className="bg-white rounded-[24px] p-6 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-[#008080] to-[#006666] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[32px] text-white font-semibold">{profile.initial}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-[20px] text-[#121212] font-semibold">
                  {profile.name}
                </h2>
                {profile.verified && (
                  <div className="bg-[#008080] rounded-full p-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-[14px] text-[#121212] font-medium">{profile.rating}</span>
                <span className="text-[14px] text-gray-500">({profile.reviewCount} reviews)</span>
              </div>
              <p className="text-[14px] text-gray-600">Member since {profile.memberSince}</p>
            </div>
          </div>

          {/* Verification Badges */}
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1.5 bg-[rgba(0,128,128,0)] bg-opacity-10 rounded-lg px-3 py-1.5">
              <Shield className="w-4 h-4 text-[#008080]" />
              <span className="text-xs text-[rgba(0,128,128,0)] font-medium">Verified Student</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[rgba(39,174,96,0)] bg-opacity-10 rounded-lg px-3 py-1.5">
              <CheckCircle className="w-4 h-4 text-[#27AE60]" />
              <span className="text-xs text-[#27AE60] font-medium">ID Verified</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[rgba(255,79,0,0)] bg-opacity-10 rounded-lg px-3 py-1.5">
              <Award className="w-4 h-4 text-[#FF4F00]" />
              <span className="text-xs text-[#FF4F00] font-medium">Top Carrier</span>
            </div>
          </div>
        </div>

        {/* Student Information */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="text-[16px] font-semibold text-[#121212] mb-4">Student Details</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-[#008080] mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 mb-0.5">University</p>
                <p className="text-[14px] text-[#121212] font-medium">{profile.university}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-[#008080] mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Major</p>
                <p className="text-[14px] text-[#121212] font-medium">{profile.major}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#008080] mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Year</p>
                <p className="text-[14px] text-[#121212] font-medium">{profile.year}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#008080] mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Location</p>
                <p className="text-[14px] text-[#121212] font-medium">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="text-[16px] font-semibold text-[#121212] mb-4">Activity</h3>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#008080] bg-opacity-5 rounded-xl p-3 text-center">
              <Package className="w-5 h-5 text-[#008080] mx-auto mb-2" />
              <p className="text-[20px] font-semibold text-[#121212]">{profile.totalDeliveries}</p>
              <p className="text-xs text-gray-600">Deliveries</p>
            </div>
            <div className="bg-[#27AE60] bg-opacity-5 rounded-xl p-3 text-center">
              <CheckCircle className="w-5 h-5 text-[#27AE60] mx-auto mb-2" />
              <p className="text-[20px] font-semibold text-[#121212]">{profile.successRate}</p>
              <p className="text-xs text-gray-600">Success</p>
            </div>
            <div className="bg-[#FF4F00] bg-opacity-5 rounded-xl p-3 text-center">
              <Star className="w-5 h-5 text-[#FF4F00] mx-auto mb-2" />
              <p className="text-[20px] font-semibold text-[#121212]">{profile.rating}</p>
              <p className="text-xs text-gray-600">Rating</p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="text-[16px] font-semibold text-[#121212] mb-4">Reviews</h3>
          
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-[#121212]">{review.reviewer.charAt(0)}</span>
                    </div>
                    <span className="text-[14px] font-medium text-[#121212]">{review.reviewer}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-[14px] text-gray-700 mb-2">{review.comment}</p>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-[24px] p-5" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="text-[16px] font-semibold text-[#121212] mb-3">About</h3>
          <p className="text-[14px] text-gray-700 leading-relaxed">
            {profile.about}
          </p>
        </div>
      </div>
    </div>
  );
}
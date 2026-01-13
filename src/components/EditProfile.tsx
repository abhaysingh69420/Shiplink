import { ArrowLeft, User, Camera, Save } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface EditProfileProps {
  onNavigate: (screen: Screen) => void;
}

export function EditProfile({ onNavigate }: EditProfileProps) {
  const [formData, setFormData] = useState({
    name: 'Alex Thompson',
    email: 'alex.thompson@email.com',
    phone: '+1 (555) 123-4567',
    university: 'Stanford University',
    major: 'Computer Science',
    year: '3rd Year',
    location: 'San Francisco, CA',
    bio: 'CS student at Stanford. I frequently travel between SF and LA. Always happy to help fellow students with their packages! 📦'
  });

  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // Simulate save
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onNavigate('profile');
    }, 1500);
  };

  return (
    <div className="h-full w-full bg-[#F8FAFB] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <button onClick={() => onNavigate('profile')}>
            <ArrowLeft className="w-6 h-6 text-[#008080]" />
          </button>
          <h1 className="text-[20px] font-semibold text-[#121212]">
            Edit Profile
          </h1>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {/* Profile Photo */}
        <div className="bg-white rounded-[24px] p-6 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <div className="flex flex-col items-center">
            <div className="relative mb-3">
              <div className="w-24 h-24 bg-gradient-to-br from-[#008080] to-[#006666] rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#FF4F00] rounded-full flex items-center justify-center border-2 border-white">
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>
            <p className="text-sm text-gray-500">Change profile photo</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="text-[16px] font-semibold text-[#121212] mb-4">Personal Information</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080] text-[14px]"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080] text-[14px]"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080] text-[14px]"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080] text-[14px]"
              />
            </div>
          </div>
        </div>

        {/* Student Information */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="text-[16px] font-semibold text-[#121212] mb-4">Student Information</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">University</label>
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080] text-[14px]"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Major</label>
              <input
                type="text"
                name="major"
                value={formData.major}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080] text-[14px]"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Year</label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080] text-[14px]"
              >
                <option>1st Year (Freshman)</option>
                <option>2nd Year (Sophomore)</option>
                <option>3rd Year</option>
                <option>4th Year (Senior)</option>
                <option>Graduate Student</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080] text-[14px] resize-none"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className={`w-full py-4 rounded-xl font-semibold text-white transition-all ${
            saveSuccess ? 'bg-[#27AE60]' : 'bg-[#008080] hover:bg-[#006666]'
          }`}
        >
          {saveSuccess ? (
            <span className="flex items-center justify-center gap-2">
              <Save className="w-5 h-5" />
              Saved Successfully!
            </span>
          ) : (
            'Save Changes'
          )}
        </button>
      </div>
    </div>
  );
}

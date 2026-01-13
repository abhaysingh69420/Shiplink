import { ArrowLeft, Lock, Shield, Eye, EyeOff, Smartphone, CheckCircle, AlertCircle } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface PrivacySecurityProps {
  onNavigate: (screen: Screen) => void;
}

export function PrivacySecurity({ onNavigate }: PrivacySecurityProps) {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
    setPasswordError('');
  };

  const handlePasswordSubmit = () => {
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setPasswordError('Please fill in all fields');
      return;
    }
    
    if (passwordData.newPassword.length < 8) {
      setPasswordError('New password must be at least 8 characters');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }

    // Simulate password change
    setPasswordChangeSuccess(true);
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    
    setTimeout(() => {
      setPasswordChangeSuccess(false);
    }, 3000);
  };

  const handle2FAToggle = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
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
            Privacy & Security
          </h1>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {/* Two-Factor Authentication */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-[rgba(0,128,128,0.5)] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-5 h-5 text-[#008080]" />
            </div>
            <div className="flex-1">
              <h3 className="text-[16px] font-semibold text-[#121212] mb-1">Two-Factor Authentication</h3>
              <p className="text-xs text-gray-500 mb-3">
                Add an extra layer of security to your account with 2FA
              </p>
              
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${twoFactorEnabled ? 'text-[#27AE60]' : 'text-gray-500'}`}>
                  {twoFactorEnabled ? 'Enabled' : 'Disabled'}
                </span>
                <button
                  onClick={handle2FAToggle}
                  className={`relative w-12 h-7 rounded-full transition-colors ${
                    twoFactorEnabled ? 'bg-[#008080]' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {twoFactorEnabled && (
                <div className="mt-3 p-3 bg-[rgba(39,174,96,0.18)] bg-opacity-10 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#27AE60] mt-0.5" />
                    <div>
                      <p className="text-xs text-[#27AE60] font-medium">2FA Active</p>
                      <p className="text-xs text-[#27AE60] opacity-80 mt-0.5">
                        Your account is protected with SMS verification
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[rgba(255,79,0,0.48)] bg-opacity-10 rounded-full flex items-center justify-center">
              <Lock className="w-5 h-5 text-[#FF4F00]" />
            </div>
            <h3 className="text-[16px] font-semibold text-[#121212]">Change Password</h3>
          </div>

          {passwordChangeSuccess && (
            <div className="mb-4 p-3 bg-[#27AE60] bg-opacity-10 rounded-lg flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#27AE60]" />
              <p className="text-sm text-[#27AE60] font-medium">Password changed successfully!</p>
            </div>
          )}

          {passwordError && (
            <div className="mb-4 p-3 bg-red-50 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500" />
              <p className="text-sm text-red-500">{passwordError}</p>
            </div>
          )}

          <div className="space-y-4">
            {/* Current Password */}
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Current Password</label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080] text-[14px]"
                  placeholder="Enter current password"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showCurrentPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">New Password</label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080] text-[14px]"
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showNewPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-1.5">Must be at least 8 characters</p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Confirm New Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008080] text-[14px]"
                  placeholder="Confirm new password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              onClick={handlePasswordSubmit}
              className="w-full py-3 bg-[#008080] text-white rounded-xl font-semibold hover:bg-[#006666] transition-colors"
            >
              Update Password
            </button>
          </div>
        </div>

        {/* Account Privacy */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[rgba(47,128,237,0.5)] bg-opacity-10 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#2F80ED]" />
            </div>
            <h3 className="text-[16px] font-semibold text-[#121212]">Privacy Controls</h3>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-[14px] text-[#121212]">Profile Visibility</span>
              <span className="text-sm text-[#008080] font-medium">Students Only</span>
            </button>
            <button className="w-full flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-[14px] text-[#121212]">Show Activity Status</span>
              <span className="text-sm text-[#008080] font-medium">On</span>
            </button>
            <button className="w-full flex items-center justify-between py-3">
              <span className="text-[14px] text-[#121212]">Data & Privacy</span>
              <span className="text-sm text-gray-400">→</span>
            </button>
          </div>
        </div>

        {/* Security Info */}
        <div className="bg-[rgba(255,79,0,0.5)] bg-opacity-5 border border-[#FF4F00] border-opacity-20 rounded-xl p-4">
          <p className="text-xs text-[#FF4F00] leading-relaxed">
            🔒 Never share your password with anyone. ShipLink staff will never ask for your password.
          </p>
        </div>
      </div>
    </div>
  );
}

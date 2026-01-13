import { ArrowLeft, Bell, Mail, MessageSquare, Package, DollarSign, CheckCircle } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface NotificationSettingsProps {
  onNavigate: (screen: Screen) => void;
}

export function NotificationSettings({ onNavigate }: NotificationSettingsProps) {
  const [settings, setSettings] = useState({
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    // Specific notifications
    newMessages: true,
    deliveryUpdates: true,
    paymentConfirmations: true,
    marketingEmails: false,
    weeklyDigest: true,
    urgentOnly: false
  });

  const handleToggle = (key: string) => {
    setSettings({
      ...settings,
      [key]: !settings[key as keyof typeof settings]
    });
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
            Notification Settings
          </h1>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {/* Notification Channels */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="text-[16px] font-semibold text-[#121212] mb-4">Notification Channels</h3>
          
          <div className="space-y-4">
            {/* Push Notifications */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#008080] bg-opacity-10 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-[#008080]" />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#121212]">Push Notifications</p>
                  <p className="text-xs text-gray-500">Receive notifications on your device</p>
                </div>
              </div>
              <button
                onClick={() => handleToggle('pushNotifications')}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  settings.pushNotifications ? 'bg-[#008080]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Email Notifications */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2F80ED] bg-opacity-10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#2F80ED]" />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#121212]">Email Notifications</p>
                  <p className="text-xs text-gray-500">Get updates via email</p>
                </div>
              </div>
              <button
                onClick={() => handleToggle('emailNotifications')}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  settings.emailNotifications ? 'bg-[#008080]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* SMS Notifications */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#27AE60] bg-opacity-10 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#27AE60]" />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#121212]">SMS Notifications</p>
                  <p className="text-xs text-gray-500">Receive text message alerts</p>
                </div>
              </div>
              <button
                onClick={() => handleToggle('smsNotifications')}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  settings.smsNotifications ? 'bg-[#008080]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Notification Types */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="text-[16px] font-semibold text-[#121212] mb-4">What to be notified about</h3>
          
          <div className="space-y-4">
            {/* New Messages */}
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-[14px] font-medium text-[#121212]">New Messages</p>
                <p className="text-xs text-gray-500">When someone sends you a message</p>
              </div>
              <button
                onClick={() => handleToggle('newMessages')}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  settings.newMessages ? 'bg-[#008080]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.newMessages ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Delivery Updates */}
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-[14px] font-medium text-[#121212]">Delivery Updates</p>
                <p className="text-xs text-gray-500">Status changes on your parcels</p>
              </div>
              <button
                onClick={() => handleToggle('deliveryUpdates')}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  settings.deliveryUpdates ? 'bg-[#008080]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.deliveryUpdates ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Payment Confirmations */}
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-[14px] font-medium text-[#121212]">Payment Confirmations</p>
                <p className="text-xs text-gray-500">Payment and escrow updates</p>
              </div>
              <button
                onClick={() => handleToggle('paymentConfirmations')}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  settings.paymentConfirmations ? 'bg-[#008080]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.paymentConfirmations ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Marketing Emails */}
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-[14px] font-medium text-[#121212]">Marketing & Promotions</p>
                <p className="text-xs text-gray-500">Tips, offers, and news</p>
              </div>
              <button
                onClick={() => handleToggle('marketingEmails')}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  settings.marketingEmails ? 'bg-[#008080]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.marketingEmails ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Weekly Digest */}
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-[14px] font-medium text-[#121212]">Weekly Digest</p>
                <p className="text-xs text-gray-500">Summary of your activity</p>
              </div>
              <button
                onClick={() => handleToggle('weeklyDigest')}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  settings.weeklyDigest ? 'bg-[#008080]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.weeklyDigest ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Urgent Only */}
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-[14px] font-medium text-[#121212]">Urgent Only Mode</p>
                <p className="text-xs text-gray-500">Only critical notifications</p>
              </div>
              <button
                onClick={() => handleToggle('urgentOnly')}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  settings.urgentOnly ? 'bg-[#008080]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.urgentOnly ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Info Note */}
        <div className="bg-[#008080] bg-opacity-5 border border-[#008080] border-opacity-20 rounded-xl p-4">
          <p className="text-xs text-[#008080] leading-relaxed">
            💡 You can always adjust these settings later. We recommend keeping delivery updates enabled for the best experience.
          </p>
        </div>
      </div>
    </div>
  );
}

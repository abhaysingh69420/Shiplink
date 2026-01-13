import { ArrowLeft, User, Star, Shield, Package, Send, DollarSign, ChevronRight, Bell, Lock, CreditCard, HelpCircle, Info, LogOut, Edit2, CheckCircle } from 'lucide-react';
import { Screen } from '../App';

interface UserProfileProps {
  onNavigate: (screen: Screen) => void;
}

export function UserProfile({ onNavigate }: UserProfileProps) {
  const handleMenuClick = (label: string) => {
    switch (label) {
      case 'Edit Profile':
        onNavigate('edit-profile');
        break;
      case 'Notifications':
        onNavigate('notification-settings');
        break;
      case 'Privacy & Security':
        onNavigate('privacy-security');
        break;
      case 'Payment Methods':
        onNavigate('payment-methods');
        break;
      case 'Help & Support':
        onNavigate('help-support');
        break;
      case 'About ShipLink':
        onNavigate('about-shiplink');
        break;
      default:
        break;
    }
  };

  const menuSections = [
    {
      title: 'Account',
      items: [
        { icon: Edit2, label: 'Edit Profile', color: 'text-[#121212]' },
        { icon: Bell, label: 'Notifications', color: 'text-[#121212]' },
        { icon: Lock, label: 'Privacy & Security', color: 'text-[#121212]' },
        { icon: CreditCard, label: 'Payment Methods', color: 'text-[#121212]' },
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help & Support', color: 'text-[#121212]' },
        { icon: Info, label: 'About ShipLink', color: 'text-[#121212]' },
      ]
    }
  ];

  return (
    <div className="h-full w-full bg-[#F8FAFB] overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 border-b border-gray-200">
        <button onClick={() => onNavigate('home')} className="mb-4">
          <ArrowLeft className="w-6 h-6 text-[#008080]" />
        </button>
        <h1 className="text-[28px] text-[#121212]" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 700 }}>
          Profile
        </h1>
      </div>

      <div className="px-6 py-6 pb-24">
        {/* Simple User Details */}
        <div className="bg-white rounded-[24px] p-6 mb-6" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#008080] to-[#006666] rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-[20px] text-[#121212] font-semibold mb-1">
                Alex Thompson
              </h2>
              <p className="text-[14px] text-[#121212] opacity-60 mb-1">alex.thompson@email.com</p>
              <p className="text-[14px] text-[#121212] opacity-60">+1 (555) 123-4567</p>
            </div>
          </div>
          
          {/* Member Since */}
          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs text-[#121212] opacity-40 mb-1">MEMBER SINCE</p>
            <p className="text-[14px] text-[#121212]">January 2024</p>
          </div>
        </div>

        {/* Menu Sections */}
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h3 className="text-sm text-[#121212] opacity-60 mb-3 px-2" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
              {section.title}
            </h3>
            <div className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all"
                  onClick={() => handleMenuClick(item.label)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-[#121212]" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 500 }}>
                      {item.label}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#121212] opacity-30" />
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Logout Button */}
        <button
          onClick={() => onNavigate('splash')}
          className="w-full flex items-center justify-center gap-3 bg-white border-2 border-red-500 rounded-xl p-4 hover:bg-red-50 transition-all"
        >
          <LogOut className="w-5 h-5 text-red-500" />
          <span className="text-red-500" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}
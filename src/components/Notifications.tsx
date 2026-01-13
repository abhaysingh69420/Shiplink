import { ArrowLeft, Bell, Package, MessageSquare, Lock, Image } from 'lucide-react';
import { Screen } from '../App';

interface NotificationsProps {
  onNavigate: (screen: Screen) => void;
}

export function Notifications({ onNavigate }: NotificationsProps) {
  const notifications = [
    {
      id: 1,
      icon: 'lock',
      iconColor: 'bg-[#008080]',
      emoji: '🔒',
      title: 'Escrow Update',
      message: 'Your $45 is secured for the Munich trip.',
      time: '2 min ago',
      unread: true,
    },
    {
      id: 2,
      icon: 'image',
      iconColor: 'bg-[#FF4F00]',
      title: 'Travel Update',
      message: 'Sarah Johnson just posted a photo of your parcel at the gate!',
      time: '15 min ago',
      unread: true,
      thumbnail: true,
    },
    {
      id: 3,
      icon: 'users',
      iconColor: 'bg-[#FF4F00]',
      emoji: '✈️',
      title: 'New Match',
      message: '2 students are traveling to Tehran next week.',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 4,
      icon: 'package',
      iconColor: 'bg-[#27AE60]',
      title: 'Request Accepted',
      message: 'Sarah Johnson accepted your parcel request',
      time: '3 hours ago',
      unread: false,
    },
    {
      id: 5,
      icon: 'message',
      iconColor: 'bg-gray-500',
      title: 'New Message',
      message: 'Michael Chen sent you a message',
      time: '5 hours ago',
      unread: false,
    },
  ];

  return (
    <div className="h-full w-full bg-[#F8FAFB] overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 border-b border-gray-200">
        <button onClick={() => onNavigate('home')} className="mb-4">
          <ArrowLeft className="w-6 h-6 text-[#008080]" />
        </button>
        <div className="flex items-center justify-between">
          <h1 className="text-[28px] text-[#121212]" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 700 }}>
            Notifications
          </h1>
          <button className="text-sm text-[#008080]">
            Mark all read
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-6 py-4 pb-12">
        {notifications.length > 0 ? (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-white rounded-[24px] p-4 cursor-pointer transition-all hover:shadow-md ${
                  notification.unread 
                    ? 'ring-2 ring-[#008080] ring-opacity-20' 
                    : ''
                }`}
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
              >
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    notification.icon === 'lock' ? 'bg-[#008080]' :
                    notification.icon === 'image' ? 'bg-[#FF4F00]' :
                    notification.icon === 'users' ? 'bg-[#FF4F00]' :
                    notification.icon === 'package' ? 'bg-[#27AE60]' :
                    notification.icon === 'message' ? 'bg-gray-500' :
                    'bg-gray-100'
                  }`}>
                    {notification.icon === 'lock' && <Lock className="w-6 h-6 text-white" />}
                    {notification.icon === 'image' && <Image className="w-6 h-6 text-white" />}
                    {notification.icon === 'users' && <span className="text-2xl">✈️</span>}
                    {notification.icon === 'package' && <Package className="w-6 h-6 text-white" />}
                    {notification.icon === 'message' && <MessageSquare className="w-6 h-6 text-white" />}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-[16px] font-semibold text-[#121212]">
                        {notification.title}
                      </h3>
                      {notification.unread && (
                        <div className="w-2.5 h-2.5 bg-[#008080] rounded-full mt-1.5 ml-2"></div>
                      )}
                    </div>
                    <p className="text-[14px] text-[#121212] opacity-70 mb-2">
                      {notification.message}
                    </p>
                    
                    {/* Thumbnail for image notification */}
                    {notification.thumbnail && (
                      <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-2 flex items-center justify-center">
                        <Package className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                    
                    <p className="text-xs text-[#121212] opacity-40">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center py-20">
            <Bell className="w-16 h-16 text-[#121212] opacity-20 mb-4" />
            <p className="text-[#121212] opacity-60">No notifications yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
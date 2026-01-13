import { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { HomeDashboard } from './components/HomeDashboard';
import { CreateRequest } from './components/CreateRequest';
import { RequestDetails } from './components/RequestDetails';
import { ChatScreen } from './components/ChatScreen';
import { ConfirmDelivery } from './components/ConfirmDelivery';
import { Notifications } from './components/Notifications';
import { UserProfile } from './components/UserProfile';
import { AcceptedParcels } from './components/AcceptedParcels';
import { AvailableTravelers } from './components/AvailableTravelers';
import { AllParcelRequests } from './components/AllParcelRequests';
import { RequestAccepted } from './components/RequestAccepted';
import { HandoverQR } from './components/HandoverQR';
import { SearchResults } from './components/SearchResults';
import { RatePeer } from './components/RatePeer';
import { ViewUserProfile } from './components/ViewUserProfile';
import { EditProfile } from './components/EditProfile';
import { NotificationSettings } from './components/NotificationSettings';
import { PrivacySecurity } from './components/PrivacySecurity';
import { PaymentMethods } from './components/PaymentMethods';
import { HelpSupport } from './components/HelpSupport';
import { AboutShipLink } from './components/AboutShipLink';

export type Screen = 'splash' | 'signin' | 'signup' | 'home' | 'create' | 'details' | 'chat' | 'confirm' | 'notifications' | 'profile' | 'parcels' | 'travelers' | 'all-requests' | 'request-accepted' | 'handover-qr' | 'search' | 'rate-peer' | 'view-user-profile' | 'edit-profile' | 'notification-settings' | 'privacy-security' | 'payment-methods' | 'help-support' | 'about-shiplink';

export interface ChatRecipient {
  name: string;
  initial: string;
  rating?: string;
  deliveries?: string;
  verified: boolean;
}

export interface RequestData {
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
}

export interface UserProfileData {
  name: string;
  initial: string;
  verified: boolean;
  rating: string;
  reviewCount: string;
  university: string;
  major: string;
  year: string;
  location: string;
  totalDeliveries: string;
  successRate: string;
  memberSince: string;
  about: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [chatRecipient, setChatRecipient] = useState<ChatRecipient | null>(null);
  const [requestData, setRequestData] = useState<RequestData | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedUserProfile, setSelectedUserProfile] = useState<UserProfileData | null>(null);

  const handleNavigate = (
    screen: Screen, 
    recipientOrQuery?: ChatRecipient | string, 
    request?: RequestData,
    userProfile?: UserProfileData
  ) => {
    // If second parameter is a string, it's a search query
    if (typeof recipientOrQuery === 'string') {
      setSearchQuery(recipientOrQuery);
    } else if (recipientOrQuery) {
      setChatRecipient(recipientOrQuery);
    }
    if (request) {
      setRequestData(request);
    }
    if (userProfile) {
      setSelectedUserProfile(userProfile);
    }
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onNavigate={setCurrentScreen} />;
      case 'signin':
        return <SignIn onNavigate={setCurrentScreen} />;
      case 'signup':
        return <SignUp onNavigate={setCurrentScreen} />;
      case 'home':
        return <HomeDashboard onNavigate={handleNavigate} />;
      case 'create':
        return <CreateRequest onNavigate={setCurrentScreen} />;
      case 'details':
        return <RequestDetails onNavigate={handleNavigate} />;
      case 'chat':
        return <ChatScreen onNavigate={handleNavigate} recipient={chatRecipient} userProfile={selectedUserProfile || undefined} />;
      case 'confirm':
        return <ConfirmDelivery onNavigate={setCurrentScreen} />;
      case 'notifications':
        return <Notifications onNavigate={setCurrentScreen} />;
      case 'profile':
        return <UserProfile onNavigate={setCurrentScreen} />;
      case 'parcels':
        return <AcceptedParcels onNavigate={setCurrentScreen} />;
      case 'travelers':
        return <AvailableTravelers onNavigate={handleNavigate} />;
      case 'all-requests':
        return <AllParcelRequests onNavigate={setCurrentScreen} />;
      case 'request-accepted':
        return <RequestAccepted onNavigate={setCurrentScreen} requestData={requestData || undefined} />;
      case 'handover-qr':
        return <HandoverQR onNavigate={setCurrentScreen} />;
      case 'search':
        return <SearchResults onNavigate={setCurrentScreen} query={searchQuery} />;
      case 'rate-peer':
        return <RatePeer onNavigate={setCurrentScreen} />;
      case 'view-user-profile':
        return <ViewUserProfile onNavigate={setCurrentScreen} userProfile={selectedUserProfile || undefined} />;
      case 'edit-profile':
        return <EditProfile onNavigate={setCurrentScreen} />;
      case 'notification-settings':
        return <NotificationSettings onNavigate={setCurrentScreen} />;
      case 'privacy-security':
        return <PrivacySecurity onNavigate={setCurrentScreen} />;
      case 'payment-methods':
        return <PaymentMethods onNavigate={setCurrentScreen} />;
      case 'help-support':
        return <HelpSupport onNavigate={setCurrentScreen} />;
      case 'about-shiplink':
        return <AboutShipLink onNavigate={setCurrentScreen} />;
      default:
        return <SplashScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* iPhone Frame */}
      <div className="relative w-[390px] h-[844px] bg-black rounded-[55px] shadow-2xl p-3">
        {/* Screen Content */}
        <div className="w-full h-full bg-white rounded-[45px] overflow-hidden">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}
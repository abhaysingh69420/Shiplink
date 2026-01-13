import { Screen } from '../App';
import logoImage from 'figma:asset/ab23fd6c0c9a9700b5ae69ec47043c1c8743464a.png';

interface SplashScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function SplashScreen({ onNavigate }: SplashScreenProps) {
  return (
    <div className="relative h-full w-full bg-white overflow-hidden flex flex-col">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="geometric" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Location Pin */}
              <path d="M30 25 C30 20, 35 15, 40 15 C45 15, 50 20, 50 25 C50 30, 40 40, 40 40 C40 40, 30 30, 30 25 Z" fill="none" stroke="#008080" strokeWidth="1.5" />
              <circle cx="40" cy="25" r="3" fill="#008080" />
              
              {/* Package Box */}
              <rect x="75" y="75" width="20" height="20" fill="none" stroke="#FF4F00" strokeWidth="1.5" />
              <line x1="75" y1="85" x2="95" y2="85" stroke="#FF4F00" strokeWidth="1.5" />
              <line x1="85" y1="75" x2="85" y2="95" stroke="#FF4F00" strokeWidth="1.5" />
              
              {/* Airplane */}
              <path d="M15 85 L20 87 L25 85 L22 82 Z M22 82 L22 78" fill="none" stroke="#008080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Dotted connecting paths */}
              <line x1="40" y1="40" x2="75" y2="75" stroke="#121212" strokeWidth="1" strokeDasharray="2,3" />
              <line x1="25" y1="85" x2="75" y2="85" stroke="#121212" strokeWidth="1" strokeDasharray="2,3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric)" />
        </svg>
      </div>

      {/* Header with Logo */}
      <div className="relative z-10 flex items-center px-12 pt-8 pb-4">
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8">
        <div className="text-center mb-8">
          {/* App Icon Mockup with floating shadow */}
          <div className="inline-block mb-6">
            <div 
              className="w-32 h-32 bg-white rounded-[32px] flex items-center justify-center p-4"
              style={{ 
                boxShadow: '0 20px 60px rgba(0, 128, 128, 0.2), 0 8px 16px rgba(0, 0, 0, 0.1)'
              }}
            >
              <img src={logoImage} alt="ShipLink Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          
          <h1 className="text-[56px] tracking-tight text-[rgb(0,128,128)] mb-2 font-extrabold">
            ShipLink
          </h1>
          <p className="text-[16px] text-[#121212] opacity-60 mt-2">
            Deliver with trust, travel with purpose
          </p>
        </div>
      </div>

      {/* Social Proof Bar */}
      <div className="relative z-10 bg-[rgba(241,243,245,0)] py-4 px-8">
        <div className="text-center">
          <p className="text-[12px] text-[#008080] font-semibold mb-3">Trusted at Universities</p>
          <div className="flex items-center justify-center gap-6 opacity-40">
            {/* University Logos - Simplified monochrome teal style */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#008080] flex items-center justify-center text-white text-[10px] font-bold">
                HD
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#008080] flex items-center justify-center text-white text-[10px] font-bold">
                TUM
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#008080] flex items-center justify-center text-white text-[10px] font-bold">
                TU
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="relative z-10 w-full px-8 py-6 space-y-4">
        <button
          onClick={() => onNavigate('signin')}
          className="w-full py-4 px-6 bg-white border-2 border-[#008080] rounded-xl text-[#008080] transition-all hover:bg-gray-50 text-[16px] font-medium"
          style={{ 
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
          }}
        >
          Sign In
        </button>
        
        <button
          onClick={() => onNavigate('signup')}
          className="w-full py-4 px-6 bg-[#FF4F00] rounded-xl text-white transition-all hover:bg-[#E64600] text-[16px] font-medium"
          style={{ 
            boxShadow: '0 4px 16px rgba(255, 79, 0, 0.25)'
          }}
        >
          Sign Up
        </button>
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-[#008080] py-4 px-8">
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2C8 2 6 3 6 5C6 7 8 8 8 8C8 8 10 7 10 5C10 3 8 2 8 2Z" fill="#008080"/>
              <path d="M8 8C8 8 6 9 6 11C6 13 8 14 8 14C8 14 10 13 10 11C10 9 8 8 8 8Z" fill="#008080"/>
              <circle cx="8" cy="8" r="1.2" fill="white"/>
            </svg>
          </div>
          <p className="text-white text-[12px] font-medium">
            ShipLink: Deliver with trust.
          </p>
        </div>
      </div>
    </div>
  );
}
import { ArrowLeft, QrCode } from 'lucide-react';
import { Screen } from '../App';

interface HandoverQRProps {
  onNavigate: (screen: Screen) => void;
}

export function HandoverQR({ onNavigate }: HandoverQRProps) {
  return (
    <div className="h-full w-full bg-[#F8FAFB] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-2">
          <button onClick={() => onNavigate('parcels')}>
            <ArrowLeft className="w-6 h-6 text-[#008080]" />
          </button>
          <h1 className="text-[20px] font-semibold text-[#121212]">
            Handover QR Code
          </h1>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-32">
        {/* Instruction Text */}
        <div className="mb-8 text-center">
          <p className="text-[#121212] text-lg mb-2" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 600 }}>
            Traveler: Show this to the Sender at pickup
          </p>
          <p className="text-[#121212] opacity-60 text-sm">
            The sender will scan this code to confirm handover
          </p>
        </div>

        {/* QR Code Container */}
        <div className="bg-white rounded-[24px] p-8 mb-8" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)' }}>
          {/* Large QR Code - Using SVG for a clean QR code representation */}
          <div className="w-64 h-64 bg-white border-8 border-[#008080] rounded-2xl flex items-center justify-center relative overflow-hidden">
            {/* QR Code Pattern - Simplified visual representation */}
            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
              {/* Corner markers */}
              {/* Top-left */}
              <rect x="5" y="5" width="25" height="25" fill="none" stroke="#121212" strokeWidth="3"/>
              <rect x="10" y="10" width="15" height="15" fill="#121212"/>
              
              {/* Top-right */}
              <rect x="70" y="5" width="25" height="25" fill="none" stroke="#121212" strokeWidth="3"/>
              <rect x="75" y="10" width="15" height="15" fill="#121212"/>
              
              {/* Bottom-left */}
              <rect x="5" y="70" width="25" height="25" fill="none" stroke="#121212" strokeWidth="3"/>
              <rect x="10" y="75" width="15" height="15" fill="#121212"/>

              {/* Data pattern - Random blocks to simulate QR code */}
              <rect x="38" y="5" width="4" height="4" fill="#121212"/>
              <rect x="44" y="5" width="4" height="4" fill="#121212"/>
              <rect x="50" y="5" width="4" height="4" fill="#121212"/>
              <rect x="62" y="5" width="4" height="4" fill="#121212"/>
              
              <rect x="5" y="38" width="4" height="4" fill="#121212"/>
              <rect x="5" y="44" width="4" height="4" fill="#121212"/>
              <rect x="5" y="50" width="4" height="4" fill="#121212"/>
              <rect x="5" y="62" width="4" height="4" fill="#121212"/>
              
              <rect x="38" y="38" width="4" height="4" fill="#121212"/>
              <rect x="44" y="38" width="4" height="4" fill="#121212"/>
              <rect x="50" y="44" width="4" height="4" fill="#121212"/>
              <rect x="56" y="38" width="4" height="4" fill="#121212"/>
              <rect x="62" y="44" width="4" height="4" fill="#121212"/>
              
              <rect x="38" y="50" width="4" height="4" fill="#121212"/>
              <rect x="44" y="56" width="4" height="4" fill="#121212"/>
              <rect x="50" y="50" width="4" height="4" fill="#121212"/>
              <rect x="56" y="56" width="4" height="4" fill="#121212"/>
              <rect x="62" y="50" width="4" height="4" fill="#121212"/>
              
              <rect x="38" y="62" width="4" height="4" fill="#121212"/>
              <rect x="44" y="62" width="4" height="4" fill="#121212"/>
              <rect x="50" y="68" width="4" height="4" fill="#121212"/>
              <rect x="56" y="62" width="4" height="4" fill="#121212"/>
              <rect x="62" y="68" width="4" height="4" fill="#121212"/>
              
              <rect x="70" y="38" width="4" height="4" fill="#121212"/>
              <rect x="76" y="44" width="4" height="4" fill="#121212"/>
              <rect x="82" y="38" width="4" height="4" fill="#121212"/>
              <rect x="88" y="44" width="4" height="4" fill="#121212"/>
              <rect x="70" y="50" width="4" height="4" fill="#121212"/>
              <rect x="82" y="56" width="4" height="4" fill="#121212"/>
              <rect x="76" y="62" width="4" height="4" fill="#121212"/>
              <rect x="88" y="68" width="4" height="4" fill="#121212"/>
              
              <rect x="38" y="70" width="4" height="4" fill="#121212"/>
              <rect x="44" y="76" width="4" height="4" fill="#121212"/>
              <rect x="50" y="82" width="4" height="4" fill="#121212"/>
              <rect x="56" y="88" width="4" height="4" fill="#121212"/>
              <rect x="62" y="76" width="4" height="4" fill="#121212"/>
              <rect x="68" y="82" width="4" height="4" fill="#121212"/>
              <rect x="74" y="88" width="4" height="4" fill="#121212"/>
              <rect x="80" y="76" width="4" height="4" fill="#121212"/>
              <rect x="86" y="82" width="4" height="4" fill="#121212"/>
              <rect x="92" y="88" width="4" height="4" fill="#121212"/>
            </svg>

            {/* Center Logo Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-[#008080] rounded-lg flex items-center justify-center shadow-lg">
                <QrCode className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Parcel Info */}
        <div className="w-full bg-white rounded-[24px] p-4 mb-6" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <p className="text-xs text-[#121212] opacity-60 mb-1">Parcel Details</p>
          <p className="text-[16px] font-semibold text-[#121212] mb-1">Electronics Package</p>
          <p className="text-sm text-[#121212] opacity-70">Berlin → Munich</p>
        </div>

        {/* Security Note */}
        <div className="flex items-start gap-3 p-4 bg-[#008080] bg-opacity-10 rounded-xl">
          <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs">🔒</span>
          </div>
          <div>
            <p className="text-sm text-[#008080] font-medium mb-1">Secure Handover</p>
            <p className="text-xs text-[#121212] opacity-70 leading-relaxed">
              Once scanned, the sender confirms you have the parcel. The $45 payment will be released to you after successful delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6">
        <button
          onClick={() => onNavigate('confirm')}
          className="w-full py-4 px-6 bg-[#FF4F00] rounded-xl text-white transition-all hover:bg-[#E64600] active:scale-95"
          style={{ 
            fontFamily: 'SF Pro Display, Inter, sans-serif',
            fontWeight: 600,
            boxShadow: '0 4px 16px rgba(255, 79, 0, 0.25)'
          }}
        >
          Confirm Handover Scan
        </button>
      </div>
    </div>
  );
}

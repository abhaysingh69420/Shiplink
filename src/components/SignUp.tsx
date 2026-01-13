import { useState } from 'react';
import { ChevronDown, Camera, Check, ArrowLeft, CheckCircle } from 'lucide-react';
import { Screen } from '../App';

interface SignUpProps {
  onNavigate: (screen: Screen) => void;
}

export function SignUp({ onNavigate }: SignUpProps) {
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ code: '+1', flag: '🇺🇸' });
  const [currentStep, setCurrentStep] = useState(1);
  const [idCaptured, setIdCaptured] = useState(false);
  const [faceCaptured, setFaceCaptured] = useState(false);

  const countries = [
    { code: '+1', flag: '🇺🇸', name: 'USA' },
    { code: '+44', flag: '🇬🇧', name: 'UK' },
    { code: '+49', flag: '🇩🇪', name: 'Germany' },
    { code: '+33', flag: '🇫🇷', name: 'France' },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onNavigate('splash');
    }
  };

  const handleIdCapture = () => {
    setIdCaptured(true);
    setTimeout(() => {
      setCurrentStep(3);
      setIdCaptured(false);
    }, 800);
  };

  const handleFaceCapture = () => {
    setFaceCaptured(true);
    setTimeout(() => {
      setCurrentStep(4);
      setFaceCaptured(false);
    }, 800);
  };

  return (
    <div className="h-full w-full bg-[#F8FAFB] overflow-y-auto">
      {/* Progress Bar - Instagram Story Style */}
      <div className="px-6 pt-6 pb-3 bg-[#F8FAFB]">
        <div className="flex gap-1">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className="flex-1 h-1 rounded-full overflow-hidden bg-gray-200"
            >
              <div
                className={`h-full transition-all duration-300 ${
                  step <= currentStep ? 'bg-[#008080] w-full' : 'bg-transparent w-0'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <button onClick={handleBack} className="mb-6">
          <ArrowLeft className="w-6 h-6 text-[#008080]" />
        </button>
        <h1 className="text-[32px] font-bold text-[#121212] mb-2">
          {currentStep === 1 && 'Create Account'}
          {currentStep === 2 && 'Scan ID Front'}
          {currentStep === 3 && 'Liveness Check'}
          {currentStep === 4 && "You're Vouched!"}
        </h1>
        <p className="text-[16px] text-[#121212] opacity-60">
          {currentStep === 1 && 'Join ShipLink community'}
          {currentStep === 2 && 'Snap a clear photo of your student ID or Passport'}
          {currentStep === 3 && 'Position your face in the circle to verify your identity'}
          {currentStep === 4 && 'Welcome to the ShipLink community'}
        </p>
      </div>

      {/* Step 1: Details Form */}
      {currentStep === 1 && (
        <div className="px-6 space-y-5 pb-12">
          {/* Full Name */}
          <div>
            <label className="block text-[16px] font-medium text-[#121212] opacity-70 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#2F80ED] transition-colors text-[16px]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[16px] font-medium text-[#121212] opacity-70 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#2F80ED] transition-colors text-[16px]"
            />
          </div>

          {/* Smart Phone Input */}
          <div>
            <label className="block text-[16px] font-medium text-[#121212] opacity-70 mb-2">
              Phone Number
            </label>
            <div className="flex gap-2">
              {/* Country Code Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  className="h-full px-3 border border-gray-300 rounded-xl flex items-center gap-2 hover:border-[#008080] transition-colors"
                >
                  <span className="text-xl">{selectedCountry.flag}</span>
                  <span className="text-sm">{selectedCountry.code}</span>
                  <ChevronDown className="w-4 h-4 text-[#121212] opacity-50" />
                </button>

                {showCountryDropdown && (
                  <div className="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50 w-48">
                    {countries.map((country) => (
                      <button
                        key={country.code}
                        onClick={() => {
                          setSelectedCountry(country);
                          setShowCountryDropdown(false);
                        }}
                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-xl">{country.flag}</span>
                        <span className="text-sm">{country.name}</span>
                        <span className="text-sm text-[#121212] opacity-50 ml-auto">{country.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Phone Number Input */}
              <input
                type="tel"
                placeholder="123 456 7890"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#2F80ED] transition-colors text-[16px]"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-[16px] font-medium text-[#121212] opacity-70 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#2F80ED] transition-colors text-[16px]"
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 w-4 h-4 accent-[#008080]"
            />
            <label htmlFor="terms" className="text-sm text-[#121212] opacity-70">
              I agree to the <span className="text-[#008080]">Terms of Service</span> and <span className="text-[#008080]">Privacy Policy</span>
            </label>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-full py-4 px-6 bg-[#FF4F00] rounded-xl text-white transition-all hover:bg-[#E64600] mt-6 text-[16px] font-medium"
            style={{ 
              boxShadow: '0 4px 16px rgba(255, 79, 0, 0.25)'
            }}
          >
            Next
          </button>

          {/* Sign In Link */}
          <p className="text-center text-[16px] text-[#121212] opacity-60 pt-4">
            Already have an account?{' '}
            <button onClick={() => onNavigate('splash')} className="text-[#008080] hover:underline">
              Sign In
            </button>
          </p>
        </div>
      )}

      {/* Step 2: ID Front Scan */}
      {currentStep === 2 && (
        <div className="px-6 pb-12 flex flex-col items-center justify-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
          <button
            onClick={handleIdCapture}
            className={`w-full max-w-sm aspect-[3/2] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center gap-4 transition-all ${
              idCaptured 
                ? 'border-[#27AE60] bg-[#27AE60] bg-opacity-10' 
                : 'border-gray-300 hover:border-[#008080] bg-white'
            }`}
          >
            {idCaptured ? (
              <>
                <Check className="w-16 h-16 text-[#27AE60]" />
                <span className="text-[16px] text-[#27AE60] font-medium">ID Captured!</span>
              </>
            ) : (
              <>
                <Camera className="w-16 h-16 text-[#121212] opacity-30" />
                <span className="text-[16px] text-[#121212] opacity-50">Tap to capture ID</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Step 3: Face Match / Liveness Check */}
      {currentStep === 3 && (
        <div className="px-6 pb-12 flex flex-col items-center justify-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
          <button
            onClick={handleFaceCapture}
            className={`w-64 h-64 rounded-full border-4 flex flex-col items-center justify-center gap-4 transition-all ${
              faceCaptured 
                ? 'border-[#27AE60] bg-[#27AE60] bg-opacity-10' 
                : 'border-[#008080] border-dashed bg-white hover:bg-gray-50'
            }`}
          >
            {faceCaptured ? (
              <>
                <Check className="w-16 h-16 text-[#27AE60]" />
                <span className="text-[16px] text-[#27AE60] font-medium">Verified!</span>
              </>
            ) : (
              <>
                <Camera className="w-16 h-16 text-[#008080]" />
                <span className="text-[14px] text-[#121212] opacity-60 text-center px-4">
                  Tap to verify
                </span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Step 4: Success */}
      {currentStep === 4 && (
        <div className="px-6 pb-12 flex flex-col items-center justify-center text-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
          <div className="mb-8">
            <CheckCircle className="w-32 h-32 text-[#008080] mx-auto" />
          </div>

          <button
            onClick={() => onNavigate('home')}
            className="w-full py-4 px-6 bg-[#FF4F00] rounded-xl text-white transition-all hover:bg-[#E64600] mt-6 text-[16px] font-medium"
            style={{ 
              boxShadow: '0 4px 16px rgba(255, 79, 0, 0.25)'
            }}
          >
            Go to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}
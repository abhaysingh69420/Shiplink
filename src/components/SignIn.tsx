import { ArrowLeft } from 'lucide-react';
import { Screen } from '../App';

interface SignInProps {
  onNavigate: (screen: Screen) => void;
}

export function SignIn({ onNavigate }: SignInProps) {
  return (
    <div className="h-full w-full bg-[#F8FAFB] overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <button onClick={() => onNavigate('splash')} className="mb-6">
          <ArrowLeft className="w-6 h-6 text-[#008080]" />
        </button>
        <h1 className="text-[32px] font-bold text-[#121212] mb-2">
          Welcome Back
        </h1>
        <p className="text-[16px] text-[#121212] opacity-60">
          Sign in to your account
        </p>
      </div>

      {/* Form */}
      <div className="px-6 space-y-5 pb-12">
        {/* Email or Phone */}
        <div>
          <label className="block text-[16px] font-medium text-[#121212] opacity-70 mb-2">
            Email or Phone Number
          </label>
          <input
            type="text"
            placeholder="john@example.com or +1 234 567 8900"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#2F80ED] transition-colors text-[16px]"
          />
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

        {/* Forgot Password Link */}
        <div className="flex justify-end">
          <button className="text-sm text-[#008080] hover:underline">
            Forgot Password?
          </button>
        </div>

        {/* Sign In Button */}
        <button
          onClick={() => onNavigate('home')}
          className="w-full py-4 px-6 bg-[#FF4F00] rounded-xl text-white transition-all hover:bg-[#E64600] mt-6 text-[16px] font-medium"
          style={{ 
            boxShadow: '0 4px 16px rgba(255, 79, 0, 0.25)'
          }}
        >
          Sign In
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-[16px] text-[#121212] opacity-60 pt-4">
          Don&apos;t have an account?{' '}
          <button onClick={() => onNavigate('signup')} className="text-[#008080] hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
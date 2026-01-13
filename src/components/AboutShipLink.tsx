import { ArrowLeft, Package, Users, Shield, Heart, Award, Globe, CheckCircle } from 'lucide-react';
import { Screen } from '../App';

interface AboutShipLinkProps {
  onNavigate: (screen: Screen) => void;
}

export function AboutShipLink({ onNavigate }: AboutShipLinkProps) {
  const stats = [
    { icon: Users, label: 'Active Students', value: '50,000+', color: 'text-[#008080]', bgColor: 'bg-[#008080]' },
    { icon: Package, label: 'Deliveries Completed', value: '250,000+', color: 'text-[#FF4F00]', bgColor: 'bg-[#FF4F00]' },
    { icon: Globe, label: 'Universities', value: '500+', color: 'text-[#27AE60]', bgColor: 'bg-[#27AE60]' },
    { icon: Award, label: 'Success Rate', value: '99.2%', color: 'text-[#2F80ED]', bgColor: 'bg-[#2F80ED]' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Verified Students Only',
      description: 'All users are verified with .edu emails or student IDs for your safety'
    },
    {
      icon: Package,
      title: 'Secure Escrow System',
      description: 'Payments held safely until delivery is confirmed by both parties'
    },
    {
      icon: Heart,
      title: 'Community Driven',
      description: 'Built by students, for students. Help each other save money and travel smarter'
    }
  ];

  return (
    <div className="h-full w-full bg-[#F8FAFB] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <button onClick={() => onNavigate('profile')}>
            <ArrowLeft className="w-6 h-6 text-[#008080]" />
          </button>
          <h1 className="text-[20px] font-semibold text-[#121212]">
            About ShipLink
          </h1>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {/* App Logo & Version */}
        <div className="bg-white rounded-[24px] p-6 mb-4 text-center" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <div className="w-20 h-20 bg-gradient-to-br from-[#008080] to-[#006666] rounded-[24px] flex items-center justify-center mx-auto mb-4">
            <Package className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-[24px] font-bold text-[#121212] mb-1">ShipLink</h2>
          <p className="text-sm text-gray-500 mb-2">Version 2.4.1</p>
          <p className="text-xs text-gray-400">Student-to-Student Delivery Network</p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="text-[16px] font-semibold text-[#121212] mb-3">Our Mission</h3>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            Founded in 2025 by international students, ShipLink is redefining student logistics. We recognized that traditional courier services were never built for the global, mobile lifestyle of a university student.
          </p>
          <p className="text-[14px] text-gray-600 leading-relaxed mt-3">
            Our team of researchers and designers created a secure, peer-to-peer ecosystem that prioritizes Trust through Verification and Financial Transparency. By leveraging the power of student networks, we make international shipping affordable, fast, and remarkably human.
          </p>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="text-[16px] font-semibold text-[#121212] mb-4">By The Numbers</h3>
          
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                <div className={`w-10 h-10 ${stat.bgColor} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-2`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <p className="text-[18px] font-bold text-[#121212] mb-0.5">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="text-[16px] font-semibold text-[#121212] mb-4">What Makes Us Different</h3>
          
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[rgba(0,128,128,0.5)] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-[#008080]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[14px] font-semibold text-[#121212] mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="text-[16px] font-semibold text-[#121212] mb-3">Our Team</h3>
          <p className="text-[14px] text-gray-600 leading-relaxed mb-3">
            ShipLink was founded in 2022 by a group of MIT students who were frustrated with expensive shipping costs between home and campus.
          </p>
          <p className="text-[14px] text-gray-600 leading-relaxed">
            Today, we're a team of 25+ people across 10 universities, all working to make student life easier.
          </p>
        </div>

        {/* Legal & Links */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="text-[16px] font-semibold text-[#121212] mb-4">Legal & Policies</h3>
          
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-[14px] text-[#121212]">Terms of Service</span>
              <span className="text-sm text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-[14px] text-[#121212]">Privacy Policy</span>
              <span className="text-sm text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-[14px] text-[#121212]">Community Guidelines</span>
              <span className="text-sm text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between py-3">
              <span className="text-[14px] text-[#121212]">Open Source Licenses</span>
              <span className="text-sm text-gray-400">→</span>
            </button>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="text-[16px] font-semibold text-[#121212] mb-3">Get In Touch</h3>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[14px] text-gray-600">
              <CheckCircle className="w-4 h-4 text-[#008080]" />
              <span>Email: hello@shiplink.com</span>
            </div>
            <div className="flex items-center gap-2 text-[14px] text-gray-600">
              <CheckCircle className="w-4 h-4 text-[#008080]" />
              <span>Support: support@shiplink.com</span>
            </div>
            <div className="flex items-center gap-2 text-[14px] text-gray-600">
              <CheckCircle className="w-4 h-4 text-[#008080]" />
              <span>Press: press@shiplink.com</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-4">
          <p className="text-xs text-gray-400">© 2024 ShipLink, Inc. All rights reserved.</p>
          <p className="text-xs text-gray-400 mt-1">Made with ❤️ by students, for students</p>
        </div>
      </div>
    </div>
  );
}
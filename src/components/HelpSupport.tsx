import { ArrowLeft, HelpCircle, Mail, MessageCircle, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface HelpSupportProps {
  onNavigate: (screen: Screen) => void;
}

interface FAQ {
  question: string;
  answer: string;
}

export function HelpSupport({ onNavigate }: HelpSupportProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'How does ShipLink work?',
      answer: 'ShipLink connects students who need packages delivered with verified student travelers going to the same destination. Senders post delivery requests, travelers accept them, and both parties meet for secure handover using QR codes.'
    },
    {
      question: 'Is my payment secure?',
      answer: 'Yes! All payments are held in escrow until successful delivery is confirmed by both parties. Your payment information is encrypted and we never store your full card details.'
    },
    {
      question: 'What if my package gets damaged?',
      answer: 'ShipLink offers protection for all deliveries. If your package is damaged during transit, you can file a claim through the app within 48 hours of delivery. Our support team will review and process refunds accordingly.'
    },
    {
      question: 'How do I verify my student status?',
      answer: 'Upload your valid student ID or .edu email during signup. Verification typically takes 1-2 business days. Verified students get a badge on their profile and access to all platform features.'
    },
    {
      question: 'Can I cancel a delivery request?',
      answer: 'Yes, you can cancel before a traveler accepts your request at no charge. After acceptance, cancellation fees may apply depending on timing. See our cancellation policy in the Terms of Service.'
    },
    {
      question: 'How are rewards determined?',
      answer: 'Senders set their own reward amounts. We recommend $5-15 for local deliveries and $20-50 for long-distance trips. Higher rewards typically get accepted faster.'
    },
    {
      question: 'What items are prohibited?',
      answer: 'Prohibited items include weapons, illegal substances, hazardous materials, perishable food, live animals, and items over 50 lbs. Full list available in our Community Guidelines.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach us via email at support@shiplink.com, through in-app chat, or by phone at 1-800-SHIPLINK. We respond within 24 hours on weekdays.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
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
            Help & Support
          </h1>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {/* Contact Options */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="text-[16px] font-semibold text-[#121212] mb-4">Contact Us</h3>
          
          <div className="space-y-3">
            <button className="w-full flex items-center gap-4 p-4 bg-[#008080] bg-opacity-5 rounded-xl hover:bg-opacity-10 transition-all">
              <div className="w-10 h-10 bg-[#008080] rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-[14px] font-semibold text-[#121212]">Email Support</p>
                <p className="text-xs text-gray-500">support@shiplink.com</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-4 p-4 bg-[#27AE60] bg-opacity-5 rounded-xl hover:bg-opacity-10 transition-all">
              <div className="w-10 h-10 bg-[#27AE60] rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-[14px] font-semibold text-[#121212]">Live Chat</p>
                <p className="text-xs text-gray-500">Available 9 AM - 9 PM EST</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-4 p-4 bg-[#FF4F00] bg-opacity-5 rounded-xl hover:bg-opacity-10 transition-all">
              <div className="w-10 h-10 bg-[#FF4F00] rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-[14px] font-semibold text-[#121212]">Phone Support</p>
                <p className="text-xs text-gray-500">1-800-SHIPLINK</p>
              </div>
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="text-[16px] font-semibold text-[#121212] mb-4">Frequently Asked Questions</h3>
          
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#008080] flex-shrink-0" />
                    <span className="text-[14px] font-medium text-[#121212] text-left">
                      {faq.question}
                    </span>
                  </div>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFAQ === index && (
                  <div className="px-4 pb-4 pt-0">
                    <div className="pl-8 pr-4">
                      <p className="text-[13px] text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-[24px] p-5 mb-4" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="text-[16px] font-semibold text-[#121212] mb-4">Resources</h3>
          
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-[14px] text-[#121212]">Community Guidelines</span>
              <span className="text-sm text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-[14px] text-[#121212]">Terms of Service</span>
              <span className="text-sm text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between py-3 border-b border-gray-100">
              <span className="text-[14px] text-[#121212]">Privacy Policy</span>
              <span className="text-sm text-gray-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between py-3">
              <span className="text-[14px] text-[#121212]">Safety Tips</span>
              <span className="text-sm text-gray-400">→</span>
            </button>
          </div>
        </div>

        {/* Info Note */}
        <div className="bg-[#008080] bg-opacity-5 border border-[#008080] border-opacity-20 rounded-xl p-4">
          <p className="text-xs text-[#008080] leading-relaxed">
            💡 For urgent issues, please use live chat or call our support line. We're here to help!
          </p>
        </div>
      </div>
    </div>
  );
}

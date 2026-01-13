import { useState, useRef } from 'react';
import { ArrowLeft, ChevronDown, MapPin, Package, Weight, DollarSign, X, Plus } from 'lucide-react';
import { Screen } from '../App';

interface CreateRequestProps {
  onNavigate: (screen: Screen) => void;
}

export function CreateRequest({ onNavigate }: CreateRequestProps) {
  const [showPackageTypeMenu, setShowPackageTypeMenu] = useState(false);
  const [selectedPackageType, setSelectedPackageType] = useState('');
  const [parcelPhoto, setParcelPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const packageTypes = ['Electronics', 'Clothing', 'Documents', 'Fragile'];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setParcelPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="h-full w-full bg-[#F8FAFB] overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <button onClick={() => onNavigate('home')} className="mb-6">
          <ArrowLeft className="w-6 h-6 text-[#008080]" />
        </button>
        <h1 className="text-[32px] text-[#121212] mb-2" style={{ fontFamily: 'SF Pro Display, Inter, sans-serif', fontWeight: 700 }}>
          Create Request
        </h1>
        <p className="text-[#121212] opacity-60">
          Tell us about your parcel
        </p>
      </div>

      {/* Form */}
      <div className="px-6 space-y-5 pb-12">
        {/* From Location */}
        <div>
          <label className="block text-[#121212] opacity-70 mb-2 text-sm">
            From
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#008080] opacity-60" />
            <input
              type="text"
              placeholder="New York, USA"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#008080] transition-colors"
              style={{ fontFamily: 'SF Pro Display, Inter, sans-serif' }}
            />
          </div>
        </div>

        {/* To Location */}
        <div>
          <label className="block text-[#121212] opacity-70 mb-2 text-sm">
            To
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#008080] opacity-60" />
            <input
              type="text"
              placeholder="London, UK"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#008080] transition-colors"
              style={{ fontFamily: 'SF Pro Display, Inter, sans-serif' }}
            />
          </div>
        </div>

        {/* Package Type with Dropdown */}
        <div className="relative">
          <label className="block text-[#121212] opacity-70 mb-2 text-sm">
            Package Type
          </label>
          <button
            onClick={() => setShowPackageTypeMenu(!showPackageTypeMenu)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#008080] transition-colors flex items-center justify-between"
            style={{ fontFamily: 'SF Pro Display, Inter, sans-serif' }}
          >
            <div className="flex items-center gap-3">
              <Package className="w-5 h-5 text-[#121212] opacity-40" />
              <span className={selectedPackageType ? 'text-[#121212]' : 'text-[#121212] opacity-40'}>
                {selectedPackageType || 'Select package type'}
              </span>
            </div>
            <ChevronDown className="w-5 h-5 text-[#121212] opacity-40" />
          </button>

          {/* Floating Menu Overlay */}
          {showPackageTypeMenu && (
            <div className="absolute top-full mt-2 left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50">
              {packageTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedPackageType(type);
                    setShowPackageTypeMenu(false);
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3"
                  style={{ fontFamily: 'SF Pro Display, Inter, sans-serif' }}
                >
                  <Package className="w-5 h-5 text-[#121212] opacity-40" />
                  <span className="text-[#121212]">{type}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Weight */}
        <div>
          <label className="block text-[#121212] opacity-70 mb-2 text-sm">
            Weight (kg)
          </label>
          <div className="relative">
            <Weight className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#008080] opacity-60" />
            <input
              type="text"
              placeholder="2.5"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#008080] transition-colors"
              style={{ fontFamily: 'SF Pro Display, Inter, sans-serif' }}
            />
          </div>
        </div>

        {/* Reward */}
        <div>
          <label className="block text-[#121212] opacity-70 mb-2 text-sm">
            Reward Amount
          </label>
          <div className="relative">
            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#008080] opacity-60" />
            <input
              type="text"
              placeholder="50"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#008080] transition-colors"
              style={{ fontFamily: 'SF Pro Display, Inter, sans-serif' }}
            />
          </div>
        </div>

        {/* Parcel Photo Upload */}
        <div>
          <label className="block text-[#121212] opacity-70 mb-2 text-sm">
            Parcel Photo
          </label>
          
          {!parcelPhoto ? (
            // State A: Empty
            <button
              onClick={triggerFileInput}
              className="w-full aspect-square border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-[#008080] transition-colors group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <Plus className="w-8 h-8 text-[#121212] opacity-40" />
              </div>
              <span className="text-sm text-[#121212] opacity-50">
                Tap to Upload Parcel Photo
              </span>
            </button>
          ) : (
            // State B: Filled
            <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-gray-200">
              <img
                src={parcelPhoto}
                alt="Parcel"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setParcelPhoto(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-[#121212] opacity-70 mb-2 text-sm">
            Description (Optional)
          </label>
          <textarea
            placeholder="Add any special instructions or details..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#008080] transition-colors resize-none"
            style={{ fontFamily: 'SF Pro Display, Inter, sans-serif' }}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={() => onNavigate('details')}
          className="w-full py-4 px-6 bg-[#FF4F00] rounded-xl text-white transition-all hover:bg-[#E64600] mt-6"
          style={{ 
            fontFamily: 'SF Pro Display, Inter, sans-serif',
            boxShadow: '0 4px 16px rgba(255, 79, 0, 0.25)'
          }}
        >
          Create Request
        </button>
      </div>
    </div>
  );
}
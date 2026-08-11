// components/BookingFormModal.tsx
"use client";
import React, { useEffect } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: any;
  handleInputChange: (field: string, value: string) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

export default function BookingFormModal({ 
  isOpen, 
  onClose, 
  formData, 
  handleInputChange, 
  handleFormSubmit, 
  isSubmitting 
}: BookingFormModalProps) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto p-5 sm:p-6 rounded-[16px] sm:rounded-[20px] bg-gradient-to-br from-[#0a122bf9] to-[#070d1ff0] border border-[#7b8eff5c] shadow-[0_30px_90px_rgba(0,0,0,0.8)] text-white scrollbar-thin scrollbar-thumb-white/10 my-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[var(--pink)] transition-colors cursor-pointer text-sm"
        >
          ✕
        </button>

        <h3 className="text-lg sm:text-2xl font-extrabold mb-1 font-[family-name:var(--font-space-grotesk),sans-serif]">
          Book Free Consultation
        </h3>
        <p className="text-[11px] sm:text-sm text-[var(--muted)] mb-4">
          Fill out the form below and our experts will get back to you shortly.
        </p>

        <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
          {/* Full Name */}
          <div>
            <label className="block text-[11px] sm:text-xs font-semibold text-[#8d96ac] mb-1">Full Name</label>
            <input 
              type="text" 
              required
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-[10px] bg-[rgba(12,23,52,0.78)] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[var(--pink)] transition-colors"
            />
          </div>

          {/* Company Name & Contact Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] sm:text-xs font-semibold text-[#8d96ac] mb-1">Company Name</label>
              <input 
                type="text" 
                placeholder="Enter company name"
                value={formData.companyName}
                onChange={(e) => handleInputChange("companyName", e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-[10px] bg-[rgba(12,23,52,0.78)] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[var(--pink)] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] sm:text-xs font-semibold text-[#8d96ac] mb-1">Contact Number</label>
              <div className="phone-input-container">
                <PhoneInput
                  international
                  withCountryCallingCode
                  defaultCountry="IN"
                  placeholder="Enter phone number"
                  value={formData.contactNumber}
                  onChange={(value) => handleInputChange("contactNumber", value || "")}
                  className="w-full px-3.5 py-2 rounded-[10px] bg-[rgba(12,23,52,0.78)] border border-white/10 text-white text-xs sm:text-sm focus-within:border-[var(--pink)] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Interested Service Dropdown */}
          <div>
            <label className="block text-[11px] sm:text-xs font-semibold text-[#8d96ac] mb-1">Interested Service</label>
            <select 
              value={formData.service}
              onChange={(e) => handleInputChange("service", e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-[10px] bg-[rgba(12,23,52,0.78)] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[var(--pink)] transition-colors cursor-pointer"
            >
              <option value="Web Development" className="bg-[#070d1f]">Web Development</option>
              <option value="Custom CRM" className="bg-[#070d1f]">Custom CRM</option>
              <option value="SEO" className="bg-[#070d1f]">SEO</option>
              <option value="Social Media" className="bg-[#070d1f]">Social Media</option>
              <option value="Mobile Application" className="bg-[#070d1f]">Mobile Application</option>
            </select>
          </div>

          {/* Subject / Project Details */}
          <div>
            <label className="block text-[11px] sm:text-xs font-semibold text-[#8d96ac] mb-1">Subject </label>
            <textarea 
              rows={2}
              required
              placeholder="Tell us about your project or inquiry..."
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              className="w-full px-3.5 py-2 rounded-[10px] bg-[rgba(12,23,52,0.78)] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[var(--pink)] transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={isSubmitting}
            className="mt-1.5 w-full py-2.5 px-4 rounded-[10px] text-white bg-gradient-to-r from-[var(--pink)] via-[#d9004c] to-[var(--violet)] font-extrabold text-[10px] sm:text-[11px] tracking-[0.3px] shadow-[0_10px_24px_rgba(255,0,82,0.3)] hover:opacity-95 transition-all cursor-pointer font-[family-name:var(--font-space-grotesk),sans-serif] disabled:opacity-50"
          >
            {isSubmitting ? "SUBMITTING..." : "SUBMIT REQUEST ↗"}
          </button>
        </form>

      </div>
    </div>
  );
}
// hooks/useBookingModal.ts
import { useState } from "react";
import { showToast } from "@/utils/toast";

export function useBookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    contactNumber: "",
    service: "Web Development",
    subject: "",
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen(!isOpen);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent, onSuccess?: () => void) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          
          subject: ` New Consultation Inquiry - ${formData.companyName}`,
          
          from_name: "Kaelixo Web",
          
          "Full Name": formData.fullName,
          "Company Name": formData.companyName,
          "Contact Number": formData.contactNumber,
          "Selected Service": formData.service,
          "Subject": formData.subject,
        }),
      });

      const result = await response.json();

      if (result.success) {
        showToast.success("Consultation booked successfully!");

        setFormData({
          fullName: "",
          companyName: "",
          contactNumber: "",
          service: "Web Development",
          subject: "",
        });

        closeModal();
        if (onSuccess) onSuccess();
      } else {
        throw new Error(result.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Submission error:", error);
      showToast.error("Something went wrong. Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
    formData,
    handleInputChange,
    handleFormSubmit,
    isSubmitting,
  };
}
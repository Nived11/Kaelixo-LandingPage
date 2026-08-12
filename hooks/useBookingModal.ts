// hooks/useBookingModal.ts
import { useState } from "react";
import { showToast } from "@/utils/toast";
import { parsePhoneNumber } from "libphonenumber-js";

export function useBookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState(""); // പുതിയ സ്റ്റേറ്റ്

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    contactNumber: "",
    service: "Web Development",
    subject: "",
  });

  const openModal = () => setIsOpen(true);
  
  const closeModal = () => {
    setIsOpen(false);
    setPhoneError(""); // ക്ലോസ് ചെയ്യുമ്പോൾ എറർ മാറ്റാൻ
  };
  
  const toggleModal = () => setIsOpen(!isOpen);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field === "contactNumber") {
      setPhoneError(""); // ടൈപ്പ് ചെയ്യുമ്പോൾ എറർ ക്ലിയർ ആവാൻ
    }
  };

  const handleFormSubmit = async (e: React.FormEvent, onSuccess?: () => void) => {
    e.preventDefault();
    setPhoneError(""); // സബ്മിറ്റ് ചെയ്യുമ്പോൾ പഴയ എറർ മാറ്റുന്നു

    // ഫോൺ നമ്പർ വാലിഡേഷൻ ചെക്ക് ചെയ്യുക (ടോസ്റ്റിന് പകരം സ്റ്റേറ്റ്)
    if (!formData.contactNumber) {
      setPhoneError("Please enter a valid contact number!");
      return;
    }

    try {
      const phoneNumber = parsePhoneNumber(formData.contactNumber);
      if (!phoneNumber || !phoneNumber.isValid()) {
        setPhoneError("Please enter a valid phone number for the selected country!");
        return;
      }
    } catch (error) {
      setPhoneError("Invalid phone number format!");
      return;
    }

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
          subject: `New Consultation Inquiry - ${formData.companyName || formData.fullName}`,
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
    phoneError, 
  };
}
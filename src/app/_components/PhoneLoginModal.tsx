"use client";
import React, { useState } from "react";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { app } from "../../app/config";
import { useRouter } from "next/navigation";

// ✅ Fix for TypeScript
declare global {
  interface Window {
    recaptchaVerifier?: any;
  }
}

interface PhoneLoginModalProps {
  role: string;
  onClose: () => void;
}

const PhoneLoginModal: React.FC<PhoneLoginModalProps> = ({ role, onClose }) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [otpSent, setOtpSent] = useState(false);

  const auth = getAuth(app);
  const router = useRouter();

  const generateRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: () => {
          // reCAPTCHA solved
        },
      });
    }
  };

  const handleSendOtp = async () => {
    try {
      let formattedPhone = phone.trim().replace(/\s/g, "");

      if (!formattedPhone.startsWith("+")) {
        formattedPhone = `+91${formattedPhone.replace(/\D/g, "")}`;
      }

      if (formattedPhone.length !== 13) {
        alert("Please enter a valid test phone number like +911234567890");
        return;
      }

      generateRecaptcha();
      const appVerifier = window.recaptchaVerifier;

      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
      setConfirmationResult(confirmation);
      setOtpSent(true);
      setPhone("");
      alert("OTP has been sent");
    } catch (error) {
      console.error("OTP Error", error);
      alert("Failed to send OTP. Use test number like +911234567890");
    }
  };

  const handleOTPSubmit = async () => {
    try {
      await confirmationResult.confirm(otp);
      setOtp("");
      // 👉 Navigate based on the role
      if (role === "candidate") {
        router.push("/candidate");
      } else {
        router.push("/employer");
      }

    } catch (error) {
      console.error("OTP Submit Error", error);
      alert("Incorrect OTP or expired. Try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl border border-gray-200">
        {/* reCAPTCHA container */}
        <div id="recaptcha-container"></div>

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-blue-700">
            {role === "candidate" ? "Candidate" : "Employer"} Login
          </h2>
          <button
            onClick={onClose}
            className="text-3xl font-bold text-red-600 hover:text-red-800 transition"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        {/* 🔔 Info box */}
        <div className="mb-6 rounded-lg bg-yellow-100 p-4 text-sm text-yellow-900 border border-yellow-300">
          🔐 <strong>Note:</strong> Use test number: <code>+911234567890</code><br />
          OTP: <code>123456</code><br />
          (No paid plan or reCAPTCHA popup needed for testing)
        </div>

        {/* Phone input */}
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          className="mb-5 w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="+911234567890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="tel"
        />

        {/* OTP input */}
        <label className="mb-2 block text-sm font-medium text-gray-700">
          OTP
        </label>
        <input
          type="text"
          className="mb-6 w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          autoComplete="one-time-code"
        />

        {/* Button */}
        {otpSent ? (
          <button
            onClick={handleOTPSubmit}
            className="w-full rounded-lg bg-green-600 py-3 text-lg font-semibold text-white hover:bg-green-700 transition"
          >
            Submit OTP
          </button>
        ) : (
          <button
            onClick={handleSendOtp}
            className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition"
          >
            Send OTP
          </button>
        )}
      </div>
    </div>
 
);
};

export default PhoneLoginModal;

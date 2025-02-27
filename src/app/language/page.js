"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const LanguageSelection = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("selectedLanguage");
      if (storedLanguage) {
        router.push("/auth/enter-mobile");
      }
    }
  }, [router]);

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
  };

  const handleContinue = () => {
    if (selectedLanguage) {
      localStorage.setItem("selectedLanguage", selectedLanguage);
      router.push("/auth/enter-mobile");
    }
  };

  return (
    <div className="flex items-start justify-center h-screen mt-10 ">
      <div className="w-full max-w-sm p-6  rounded-lg">
        <h2 className="text-2xl font-bold text-black mb-6 text-left">
          Select Language
        </h2>

        <div className="space-y-4">
          {[
            { code: "English", label: "English", symbol: "Aa" },
            { code: "Hindi", label: "हिंदी", symbol: "आ" },
            { code: "Malayalam", label: "മലയാളം", symbol: "മ" },
            { code: "Tamil", label: "தமிழ்", symbol: "த" },
          ].map((lang) => (
            <button
              key={lang.code}
              className={`w-full flex items-center justify-between p-3 border rounded-lg transition-all duration-200 ${
                selectedLanguage === lang.code
                  ? "bg-[rgba(160,0,160,0.2)] border-[rgba(106,0,106,1)] text-white"
                  : "border-gray-300 bg-white text-black"
              }`}
              onClick={() => handleLanguageSelect(lang.code)}
            >
              <div className="flex items-center">
                <span className="bg-[rgba(160,0,160,0.2)] text-purple-800 px-3 py-1 rounded-full mr-3">
                  {lang.symbol}
                </span>
                <span className="text-black">{lang.label}</span>
              </div>
              <div
                className={`w-5 h-5 border-2 rounded-full transition-all duration-200 ${
                  selectedLanguage === lang.code
                    ? "bg-[rgba(139,0,139,1)] border-[rgba(106,0,106,1)]"
                    : "border-gray-400"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          className={`w-full text-white py-2 mt-6 rounded-lg font-semibold transition-all duration-200 ${
            selectedLanguage
              ? "bg-[rgba(139,0,139,1)] hover:bg-[rgba(160,0,160,1)]"
              : "bg-[rgba(196,98,196,1)] cursor-not-allowed"
          }`}
          disabled={!selectedLanguage}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LanguageSelection;

import React from "react";

type LanguageSelectorProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentLocale: string;
  handleLocaleChange: (locale: string) => void;
};

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  isOpen, 
  setIsOpen, 
  currentLocale, 
  handleLocaleChange 
}) => {
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1 sm:px-4 sm:py-2 rounded flex items-center bg-red-500/80 backdrop-blur-sm text-white hover:bg-red-600 transition-colors text-sm sm:text-base"
      >
        {currentLocale.toUpperCase()}
        <svg
          className={`ml-2 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-24 bg-black/80 backdrop-blur-lg rounded shadow-xl border border-white/10 text-white">
          <button
            onClick={() => handleLocaleChange("es")}
            className={`block w-full text-left px-4 py-2 hover:bg-red-500/50 transition-colors ${
              currentLocale === "es" ? "bg-red-500/50" : ""
            }`}
          >
            Español
          </button>
          <button
            onClick={() => handleLocaleChange("en")}
            className={`block w-full text-left px-4 py-2 hover:bg-red-500/50 transition-colors ${
              currentLocale === "en" ? "bg-red-500/50" : ""
            }`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};
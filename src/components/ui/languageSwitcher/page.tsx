"use client";
import { useState } from 'react';
import { useRouter } from "next/navigation";

const LanguageSwitcher = ({ locale }: { locale: string }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (value: string) => {
    if (value !== locale) {
      router.replace(`/${value}`);
    }
    setIsOpen(false);
  };

  return (
    <div className="language-switcher relative"
         onMouseLeave={() => setIsOpen(false)}> 
      <div className="flex flex-row items-center cursor-pointer" 
           onMouseEnter={() => setIsOpen(true)}> 
        <span className='uppercase'>{locale}</span>
      </div>
      {isOpen && (
        <div className="absolute mt-0 rounded-md bg-white shadow-lg">
          <div className="p-2" onClick={() => changeLanguage('en')}>EN</div>
          <div className="p-2" onClick={() => changeLanguage('ua')}>UA</div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
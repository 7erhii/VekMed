"use client";
import { useState } from 'react';
import Image from 'next/image';
import IconArrow from "@/assets/icons/icon-arrow.svg";
import { useRouter, useParams } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (value) => {
    if (value !== locale) {
      router.replace(`/${value}`);
    }
    setIsOpen(false); // Закрывать меню при выборе языка
  };

  return (
    <div className="language-switcher relative"
         onMouseLeave={() => setIsOpen(false)}> 
      <div className="flex flex-row items-center cursor-pointer" 
           onMouseEnter={() => setIsOpen(true)}> 
        <span className='uppercase'>{locale}</span>
        <Image src={IconArrow} alt="Arrow Icon" width={20} height={20} />
      </div>
      {isOpen && (
        <div className="absolute mt-0 rounded-md bg-white shadow-lg">
          <div className="p-2" onClick={() => changeLanguage('en')}>EN</div>
          <div className="p-2" onClick={() => changeLanguage('ru')}>RU</div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

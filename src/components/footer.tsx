// Footer.tsx
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react"; // Lucide icons
import logo from "./logo.jpeg"; // replace with your logo path

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0D4F8B] to-[#121D3B] text-white font-sans ">
      {/* Top Content */}
      <div className="w-full mx-auto px-32 pt-16 pb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0" dir="rtl">
        
        {/* Right: Links */}
        <div className="flex flex-col space-y-2 ">
          <p className="cursor-pointer hover:underline">من نحن</p>
          <p className="cursor-pointer hover:underline">بائعينا</p>
          <p className="cursor-pointer hover:underline">سياسات البيع</p>
          <p className="cursor-pointer hover:underline">الأسئلة الشائعة للبائعين</p>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="hawkshouse logo" className="w-36 md:w-48" />
        </div>

        {/* Left: Contact + Socials */}
        <div className="flex flex-col space-y-2 items-center">
          <p className="font-semibold">تواصل معنا</p>
          <p>Info@yourdomain.com</p>
          <p>+0123456789</p>
              <div className="flex gap-6  mt-2">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
              <Instagram size={16} color="#17293D" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
              <Twitter size={16} color="#17293D" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
              <Facebook size={16} color="#17293D" />
            </div>
          </div> </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/30  py-6 px-8 mx-20 flex flex-col md:flex-row justify-between items-center text-sm space-y-2 md:space-y-0">

        <p>Copyright © Date Name. All rights reserved.</p>
             <div className="flex space-x-4" dir="rtl">
          <p className="cursor-pointer hover:underline">البنود والظروف</p>
          <p className="cursor-pointer hover:underline">سياسة خاصة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

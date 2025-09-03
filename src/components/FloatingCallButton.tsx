// components/FloatingWhatsAppButton.tsx
'use client'; // This is a client component

import { useState } from 'react';
import {PhoneCall} from 'lucide-react'// You'll need to install react-icons

const phoneNumbers = [
  { number: '+6287804131975', label: 'Customer Service 1' },
];

export default function FloatingCallButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsappClick = (phoneNumber: string) => {
    const url = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=Hello, I have a question.`;
    window.open(url, '_blank');
    setIsOpen(false); // Close popover after clicking a number
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      {/* Popover */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-64 p-4 bg-white rounded-lg shadow-lg mb-2">
          <p className="font-bold mb-2 text-black">Contact Us via WhatsApp</p>
          <div className="space-y-2">
            {phoneNumbers.map((p, index) => (
              <button
                key={index}
                onClick={() => handleWhatsappClick(p.number)}
                className="w-full flex items-center justify-center p-3 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
              >
                <PhoneCall className="mr-2" />
                <span>{p.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 flex items-center justify-center text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        <PhoneCall size={24} />
      </button>
    </div>
  );
}
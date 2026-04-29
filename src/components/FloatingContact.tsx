"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Calendar, X } from "lucide-react";
import { useState } from "react";

export default function FloatingContact() {
  const [showChatPopup, setShowChatPopup] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] flex flex-col items-end space-y-4">
      {/* Chatbot Popup */}
      <AnimatePresence>
        {showChatPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.9, x: 20 }}
            className="bg-white text-black p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-black/5 w-72 relative mb-2"
          >
            <button 
              onClick={() => setShowChatPopup(false)}
              className="absolute top-4 right-4 text-black/20 hover:text-black transition-colors"
            >
              <X size={16} />
            </button>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <MessageSquare size={16} className="text-white" />
              </div>
              <span className="font-bold text-sm tracking-tight">WictroniX Assistant</span>
            </div>
            <p className="text-sm font-medium leading-relaxed mb-6">
              Need assist? <br />
              <span className="text-accent font-bold">Schedule a 30 min call</span>
            </p>
            <a 
              href="https://calendly.com/wictronix/wicternship" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-black text-white w-full py-3 rounded-xl text-xs font-bold hover:bg-accent transition-all shadow-lg shadow-black/10"
            >
              <Calendar size={14} />
              <span>Book Appointment</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col-reverse md:flex-row items-center gap-4">
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/917717596969"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/20 transition-all border border-white/20"
          title="Chat on WhatsApp"
        >
          <svg 
            viewBox="0 0 24 24" 
            width="28" 
            height="28" 
            fill="white"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </motion.a>

        {/* Chatbot Button */}
        <motion.button
          onClick={() => setShowChatPopup(!showChatPopup)}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-xl shadow-black/20 transition-all border border-white/10 group relative"
          title="Get Assistance"
        >
          {!showChatPopup && (
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -top-2 -left-2 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg"
            >
              1
            </motion.div>
          )}
          <MessageSquare 
            className={`w-6 h-6 transition-all duration-300 ${showChatPopup ? 'text-accent' : 'text-white'}`} 
          />
        </motion.button>
      </div>
    </div>
  );
}

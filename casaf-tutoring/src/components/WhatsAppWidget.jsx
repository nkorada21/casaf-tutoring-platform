import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaTimes, FaPaperPlane } from "react-icons/fa";

export default function ContactWidget() {
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "+237675316171";

  // Build WhatsApp URL
  const sendMessage = () => {
    if (!message.trim()) return;
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encoded}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">

      {/* FLOATING BUTTON GROUP */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-xl hover:scale-110 transition"
        >
          <FaWhatsapp className="text-white text-3xl" />
        </button>
      )}

      {open && !showPopup && (
        <div className="flex flex-col items-end gap-4">

          {/* CALL BUTTON */}
          <a
            href={`tel:${phoneNumber}`}
            className="w-16 h-16 rounded-full bg-green-400 flex items-center justify-center shadow-xl hover:scale-110 transition"
          >
            <FaPhoneAlt className="text-white text-3xl" />
          </a>

          {/* WHATSAPP BUTTON */}
          <button
            onClick={() => setShowPopup(true)}
            className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-xl hover:scale-110 transition"
          >
            <FaWhatsapp className="text-white text-3xl" />
          </button>

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="w-16 h-16 rounded-full bg-purple-400 flex items-center justify-center shadow-xl hover:scale-110 transition"
          >
            <FaTimes className="text-white text-3xl" />
          </button>
        </div>
      )}

      {/* WHATSAPP CHAT POPUP */}
      {showPopup && (
        <div className="w-80 bg-white rounded-xl shadow-xl border relative">

          {/* HEADER */}
          <div className="bg-green-600 text-white py-3 px-4 flex justify-between items-center rounded-t-xl">
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-2xl" />
              <span className="font-semibold">WhatsApp Chat</span>
            </div>
            <FaTimes
              className="text-2xl cursor-pointer hover:opacity-70"
              onClick={() => setShowPopup(false)}
            />
          </div>

          {/* MESSAGE BOX */}
          <div className="p-4">
            <div className="bg-gray-100 p-3 rounded-lg shadow-sm mb-4 text-gray-800">
              How can we be of help? 😊
            </div>

            {/* INPUT AREA */}
            <div className="flex items-center bg-gray-100 p-2 rounded-lg">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow bg-transparent outline-none px-2"
              />
              <button
                onClick={sendMessage}
                className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition"
              >
                <FaPaperPlane className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
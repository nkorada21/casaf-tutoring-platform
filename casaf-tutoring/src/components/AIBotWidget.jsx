import { useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

export default function AIBotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today? 😊" },
  ]);
  const [loading, setLoading] = useState(false);

  const sendToGPT = async (message) => {
    setLoading(true);

    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await response.json();
    setLoading(false);

    return data.choices[0].message.content;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMsg]);

    const userInput = input;
    setInput("");

    // Get AI response
    const aiResponse = await sendToGPT(userInput);

    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: aiResponse },
    ]);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999]">

      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="w-16 h-16 rounded-full bg-blue-600 text-white flex justify-center items-center shadow-lg hover:scale-110 transition"
        >
          <FaRobot className="text-3xl" />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="w-80 h-96 bg-white shadow-xl rounded-xl border flex flex-col">

          {/* Header */}
          <div className="bg-blue-600 text-white py-3 px-4 rounded-t-xl flex justify-between items-center">
            <span className="font-semibold">AI Chat Assistant</span>
            <FaTimes
              className="text-xl cursor-pointer hover:opacity-70"
              onClick={() => setOpen(false)}
            />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-200 ml-auto text-right"
                    : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="text-gray-400 italic">AI is typing…</div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 flex items-center gap-2 border-t">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow px-3 py-2 border rounded-lg outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
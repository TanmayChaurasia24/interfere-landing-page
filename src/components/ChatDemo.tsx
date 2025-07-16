
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, Bot, User, CheckCircle, AlertTriangle } from "lucide-react";

export const ChatDemo = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "user",
      text: "I found a bug in production",
      timestamp: "2 min ago"
    },
    {
      id: 2,
      type: "bot",
      text: "🔍 Analyzing the issue... Found null pointer exception in UserAuth.js line 42",
      timestamp: "2 min ago"
    },
    {
      id: 3,
      type: "bot",
      text: "✅ Bug automatically fixed and deployed. Zero downtime achieved.",
      timestamp: "1 min ago"
    }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    setIsLoading(true);
    const newMessage = {
      id: messages.length + 1,
      type: "user" as const,
      text: message,
      timestamp: "now"
    };
    
    setMessages(prev => [...prev, newMessage]);
    setMessage("");
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot" as const,
        text: "🤖 I've detected and triaged this issue. Generating fix now...",
        timestamp: "now"
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card className="bg-gradient-to-br from-purple-500 via-orange-400 to-emerald-500 border border-purple-500/30 p-[2] transition-all duration-300 hover:translate-y-[-5px] hover-float neon-glow-hover rounded-xl">
      <div className="space-y-4 rounded-xl p-5">
        <h3 className="text-xl font-orbitron font-bold text-center text-glow">
          LIVE BUG RESOLUTION CHAT
        </h3>
        
        {/* Chat Messages */}
        <div className="bg-black rounded-lg p-4 h-64 overflow-y-auto space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-2 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.type === 'user' 
                    ? 'bg-gradient-to-r from-cyber-pink to-neon-purple' 
                    : 'bg-gradient-to-r from-toxic-green to-glitch-blue'
                }`}>
                  {msg.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`rounded-lg p-3 ${
                  msg.type === 'user'
                    ? 'bg-gradient-to-r from-purple-600/50 to-pink-600/50 text-white'
                    : 'bg-gradient-to-r from-gray-800/80 to-gray-700/80 text-green-300'
                }`}>
                  <p className="text-sm">{msg.text}</p>
                  <span className="text-xs opacity-70">{msg.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-toxic-green to-glitch-blue flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 rounded-lg p-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-toxic-green rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-toxic-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-toxic-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Chat Input */}
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
          <Input
            type="text"
            placeholder="Report a bug or ask for help..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isLoading}
            className="bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-neon-purple"
          />
          <Button
            type="submit"
            disabled={isLoading || !message.trim()}
            className="cyber-gradient hover:scale-105 transition-transform"
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </Card>
  );
};

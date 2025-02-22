import { MessageSquare } from "lucide-react";
import { ChatInput } from "./ChatInput";
import { MCPSettings } from "./MCPSettings";
import { LocalLLMSettings } from "./LocalLLMSettings";
import { LLMSettings } from "./LLMSettings";
import { ChatHistory } from "./ChatHistory";
import { useState } from "react";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatMainProps {
  selectedSection?: string;
}

export function ChatMain({ selectedSection }: ChatMainProps) {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleNewMessage = (content: string, response: string) => {
    setMessages(prev => [
      ...prev,
      { role: 'user', content },
      { role: 'assistant', content: response }
    ]);
  };

  if (selectedSection === "MCP Install") {
    return <MCPSettings />;
  }

  if (selectedSection === "Local LLM") {
    return <LocalLLMSettings />;
  }

  if (selectedSection === "LLM API") {
    return <LLMSettings />;
  }

  if (selectedSection === "Chat History") {
    return <ChatHistory />;
  }

  return (
    <main className="flex-1 flex flex-col h-screen relative">
      <div className="flex-1 flex flex-col overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-4 animate-fade-down">
              <MessageSquare className="w-12 h-12 mx-auto text-muted-foreground" />
              <h1 className="text-4xl font-semibold">Welcome to Chat</h1>
              <p className="text-muted-foreground">Start a conversation and explore what I can do.</p>
            </div>
          </div>
        ) : (
          <div className="flex-1 p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-lg ${message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                    }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-full max-w-4xl mx-auto px-4 pb-4">
        <ChatInput onMessageSend={handleNewMessage} />
      </div>
    </main>
  );
}

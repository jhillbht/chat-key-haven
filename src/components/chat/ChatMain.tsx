import { MessageSquare } from "lucide-react";
import { ChatInput } from "./ChatInput";
import { MCPSettings } from "./MCPSettings";
import { LocalLLMSettings } from "./LocalLLMSettings";
import { LLMSettings } from "./LLMSettings";
import { ChatHistory } from "./ChatHistory";
import { MessageList } from "./MessageList";
import { WelcomeMessage } from "./WelcomeMessage";
import { useChat } from "@/hooks/useChat";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ModelSelector } from "./ModelSelector";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatMainProps {
  selectedSection?: string;
}

export function ChatMain({ selectedSection }: ChatMainProps) {
  const { messages, isLoading, error, sendMessage, initializeModel, modelConfig } = useChat();

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
      <ErrorBoundary>
        <div className="p-4">
          <ModelSelector onModelSelect={initializeModel} currentConfig={modelConfig} />
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto">
          {messages.length === 0 ? (
            <WelcomeMessage />
          ) : (
            <MessageList messages={messages} />
          )}
        </div>
        <div className="w-full max-w-4xl mx-auto px-4 pb-4">
          <ChatInput onSend={sendMessage} isLoading={isLoading} />
        </div>
      </ErrorBoundary>
    </main>
  );
}

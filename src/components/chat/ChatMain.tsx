
import { MessageSquare } from "lucide-react";
import { ChatInput } from "./ChatInput";
import { MCPSettings } from "./MCPSettings";
import { LocalLLMSettings } from "./LocalLLMSettings";
import { LLMSettings } from "./LLMSettings";
import { ChatHistory } from "./ChatHistory";
import { MCPWorkflows } from "./MCPWorkflows";

interface ChatMainProps {
  selectedSection?: string;
}

export function ChatMain({ selectedSection }: ChatMainProps) {
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

  if (selectedSection === "MCP Workflows") {
    return <MCPWorkflows />;
  }

  return (
    <main className="flex-1 flex flex-col h-screen relative">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4 animate-fade-down">
          <MessageSquare className="w-12 h-12 mx-auto text-muted-foreground" />
          <h1 className="text-4xl font-semibold">Welcome to Chat</h1>
          <p className="text-muted-foreground">Start a conversation and explore what I can do.</p>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto px-4 pb-4">
        <ChatInput />
      </div>
    </main>
  );
}

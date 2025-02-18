
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { KnowledgeGraph } from "./KnowledgeGraph";

export function ChatHistory() {
  const [showGraph, setShowGraph] = useState(false);
  
  const lastChatSummary = {
    title: "Discussion about AI Development Tools",
    summary: "Conversation covered setting up local LLM environments, configuring API providers, and integrating different AI models. Key points included model deployment strategies and API key management.",
    timestamp: "2 hours ago"
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-chat-border">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Last Chat Summary</h1>
          <div className="space-y-4 mb-6">
            <h2 className="text-lg font-medium">{lastChatSummary.title}</h2>
            <p className="text-muted-foreground">{lastChatSummary.summary}</p>
            <div className="text-sm text-muted-foreground">{lastChatSummary.timestamp}</div>
          </div>
          {!showGraph && (
            <Button onClick={() => setShowGraph(true)} className="gap-2">
              <Plus className="w-4 h-4" />
              Add to Knowledge Graph
            </Button>
          )}
        </div>
      </div>
      
      {showGraph && (
        <div className="flex-1 min-h-0">
          <KnowledgeGraph />
        </div>
      )}
    </div>
  );
}

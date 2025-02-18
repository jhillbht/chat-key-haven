
import { MessageSquare } from "lucide-react";
import { ChatInput } from "./ChatInput";

export function ChatMain() {
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

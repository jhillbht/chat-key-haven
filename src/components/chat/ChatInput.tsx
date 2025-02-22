import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Image, Wand2, Mic, Search, Sparkles } from "lucide-react";
import { useState, useEffect, KeyboardEvent } from "react";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

interface ChatInputProps {
  onMessageSend: (message: string, response: string) => void;
}

export function ChatInput({ onMessageSend }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const chat = new ChatOpenAI({
    openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,
    temperature: 0.7,
  });

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!message.trim() || isLoading) return;

    setIsLoading(true);
    try {
      const response = await chat.call([
        new HumanMessage({
          content: message,
        }),
      ]);

      onMessageSend(message, response.content.toString());

    } catch (error) {
      console.error("Error calling OpenAI:", error);
    } finally {
      setIsLoading(false);
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-lg p-4 space-y-4 animate-fade-up">
      <Textarea
        placeholder="Message ChatGPT... (Cmd/Ctrl + Enter to send)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        className="min-h-[60px] bg-transparent border-none focus-visible:ring-0 p-0 placeholder:text-muted-foreground resize-none"
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button size="icon" variant="ghost" type="button">
            <Image className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="ghost" type="button">
            <Mic className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="ghost" type="button">
            <Wand2 className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="ghost" type="button">
            <Search className="w-4 h-4" />
          </Button>
        </div>
        <Button type="submit" size="icon" disabled={isLoading}>
          <Sparkles className="w-4 h-4" />
        </Button>
      </div>
    </form>
  );
}

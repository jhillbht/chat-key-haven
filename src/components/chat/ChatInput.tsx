import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Image, Wand2, Mic, Search, Sparkles } from "lucide-react";
import { useState } from "react";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";

interface ChatInputProps {
  onSend: (message: string) => Promise<void>;
  isLoading: boolean;
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!message.trim() || isLoading) return;

    await onSend(message);
    setMessage("");
  };

  useKeyboardShortcut(
    [
      { key: 'Enter', metaKey: true },  // Mac
      { key: 'Enter', ctrlKey: true }   // Windows
    ],
    handleSubmit,
    { enabled: !isLoading && message.trim().length > 0 }
  );

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-lg p-4 space-y-4 animate-fade-up">
      <Textarea
        placeholder="Message ChatGPT... (Cmd/Ctrl + Enter to send)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
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

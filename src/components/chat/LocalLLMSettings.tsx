
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Download, Clock, Tag, DownloadCloud } from "lucide-react";

interface ModelCardProps {
  name: string;
  description: string;
  tags: Array<{
    label: string;
    color: string;
  }>;
  downloads: string;
  numTags: number;
  lastUpdated: string;
}

function ModelCard({ name, description, tags, downloads, numTags, lastUpdated }: ModelCardProps) {
  return (
    <div className="p-6 border-b border-chat-border hover:bg-chat-light/10 transition-colors">
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg">{name}</h3>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Download
          </Button>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`px-2 py-0.5 rounded text-xs ${tag.color}`}
              style={{ backgroundColor: `rgb(${tag.color} / 0.1)` }}
            >
              {tag.label}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <DownloadCloud className="w-4 h-4" />
            {downloads} Pulls
          </span>
          <span className="flex items-center gap-1">
            <Tag className="w-4 h-4" />
            {numTags} Tags
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            Updated {lastUpdated}
          </span>
        </div>
      </div>
    </div>
  );
}

export function LocalLLMSettings() {
  const models = [
    {
      name: "deepseek-r1",
      description: "DeepSeek's first-generation of reasoning models with comparable performance to OpenAI-α1, including six dense models distilled from DeepSeek-R1 based on Llama and Qwen.",
      tags: [
        { label: "1.5b", color: "text-blue-400" },
        { label: "7b", color: "text-blue-400" },
        { label: "8b", color: "text-blue-400" },
        { label: "14b", color: "text-blue-400" },
        { label: "32b", color: "text-blue-400" },
        { label: "70b", color: "text-blue-400" },
        { label: "67b", color: "text-blue-400" },
      ],
      downloads: "17.9M",
      numTags: 29,
      lastUpdated: "11 days ago"
    },
    {
      name: "llama3.3",
      description: "New state of the art 70B model. Llama 3.3 70B offers similar performance compared to the Llama 3.1 405B model.",
      tags: [
        { label: "tools", color: "text-purple-400" },
        { label: "70b", color: "text-blue-400" },
      ],
      downloads: "1.3M",
      numTags: 14,
      lastUpdated: "2 months ago"
    },
    {
      name: "phi4",
      description: "Phi-4 is a 14B parameter, state-of-the-art open model from Microsoft.",
      tags: [
        { label: "14b", color: "text-blue-400" },
      ],
      downloads: "599.4K",
      numTags: 5,
      lastUpdated: "5 weeks ago"
    },
    {
      name: "llama3.2",
      description: "Meta's Llama 3.2 goes small with 1B and 3B models.",
      tags: [
        { label: "tools", color: "text-purple-400" },
        { label: "1b", color: "text-blue-400" },
        { label: "3b", color: "text-blue-400" },
      ],
      downloads: "9M",
      numTags: 63,
      lastUpdated: "4 months ago"
    },
  ];

  return (
    <div className="h-full overflow-auto">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur">
        <div className="px-6 py-4 border-b border-chat-border">
          <div className="max-w-3xl mx-auto space-y-4">
            <Input
              placeholder="Search models..."
              className="w-full bg-chat-light/30"
            />
            <div className="flex gap-2">
              {["All", "Embedding", "Vision", "Tools"].map((filter) => (
                <Button
                  key={filter}
                  variant="ghost"
                  size="sm"
                  className={filter === "All" ? "bg-chat-light/30" : ""}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto divide-y divide-chat-border">
        {models.map((model) => (
          <ModelCard key={model.name} {...model} />
        ))}
      </div>
    </div>
  );
}


import { Button } from "@/components/ui/button";
import { Settings, X, Plus, Check } from "lucide-react";

interface ProviderCardProps {
  name: string;
  description: string;
  isConfigured?: boolean;
  isActive?: boolean;
}

function ProviderCard({ name, description, isConfigured, isActive }: ProviderCardProps) {
  return (
    <div className="p-6 rounded-lg border border-chat-border bg-chat-light/10 relative">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium flex items-center gap-2">
            {name}
            {isActive && <Check className="w-4 h-4 text-green-400" />}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex gap-2 mt-4">
          <Button
            variant="secondary"
            size="icon"
            className="bg-chat-light/20 hover:bg-chat-light/30"
          >
            <Settings className="w-4 h-4" />
          </Button>
          {isConfigured && (
            <Button
              variant="secondary"
              size="icon"
              className="bg-chat-light/20 hover:bg-chat-light/30"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
          {!isConfigured && (
            <Button
              variant="secondary"
              size="icon"
              className="bg-chat-light/20 hover:bg-chat-light/30"
            >
              <Plus className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export function LLMSettings() {
  const providers = [
    {
      name: "OpenAI",
      description: "Access GPT-4, GPT-3.5 Turbo, and other OpenAI models",
      isConfigured: true,
      isActive: true,
    },
    {
      name: "Anthropic",
      description: "Access Claude and other Anthropic models",
      isConfigured: true,
      isActive: true,
    },
    {
      name: "Databricks",
      description: "Access models hosted on your Databricks instance",
      isConfigured: false,
    },
    {
      name: "Groq",
      description: "Access Mixtral and other Groq-hosted models",
      isConfigured: true,
      isActive: true,
    },
    {
      name: "Google",
      description: "Access Gemini and other Google AI models",
      isConfigured: true,
    },
    {
      name: "Ollama",
      description: "Run and use open-source models locally",
      isConfigured: true,
      isActive: true,
    },
    {
      name: "OpenRouter",
      description: "Access a variety of AI models through OpenRouter",
      isConfigured: true,
      isActive: true,
    },
    {
      name: "Azure OpenAI",
      description: "Access Azure OpenAI models",
      isConfigured: false,
    },
  ];

  return (
    <div className="h-full overflow-auto p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Configure</h1>
          <h2 className="text-xl font-medium text-muted-foreground mb-6">Providers</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {providers.map((provider) => (
            <ProviderCard
              key={provider.name}
              name={provider.name}
              description={provider.description}
              isConfigured={provider.isConfigured}
              isActive={provider.isActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

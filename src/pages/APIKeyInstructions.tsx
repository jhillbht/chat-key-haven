
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const apiKeyInstructions = [
  {
    provider: "OpenAI",
    description: "Create an API key from the OpenAI platform dashboard",
    url: "https://platform.openai.com/api-keys",
    steps: [
      "Sign in to your OpenAI account",
      "Navigate to the API keys page",
      "Click 'Create new secret key'",
      "Copy and save your API key immediately (it won't be shown again)"
    ]
  },
  {
    provider: "Anthropic",
    description: "Generate an API key from the Anthropic console",
    url: "https://console.anthropic.com/settings/keys",
    steps: [
      "Log in to your Anthropic account",
      "Go to the API Keys section",
      "Click 'Create Key'",
      "Store your key securely (it will only be shown once)"
    ]
  },
  {
    provider: "Google",
    description: "Get your API key from Google AI Studio",
    url: "https://aistudio.google.com/app/apikey",
    steps: [
      "Sign in to Google AI Studio",
      "Navigate to the API Keys section",
      "Click 'Create API Key'",
      "Copy and save your API key"
    ]
  },
  {
    provider: "Groq",
    description: "Generate an API key from the Groq platform",
    url: "https://console.groq.com/keys",
    steps: [
      "Sign in to your Groq account",
      "Go to API Keys section",
      "Create a new API key",
      "Save your key securely"
    ]
  },
  {
    provider: "Azure OpenAI",
    description: "Get your API key from Azure Portal",
    url: "https://portal.azure.com/#create/Microsoft.CognitiveServicesOpenAI",
    steps: [
      "Sign in to Azure Portal",
      "Navigate to your OpenAI resource",
      "Go to 'Keys and Endpoint'",
      "Copy either KEY1 or KEY2"
    ]
  },
  {
    provider: "OpenRouter",
    description: "Get your API key from OpenRouter platform",
    url: "https://openrouter.ai/keys",
    steps: [
      "Sign in to OpenRouter",
      "Go to API Keys section",
      "Generate a new key",
      "Save your key immediately"
    ]
  }
];

export default function APIKeyInstructions() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="h-10 w-10"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-3xl font-bold">API Key Instructions</h1>
      </div>
      <p className="text-muted-foreground mb-8">
        Follow the instructions below to obtain API keys for different providers. Make sure to store your keys securely.
      </p>
      
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apiKeyInstructions.map((instruction) => (
            <Card key={instruction.provider} className="flex flex-col">
              <CardHeader>
                <CardTitle>{instruction.provider}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4">
                  {instruction.description}
                </p>
                <div className="space-y-4 flex-1">
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    {instruction.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
                <Button 
                  variant="outline" 
                  className="mt-4 w-full"
                  onClick={() => window.open(instruction.url, '_blank')}
                >
                  Get API Key
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

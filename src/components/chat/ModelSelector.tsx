import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ModelConfig, ModelProvider } from "@/types/chat";

interface ModelSelectorProps {
    onModelSelect: (config: ModelConfig) => void;
    currentConfig: ModelConfig | null;
}

export function ModelSelector({ onModelSelect, currentConfig }: ModelSelectorProps) {
    const [provider, setProvider] = useState<ModelProvider>(currentConfig?.provider || 'openai');
    const [apiKey, setApiKey] = useState(currentConfig?.apiKey || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onModelSelect({
            provider,
            apiKey,
            // Default model names per provider
            modelName: provider === 'openai' ? 'gpt-3.5-turbo' : 'claude-3-5-sonnet-20241022',
            temperature: 0.7,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Select value={provider} onValueChange={(value: ModelProvider) => setProvider(value)}>
                <SelectTrigger>
                    <SelectValue placeholder="Select Model Provider" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="openai">OpenAI (ChatGPT)</SelectItem>
                    <SelectItem value="anthropic">Anthropic (Claude)</SelectItem>
                </SelectContent>
            </Select>

            <Input
                type="password"
                placeholder="Enter API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
            />

            <Button type="submit" disabled={!apiKey}>
                Set Model Configuration
            </Button>
        </form>
    );
} 
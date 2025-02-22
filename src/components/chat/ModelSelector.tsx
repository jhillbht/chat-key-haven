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
import { OPENAI_MODELS, ANTHROPIC_MODELS, getDefaultModel } from "@/config/models";

interface ModelSelectorProps {
    onModelSelect: (config: ModelConfig) => void;
    currentConfig: ModelConfig | null;
}

export function ModelSelector({ onModelSelect, currentConfig }: ModelSelectorProps) {
    const [provider, setProvider] = useState<ModelProvider>(currentConfig?.provider || 'openai');
    const [apiKey, setApiKey] = useState(currentConfig?.apiKey || '');
    const [modelName, setModelName] = useState(currentConfig?.modelName || getDefaultModel(provider));

    const handleProviderChange = (value: ModelProvider) => {
        setProvider(value);
        setModelName(getDefaultModel(value));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onModelSelect({
            provider,
            apiKey,
            modelName,
            temperature: 0.7,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Select value={provider} onValueChange={handleProviderChange}>
                <SelectTrigger>
                    <SelectValue placeholder="Select Model Provider" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="openai">OpenAI (ChatGPT)</SelectItem>
                    <SelectItem value="anthropic">Anthropic (Claude)</SelectItem>
                </SelectContent>
            </Select>

            <Select value={modelName} onValueChange={setModelName}>
                <SelectTrigger>
                    <SelectValue placeholder="Select Model" />
                </SelectTrigger>
                <SelectContent>
                    {provider === 'openai'
                        ? OPENAI_MODELS.map(model => (
                            <SelectItem key={model} value={model}>{model}</SelectItem>
                        ))
                        : ANTHROPIC_MODELS.map(model => (
                            <SelectItem key={model} value={model}>{model}</SelectItem>
                        ))
                    }
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
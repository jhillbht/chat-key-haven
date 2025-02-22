import { useState } from "react";
import { ModelConfig } from "@/types/chat";
import { OPENAI_MODELS, ANTHROPIC_MODELS, OpenAIModel, AnthropicModel } from "@/config/models";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Define model metadata
const MODEL_INFO = {
    openai: {
        models: OPENAI_MODELS.map((id: OpenAIModel) => ({
            id,
            name: (() => {
                switch (id) {
                    case 'gpt-4o':
                        return 'GPT-4';
                    case 'o1':
                        return 'ChatGPT o1';
                    case 'o1-mini':
                        return 'ChatGPT o1 Mini';
                    case 'gpt-3.5-turbo':
                        return 'GPT-3.5 Turbo';
                    default:
                        return String(id).toUpperCase();
                }
            })(),
            icon: '🤖',
            provider: 'openai' as const
        })),
        name: 'OpenAI'
    },
    anthropic: {
        models: ANTHROPIC_MODELS.map((id: AnthropicModel) => ({
            id,
            name: (() => {
                switch (id) {
                    case 'claude-3-opus-20240229':
                        return 'Claude 3 Opus';
                    case 'claude-3-5-sonnet-20241022':
                        return 'Claude 3.5 Sonnet';
                    case 'claude-3-5-haiku-20241022':
                        return 'Claude 3.5 Haiku';
                    default:
                        return String(id).split('-').map(
                            word => word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ');
                }
            })(),
            icon: '🧠',
            provider: 'anthropic' as const
        })),
        name: 'Anthropic'
    }
};

interface ModelSelectorProps {
    onModelSelect: (config: ModelConfig) => void;
    currentConfig: ModelConfig | null;
}

export function ModelSelector({ onModelSelect, currentConfig }: ModelSelectorProps) {
    const [apiKey, setApiKey] = useState(currentConfig?.apiKey || '');

    const currentModel = currentConfig?.modelName
        ? [...MODEL_INFO.openai.models, ...MODEL_INFO.anthropic.models].find(
            model => model.id === currentConfig.modelName
        )
        : null;

    const handleModelSelect = (modelInfo: (typeof MODEL_INFO.openai.models)[0]) => {
        if (!apiKey.trim()) {
            // Maybe show an error message to the user
            alert('Please enter an API key');
            return;
        }

        onModelSelect({
            provider: modelInfo.provider,
            modelName: modelInfo.id,
            apiKey: apiKey.trim(), // Make sure to trim whitespace
            temperature: 0.7,
        });
    };

    return (
        <div className="flex gap-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className="w-[300px] justify-between"
                    >
                        {currentModel ? (
                            <span className="flex items-center gap-2">
                                <span>{currentModel.icon}</span>
                                <span>{currentModel.name}</span>
                            </span>
                        ) : (
                            "Select model..."
                        )}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[300px]">
                    {Object.entries(MODEL_INFO).map(([provider, info], index) => (
                        <div key={provider}>
                            {index > 0 && <DropdownMenuSeparator />}
                            <DropdownMenuLabel>{info.name}</DropdownMenuLabel>
                            <DropdownMenuGroup>
                                {info.models.map((model) => (
                                    <DropdownMenuItem
                                        key={model.id}
                                        onClick={() => handleModelSelect(model)}
                                        className="cursor-pointer"
                                    >
                                        <span className="flex items-center gap-2 flex-1">
                                            <span>{model.icon}</span>
                                            <span>{model.name}</span>
                                        </span>
                                        {currentConfig?.modelName === model.id && (
                                            <Check className="h-4 w-4 ml-2" />
                                        )}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuGroup>
                        </div>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            <input
                type="password"
                placeholder="Enter API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="flex h-10 w-[200px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
        </div>
    );
} 
export type ModelProvider = 'openai' | 'anthropic';

export interface ModelConfig {
    provider: ModelProvider;
    apiKey: string;
    modelName?: string;
    temperature?: number;
}

export interface Message {
    role: 'user' | 'assistant';
    content: string;
} 
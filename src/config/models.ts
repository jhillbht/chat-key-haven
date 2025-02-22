export const OPENAI_MODELS = [
    'gpt-4',
    'gpt-4-turbo-preview',
    'gpt-3.5-turbo'
] as const;

export const ANTHROPIC_MODELS = [
    'claude-3-opus-20240229',
    'claude-3-sonnet-20240229',
    'claude-3-haiku-20240229'
] as const;

export type OpenAIModel = typeof OPENAI_MODELS[number];
export type AnthropicModel = typeof ANTHROPIC_MODELS[number];

export function getDefaultModel(provider: 'openai' | 'anthropic'): string {
    return provider === 'openai'
        ? 'gpt-3.5-turbo'
        : 'claude-3-sonnet-20240229';
}

export function isOpenAIModel(model: string): model is OpenAIModel {
    return OPENAI_MODELS.includes(model as OpenAIModel);
}

export function isAnthropicModel(model: string): model is AnthropicModel {
    return ANTHROPIC_MODELS.includes(model as AnthropicModel);
}
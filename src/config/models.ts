export const OPENAI_MODELS = [
    'gpt-4o',
    'o1',
    'o1-mini',
    'gpt-3.5-turbo'
] as const;

export const ANTHROPIC_MODELS = [
    'claude-3-opus-20240229',
    'claude-3-5-sonnet-20241022',
    'claude-3-5-haiku-20241022'
] as const;

export type OpenAIModel = typeof OPENAI_MODELS[number];
export type AnthropicModel = typeof ANTHROPIC_MODELS[number];

export function getDefaultModel(provider: 'openai' | 'anthropic'): string {
    return provider === 'openai'
        ? 'gpt-3.5-turbo'
        : 'claude-3-sonnet';
}

export function isOpenAIModel(model: string): model is OpenAIModel {
    return OPENAI_MODELS.includes(model as OpenAIModel);
}

export function isAnthropicModel(model: string): model is AnthropicModel {
    return ANTHROPIC_MODELS.includes(model as AnthropicModel);
}
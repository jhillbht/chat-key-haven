import { ChatOpenAI } from "@langchain/openai";
import { ChatAnthropic } from "@langchain/anthropic";
import { HumanMessage } from "@langchain/core/messages";
import { BaseChatModel } from "@langchain/core/language_models/chat_models";
import { ModelConfig, ModelProvider } from "@/types/chat";
import { isOpenAIModel, isAnthropicModel, getDefaultModel } from "@/config/models";

class ChatService {
    private chatModel: BaseChatModel | null = null;
    private currentConfig: ModelConfig | null = null;

    initializeModel(config: ModelConfig) {
        if (this.currentConfig?.apiKey === config.apiKey &&
            this.currentConfig?.provider === config.provider &&
            this.currentConfig?.modelName === config.modelName) {
            return;
        }

        const { provider, apiKey, modelName, temperature } = config;

        switch (provider) {
            case 'openai':
                if (!isOpenAIModel(modelName)) {
                    throw new Error(`Invalid OpenAI model: ${modelName}`);
                }
                this.chatModel = new ChatOpenAI({
                    openAIApiKey: apiKey,
                    modelName: modelName,
                    temperature: temperature || 0.7,
                });
                break;
            case 'anthropic':
                if (!isAnthropicModel(modelName)) {
                    throw new Error(`Invalid Anthropic model: ${modelName}`);
                }
                this.chatModel = new ChatAnthropic({
                    anthropicApiKey: apiKey,
                    modelName: modelName,
                    temperature: temperature || 0.7,
                });
                break;
            default:
                throw new Error('Unsupported model provider');
        }

        this.currentConfig = config;
    }

    async sendMessage(content: string): Promise<string> {
        if (!this.chatModel) {
            throw new Error('Chat model not initialized. Please set up API key and provider.');
        }

        try {
            const response = await this.chatModel.invoke([
                new HumanMessage({
                    content,
                }),
            ]);
            return response.content.toString();
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.includes('API key')) {
                    throw new Error('Invalid API key. Please check your API key and try again.');
                }
            }
            throw error;
        }
    }
}

export const chatService = new ChatService(); 
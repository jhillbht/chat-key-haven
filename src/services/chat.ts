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
            this.currentConfig?.provider === config.provider) {
            return;
        }

        const modelName = config.modelName || getDefaultModel(config.provider);

        switch (config.provider) {
            case 'openai':
                if (!isOpenAIModel(modelName)) {
                    throw new Error(`Invalid OpenAI model: ${modelName}`);
                }
                this.chatModel = new ChatOpenAI({
                    openAIApiKey: config.apiKey,
                    modelName,
                    temperature: config.temperature || 0.7,
                });
                break;
            case 'anthropic':
                if (!isAnthropicModel(modelName)) {
                    throw new Error(`Invalid Anthropic model: ${modelName}`);
                }
                this.chatModel = new ChatAnthropic({
                    anthropicApiKey: config.apiKey,
                    modelName,
                    temperature: config.temperature || 0.7,
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

        const response = await this.chatModel.invoke([
            new HumanMessage({
                content,
            }),
        ]);
        return response.content.toString();
    }
}

export const chatService = new ChatService(); 
import { useState } from 'react';
import { chatService } from '@/services/chat';
import { Message, ModelConfig } from '@/types/chat';

export function useChat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [modelConfig, setModelConfig] = useState<ModelConfig | null>(null);

    const initializeModel = (config: ModelConfig) => {
        try {
            chatService.initializeModel(config);
            setModelConfig(config);
            setError(null);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to initialize model';
            setError(errorMessage);
        }
    };

    const sendMessage = async (content: string) => {
        if (!modelConfig) {
            setError('Please configure a model first');
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await chatService.sendMessage(content);

            setMessages(prev => [
                ...prev,
                { role: 'user', content },
                { role: 'assistant', content: response }
            ]);

        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An error occurred';
            setError(errorMessage);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        messages,
        isLoading,
        error,
        sendMessage,
        initializeModel,
        modelConfig
    };
} 
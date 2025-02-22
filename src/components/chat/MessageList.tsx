interface Message {
    role: 'user' | 'assistant';
    content: string;
}

interface MessageListProps {
    messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
    return (
        <div className="flex-1 p-4 space-y-4">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                    <div
                        className={`max-w-[80%] p-4 rounded-lg ${message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                            }`}
                    >
                        {message.content}
                    </div>
                </div>
            ))}
        </div>
    );
}
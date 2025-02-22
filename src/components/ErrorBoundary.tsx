import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    private handleReset = () => {
        this.setState({ hasError: false, error: undefined });
    };

    public render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="flex flex-col items-center justify-center h-full p-4">
                    <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
                    <p className="text-muted-foreground mb-4">
                        {this.state.error?.message || 'An unexpected error occurred'}
                    </p>
                    <Button onClick={this.handleReset}>Try Again</Button>
                </div>
            );
        }

        return this.props.children;
    }
} 
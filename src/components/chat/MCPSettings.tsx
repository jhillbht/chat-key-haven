
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Package, Command, ArrowRight } from "lucide-react";

interface ExtensionCardProps {
  title: string;
  description: string;
  githubStars: number;
  isBuiltIn?: boolean;
  onInstall?: () => void;
}

function ExtensionCard({ title, description, githubStars, isBuiltIn, onInstall }: ExtensionCardProps) {
  return (
    <div className="p-4 rounded-lg border border-chat-border bg-chat-light/30">
      <div className="flex items-start gap-3">
        <Package className="w-5 h-5 text-orange-400 mt-1" />
        <div className="flex-1 space-y-1">
          <h3 className="font-medium flex items-center gap-2">
            {title}
            {isBuiltIn && (
              <span className="px-2 py-0.5 rounded text-xs bg-chat-border text-muted-foreground">
                Built-in
              </span>
            )}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center text-xs text-muted-foreground">
              <svg
                className="w-4 h-4 mr-1"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
              </svg>
              {githubStars} on Github
            </div>
            {!isBuiltIn && onInstall && (
              <Button
                variant="ghost"
                size="sm"
                className="text-xs"
                onClick={onInstall}
              >
                Install
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MCPSettings() {
  return (
    <div className="h-full overflow-auto">
      <div className="px-6 py-6 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Browse Extensions</h2>
          <p className="text-muted-foreground">
            Your central directory for discovering and installing extensions.
          </p>
        </div>
        
        <div className="relative">
          <Input
            placeholder="Search for extensions..."
            className="w-full bg-chat-light/30"
          />
        </div>

        <div className="grid gap-4">
          <ExtensionCard
            title="Developer"
            description="Built-in developer tools for file editing and shell command execution"
            githubStars={356}
            isBuiltIn
          />
          
          <ExtensionCard
            title="Computer Controller"
            description="Built-in computer controls for webscraping, file caching, and automations"
            githubStars={356}
            isBuiltIn
          />
          
          <ExtensionCard
            title="Memory"
            description="Built-in memory system for persistent context and information storage"
            githubStars={356}
            isBuiltIn
          />
          
          <ExtensionCard
            title="Knowledge Graph Memory"
            description="Graph-based memory system for persistent knowledge storage"
            githubStars={7271}
            onInstall={() => console.log("Installing Knowledge Graph Memory...")}
          />
          
          <ExtensionCard
            title="Fetch"
            description="Web content fetching and processing capabilities"
            githubStars={7271}
            onInstall={() => console.log("Installing Fetch...")}
          />
          
          <ExtensionCard
            title="Figma"
            description="Figma design tool integration"
            githubStars={0}
            onInstall={() => console.log("Installing Figma...")}
          />
        </div>
      </div>
    </div>
  );
}

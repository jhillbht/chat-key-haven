
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Layers } from "lucide-react";

export function MCPWorkflows() {
  const workflows = [
    {
      name: "Data Processing",
      description: "Process and transform data using MCP pipelines",
      status: "Active",
    },
    {
      name: "Model Training",
      description: "Train and fine-tune ML models with custom datasets",
      status: "Inactive",
    },
    {
      name: "API Integration",
      description: "Connect to external APIs and services",
      status: "Active",
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-chat-border">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">MCP Workflows</h1>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              New Workflow
            </Button>
          </div>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <div className="space-y-4">
              {workflows.map((workflow) => (
                <Card key={workflow.name}>
                  <CardHeader className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{workflow.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {workflow.description}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          workflow.status === "Active"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-gray-500/10 text-gray-500"
                        }`}
                      >
                        {workflow.status}
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

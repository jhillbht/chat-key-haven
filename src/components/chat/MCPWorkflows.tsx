
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Link, Database, Server, Workflow } from "lucide-react";

export function MCPWorkflows() {
  const workflows = [
    {
      name: "REST API Integration",
      description: "Connect to Langflow REST APIs to execute workflows remotely",
      icon: Link,
      status: "Ready",
    },
    {
      name: "Database Workflows",
      description: "Access and transform data through Langflow pipelines",
      icon: Database,
      status: "Ready",
    },
    {
      name: "Custom Endpoints",
      description: "Create and manage custom API endpoints for your workflows",
      icon: Server,
      status: "Ready",
    },
    {
      name: "Workflow Chains",
      description: "Chain multiple workflows together for complex processing",
      icon: Workflow,
      status: "Ready",
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-chat-border">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold">Langflow Workflows</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Connect and manage your Langflow Workflow APIs
              </p>
            </div>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              New Connection
            </Button>
          </div>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {workflows.map((workflow) => (
                <Card 
                  key={workflow.name}
                  className="transition-all hover:shadow-md cursor-pointer"
                >
                  <CardHeader className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-md bg-primary/10">
                        <workflow.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <CardTitle className="text-lg flex items-center justify-between">
                          {workflow.name}
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-500/10 text-green-500">
                            {workflow.status}
                          </span>
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {workflow.description}
                        </p>
                      </div>
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

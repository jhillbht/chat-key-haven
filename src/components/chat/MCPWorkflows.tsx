
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Link, Database, Server, Workflow, Share, Search, Users } from "lucide-react";

export function MCPWorkflows() {
  const workflows = [
    {
      name: "REST API Integration",
      description: "Connect to Langflow REST APIs to execute workflows remotely",
      icon: Link,
      status: "Ready",
      version: "v1",
    },
    {
      name: "Database Workflows",
      description: "Access and transform data through Langflow pipelines",
      icon: Database,
      status: "Ready",
      version: "v2",
    },
    {
      name: "Custom Endpoints",
      description: "Create and manage custom API endpoints for your workflows",
      icon: Server,
      status: "Ready",
      version: "v1",
    },
    {
      name: "Workflow Chains",
      description: "Chain multiple workflows together for complex processing",
      icon: Workflow,
      status: "Ready",
      version: "v3",
    },
    {
      name: "Build a Social Media Strategy",
      description: "Automate content creation for your social media channels with a 30-day content calendar",
      icon: Share,
      status: "Ready",
      version: "v1",
    },
    {
      name: "Reddit Research",
      description: "Analyze Reddit discussions and trends to gather insights and data",
      icon: Search,
      status: "Ready",
      version: "v1",
    },
    {
      name: "CRM Reengagement",
      description: "Automatically identify and reach out to contacts you haven't connected with in the past 60 days",
      icon: Users,
      status: "Ready",
      version: "v1",
    },
  ];

  return (
    <div className="h-full bg-chat-dark p-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-white">MCP Workflows</h1>
            <p className="text-sm text-gray-400 mt-1">
              Turn any LM System into a custom MCP Server
            </p>
          </div>
          <Button className="gap-2 bg-indigo-600 hover:bg-indigo-700 text-white">
            <Plus className="w-4 h-4" />
            Add Server
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workflows.map((workflow) => (
              <Card 
                key={workflow.name}
                className="bg-[#1E1E1E] border-gray-800 text-white transition-all hover:border-gray-700 cursor-pointer"
              >
                <CardHeader className="p-6">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">{workflow.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{workflow.version}</span>
                        <button className="p-1.5 bg-gray-800 rounded hover:bg-gray-700">
                          <workflow.icon className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {workflow.description}
                    </p>
                    <div className="text-xs text-gray-500">
                      about 24 hours ago
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

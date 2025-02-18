
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  Plus,
  MessageSquare,
  Download,
  Package,
  History,
} from "lucide-react";

const sidebarItems = [
  {
    icon: MessageSquare,
    label: "LLM API",
    tooltip: "Configure LLM API settings",
    color: "text-blue-400",
  },
  {
    icon: Download,
    label: "Local LLM",
    tooltip: "Download and manage local LLMs",
    color: "text-green-400",
  },
  {
    icon: Package,
    label: "MCP Install",
    tooltip: "Install and configure MCP",
    color: "text-orange-400",
  },
  {
    icon: History,
    label: "Chat History",
    tooltip: "View chat history",
    color: "text-purple-400",
  },
];

export function ChatSidebar() {
  return (
    <Sidebar className="border-r border-chat-border">
      <SidebarHeader className="h-16 flex items-center px-4 glass-panel">
        <div className="flex items-center justify-between w-full">
          <SidebarTrigger>
            <Menu className="w-6 h-6" />
          </SidebarTrigger>
          <Button variant="ghost" size="icon">
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {sidebarItems.map((item, index) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                tooltip={item.tooltip}
                className="relative group"
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span>{item.label}</span>
                {index === 0 && (
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 text-xs font-medium text-blue-400">
                    1
                  </span>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

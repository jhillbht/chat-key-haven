
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Menu, Plus } from "lucide-react";

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
        {/* Chat history will go here */}
      </SidebarContent>
    </Sidebar>
  );
}


import { SidebarProvider } from "@/components/ui/sidebar";
import { ChatSidebar } from "./ChatSidebar";
import { ChatMain } from "./ChatMain";

export function ChatLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <ChatSidebar />
        <ChatMain />
      </div>
    </SidebarProvider>
  );
}

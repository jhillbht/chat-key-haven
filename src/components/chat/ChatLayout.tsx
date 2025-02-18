
import { SidebarProvider } from "@/components/ui/sidebar";
import { ChatSidebar } from "./ChatSidebar";
import { ChatMain } from "./ChatMain";
import { useState } from "react";

export function ChatLayout() {
  const [selectedSection, setSelectedSection] = useState<string>();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <ChatSidebar onSelect={setSelectedSection} />
        <ChatMain selectedSection={selectedSection} />
      </div>
    </SidebarProvider>
  );
}

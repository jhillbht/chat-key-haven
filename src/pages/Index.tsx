
import { ChatLayout } from "@/components/chat/ChatLayout";
import { useEffect, useState } from "react";
import { ApiKeyModal } from "@/components/ApiKeyModal";

const Index = () => {
  const [showApiModal, setShowApiModal] = useState(true);

  return (
    <>
      <ChatLayout />
      <ApiKeyModal open={showApiModal} onOpenChange={setShowApiModal} />
    </>
  );
};

export default Index;

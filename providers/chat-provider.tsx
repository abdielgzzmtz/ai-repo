"use client";

import { createContext, useContext } from "react";
import { useChat, UseChatHelpers } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import type { UIMessage, UIDataTypes, UITools } from "ai";

type ChatContextType = UseChatHelpers<UIMessage<unknown, UIDataTypes, UITools>>;

const ChatContext = createContext<ChatContextType | null>(null);

export function ChatProvider({ children } : { children: React.ReactNode }) {
  const chat = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  return (
    <ChatContext.Provider value={chat}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChatContext must be used inside ChatProvider");
  return ctx;
}

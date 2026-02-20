import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ChatState {
  isOpen: boolean;
  isFullScreen: boolean;
  artifacts: string[];
  activeArtifact: string | null;
  hasHydrated: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
  toggleFullScreen: () => void;
  setHasHydrated: (v: boolean) => void;
  addArtifact: (chatId: string) => void;
  removeArtifact: (chatId: string) => void;
  clearArtifacts: () => void;
  setActiveArtifact: (chatId: string | null) => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      isOpen: false,
      hasHydrated: false,
      isFullScreen: false,
      artifacts: [],
      activeArtifact: null,

      openChat: () => set({ isOpen: true }),
      closeChat: () => set({ isOpen: false }),
      toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
      toggleFullScreen: () => set((state) => ({ isFullScreen: !state.isFullScreen })),

      setHasHydrated: (v) => set({ hasHydrated: v }),
      addArtifact: (chatId: string) =>
        set((state) => ({
          artifacts: [...state.artifacts, chatId],
          activeArtifact: chatId,
        })),

      removeArtifact: (chatId: string) =>
        set((state) => {
          const index = state.artifacts.indexOf(chatId);
          if (index === -1) return state;

          const newArtifacts = state.artifacts.filter((id) => id !== chatId);

          let newActive = state.activeArtifact;

          if (state.activeArtifact === chatId) {
            if (index < state.artifacts.length - 1) {
              newActive = state.artifacts[index + 1];
            }
            else if (index - 1 >= 0) {
              newActive = state.artifacts[index - 1];
            }
            else {
              newActive = null;
            }
          }

          return {
            artifacts: newArtifacts,
            activeArtifact: newActive,
          };
        }),

      clearArtifacts: () =>
        set({
          artifacts: [],
          activeArtifact: null,
        }),
      setActiveArtifact: (chatId: string | null) => set({ activeArtifact: chatId }),
    }),
    {
      name: "chat-store",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);

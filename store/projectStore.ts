import { Key } from "react";
import { create } from "zustand";

interface Project {
  id: Key;
  name: string;
}

interface ProjectState {
  project: Project | null;
  setProject: (id: Key, name: string) => void;
  clearProject: () => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  project: null,
  setProject: (id, name) => set({ project: { id, name } }),
  clearProject: () => set({ project: null }),
}));

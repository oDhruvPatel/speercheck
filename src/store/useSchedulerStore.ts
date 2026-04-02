import { create } from "zustand";
import { candidates, engineers } from "../components/data/availability";

interface CandidateStore {
    selectedCandidate: typeof candidates[0];
    setSelectedCandidate: (candidate: typeof candidates[0]) => void;
}

interface ConfirmStoreInterface {
    engineer: typeof engineers[0];
    candidate: typeof candidates[0];
    date: string;
    time: string;
}

interface ConfirmStore {
    confirmation: ConfirmStoreInterface | null;
    setConfirmation: (confirmation: ConfirmStoreInterface | null) => void;
}

export const useCandidateStore = create<CandidateStore>((set) => ({
    selectedCandidate: candidates[0],
    setSelectedCandidate: (candidate) => set({ selectedCandidate: candidate })
}))


export const useConfirmStore = create<ConfirmStore>((set) => ({
    confirmation: null,
    setConfirmation: (confirmation) => set({ confirmation: confirmation })
}))
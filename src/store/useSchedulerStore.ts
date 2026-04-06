import { create } from "zustand";
import { candidates, engineers } from "../data/availability";

interface CandidateStore {
    selectedCandidate: typeof candidates[0];
    setSelectedCandidate: (candidate: typeof candidates[0]) => void;
}

interface ConfirmStoreInterface {
    engineer: typeof engineers[0] | null;
    candidate: typeof candidates[0] | null;
    date: string;
    time: string;
    isOverlap: boolean;
    type: "engineer" | "candidate" | "overlap";
}

interface BookedSlotInterface {
    date: string,
    time: string,
    engineer: number,
    candidate: number
}

interface ConfirmStore {
    confirmation: ConfirmStoreInterface | null;
    setConfirmation: (confirmation: ConfirmStoreInterface | null) => void;
}

interface BookedSlotStore {
    bookedSlot: BookedSlotInterface[] | [];
    setBookedSlot: (bookedSlot: BookedSlotInterface[]) => void;
}

//for storing the selected candidate for filtering
export const useCandidateStore = create<CandidateStore>((set) => ({
    selectedCandidate: candidates[0],
    setSelectedCandidate: (candidate) => set({ selectedCandidate: candidate })
}))

//for storing the confirmation details
export const useConfirmStore = create<ConfirmStore>((set) => ({
    confirmation: null,
    setConfirmation: (confirmation) => set({ confirmation: confirmation })
}))

//storing the booked slots
export const useBookedSlotStore = create<BookedSlotStore>((set) => ({
    bookedSlot: [],
    setBookedSlot: (bookedSlot) => set({ bookedSlot: bookedSlot })
}))

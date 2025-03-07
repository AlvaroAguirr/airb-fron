import { create } from "zustand";


interface SigupModalStore {
    isOpen : boolean;
    close: () => void;
    open: () => void;
}

const useSignupModal= create<SigupModalStore> ((set) => ({
    isOpen: false,
    open: () => set({isOpen :true}),
    close: () =>set({isOpen: false})
}));

export default useSignupModal
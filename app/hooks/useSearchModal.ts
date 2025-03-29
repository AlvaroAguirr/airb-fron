import {create } from "zustand";

export type SearchQuery={
    country:string;
    chechIn: Date|null;
    checkOut: Date | null;
    guest: Number;
    bathrooms:Number;
    bedrooms:Number
    category: string;
}

interface SearchModalStore {

    isOpen : boolean;
    step: string;
    close: () => void;
    open: (step:string) => void;
    query: SearchQuery
    setQuery:(query: SearchQuery)=>void

    
}

const useSearchModal= create<SearchModalStore> ((set) => ({
    isOpen: false,
    step:'',
    open: (step) => set({isOpen :true, step: step}),
    close: () =>set({isOpen: false}),
    setQuery:(query:SearchQuery)=> set({query:query}),
    query:{
        country:'',
        chechIn:null,
        checkOut:null,
        guest:1,
        bedrooms:0,
        bathrooms:0,
        category:'',
    }
}));

export default useSearchModal
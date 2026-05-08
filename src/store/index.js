import { create } from "zustand";

export const useFavorites = create((set)=>({
   favorites:[],
  setFavorites: (newvaleu)=>set(()=>({favorites:newvaleu}))

}));

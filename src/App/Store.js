import { create } from "zustand";
import { persist } from "zustand/middleware";
import CookieCount from "../Components/CookieCount";

export const useCookie = create(
    persist(
        (set)=>({
            CookieCount: 0,
            ClickAmount: 1,
            AutoAmount:100,
            decrementBy: (amount)=>{set((state)=>({CookieCount: state.CookieCount - amount}))},
            incrementCookie: ()=>{set((state)=>({CookieCount: state.CookieCount + state.ClickAmount}))},
            incrementClick: (amount) => {set((state)=>({ClickAmount: state.ClickAmount + amount}))},
            autoCookie: () => {set((state) => ({CookieCount: state.CookieCount + state.AutoAmount}))},
            incrementAuto: (amount) => {set((state)=>({ClickAmount: state.AutoAmount + amount}))},
        })
    )
)



export const useSound = create(
    persist(
        (set)=>({
            Sound: 1,
            Music: 1
        })
    )
)
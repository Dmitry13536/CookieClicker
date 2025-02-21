import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useCookie = create(
    persist(
        (set)=>({
            CookieCount: 0,
            ClickAmount: 1,
            AutoAmount:0,
            decrementBy: (amount)=>{set((state)=>({CookieCount: state.CookieCount - amount}))},
            incrementCookie: ()=>{set((state)=>({CookieCount: state.CookieCount + state.ClickAmount}))},
            incrementClick: (amount) => {set((state)=>({ClickAmount: state.ClickAmount + amount}))},
            autoCookie: () => {set((state) => ({CookieCount: state.CookieCount + state.AutoAmount}))},
            incrementAuto: (amount) => {set((state)=>({AutoAmount: state.AutoAmount + amount}))},
        })
    ), {
        name: 'cookie-store',
      }
)



export const useSound = create(
    persist(
        (set)=>({
            Sound: 0,
            Music: 0,
            setSound: (amount) => (set((state)=>({Sound: amount}))),
            setMusic: (amount) => (set((state)=>({Music: amount})))
        })
    )
)
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
            Music: 1,
            setSound: (amount) => (set((state)=>({Sound: amount}))),
            setMusic: (amount) => (set((state)=>({Music: amount})))
        })
    )
)

export const useImg = create(
    persist(
        (set)=>({
            Img:1,
            plusImg: ()=> (set((state) => ({Img: state.Img ===5 ? 1 : state.Img+1}))),
            minusImg: ()=> (set((state)=> ({Img: state.Img ===1 ? 5 : state.Img-1}))),
        })
    ), {name : 'img-storage'}
)
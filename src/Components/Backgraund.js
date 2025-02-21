import { useEffect, useRef } from "react";
import { useSound } from "../App/Store";

function BackgroundMusic({scr}){
    const MusicRef = useRef(null);
    const {Music} = useSound(state=>state)

    useEffect(
        ()=>{
            MusicRef.current = new Audio(scr);
            MusicRef.current.loop = true;
            MusicRef.current.volume = Music/100;

            const handleFirstInteraction = () => {
                MusicRef.current.play();

                document.removeEventListener('click', handleFirstInteraction);
            };

            document.addEventListener('click', handleFirstInteraction);

            return () =>{
                document.removeEventListener('click', handleFirstInteraction);

                if (MusicRef.current){
                    MusicRef.current.pause();
                    MusicRef.current.removeAttribute('src');
                    MusicRef.current.load();
                    MusicRef.current = null;
                }
            };
        },[Music, scr]);
        
    return null;
}

export default BackgroundMusic ;
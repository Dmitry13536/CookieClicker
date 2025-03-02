import { useEffect, useRef } from "react";
import { useImg, useSound } from "../App/Store";

function BackgroundMusic({src1, src2}){
    const MusicRef = useRef(null);
    const {Music} = useSound(state=>state)
    const {Img} = useImg(state => state);

    useEffect(()=>{
            MusicRef.current = new Audio(Img===5?src2:src1);
            MusicRef.current.loop = true;
            MusicRef.current.volume = Music/100;

            const handleFirstInteraction = () => {
                MusicRef.current.play()
                .then(()=>{
                    console.log('работает')
                })              
                .catch((error)=>{
                    console.log('не работает ', error)
                })
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
        },[Music, src1, src2, Img]);
        
    return null;
}

export default BackgroundMusic;
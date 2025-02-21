import { useEffect, useState } from "react";


function useLargeScreen(){
    const [large, setLarge] = useState(window.innerWidth >= 1020);

    useEffect(
        ()=>
    {const handleResize = ()=>{
        setLarge(window.innerWidth>=1020);
    }

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    }
    
    },[])

    return large;
}

export default useLargeScreen;

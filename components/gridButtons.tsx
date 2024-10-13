'use client';
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast"
const GridButtons = () => {
    const { toast } = useToast()
    const buttonRef = useRef(null);

    useEffect(() => {
      const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key) { // Example: Ctrl+B shortcut
          if (buttonRef.current && /^[0-9]$/.test(event.key)) {
            const audio = new Audio(`/audios/audio${String(event.key)}.mp3`);
            audio.volume = 1;
            audio.play();
            toast({
              title: "Playing Audio " + String(event.key),
            })
            
          }
        }
      };

      window.addEventListener('keydown', handleKeyPress);

      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }, []);



    const playAudio = (index: number) => {
        const audio = new Audio(`/audios/audio${index}.mp3`);
        audio.volume = 1;
        audio.play();
        toast({
          title: "Playing Audio " + String(index),
        })
    };


  return (
    <div className="h-screen w-screen grid grid-cols-4 gap-4 p-4">
      {[...Array(8)].map((_, index) => (
        <Button ref={buttonRef} key={index+1} onClick={() => playAudio(index+1)} variant="outline" className="w-full h-full">
           {index+1}
        </Button>
      ))} 
    </div>
  );
};

export default GridButtons;

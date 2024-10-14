"use client"
import React from 'react';
import Link from 'next/link';
import { ModeToggle } from "@/components/theme-toggle";
import { ProfileForm } from './UploadForm';
const NavigationHeader: React.FC = () => {


 
  const contactClick = () => {
    const audio = new Audio(`/audios/audio6.mp3`);
    audio.volume = 1;
    audio.play();
  };    

  
  return (
    <header className="w-full bg-background border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Soundboard
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
            Upload Audio
            </Link>
          </li>
     
          <li>
            <Link href="#" onClick={() => contactClick()} className="hover:text-primary transition-colors">
Contact            </Link>
          </li>
          <li>
            <ModeToggle />
          </li>
          <li>
          <ProfileForm />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationHeader;

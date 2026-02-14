import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { Track } from '../types';
import { MUSIC_TRACKS } from '../constants';

interface AudioContextType {
  isPlaying: boolean;
  currentTrack: Track;
  togglePlay: () => void;
  playTrack: (track: Track) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  analyserRef: React.RefObject<AnalyserNode | null>;
  audioContextRef: React.RefObject<AudioContext | null>;
  currentTime: number;
  duration: number;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track>(MUSIC_TRACKS[0]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

  // Initialize Web Audio API
  const initAudioContext = () => {
    if (!audioContextRef.current && audioRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      audioContextRef.current = new AudioCtx();
      analyserRef.current = audioContextRef.current!.createAnalyser();
      analyserRef.current.fftSize = 256;
      
      // Connect audio element to analyser
      if(!sourceRef.current) {
         sourceRef.current = audioContextRef.current!.createMediaElementSource(audioRef.current);
         sourceRef.current.connect(analyserRef.current);
         analyserRef.current.connect(audioContextRef.current!.destination);
      }
    }
  };

  const togglePlay = async () => {
    if (!audioRef.current) return;
    
    // Resume context if suspended (browser policy)
    if (audioContextRef.current?.state === 'suspended') {
      await audioContextRef.current.resume();
    }

    if (!audioContextRef.current) {
        initAudioContext();
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Audio play failed", e));
    }
    setIsPlaying(!isPlaying);
  };

  const playTrack = (track: Track) => {
    if (!audioRef.current) return;
    setCurrentTrack(track);
    setIsPlaying(true);
    // Timeout to allow src to update
    setTimeout(() => {
        initAudioContext();
        audioRef.current?.play();
    }, 50);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <AudioContext.Provider value={{ 
      isPlaying, 
      currentTrack, 
      togglePlay, 
      playTrack, 
      audioRef, 
      analyserRef,
      audioContextRef,
      currentTime,
      duration
    }}>
      <audio 
        ref={audioRef} 
        src={currentTrack.url} 
        crossOrigin="anonymous" 
        preload="auto"
      />
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
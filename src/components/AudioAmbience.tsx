import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Activity } from 'lucide-react';

export const AudioAmbience: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  const startHeartbeat = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const playBeep = () => {
        if (!ctx || ctx.state === 'closed') return;
        
        // Gentle hospital monitor pulse (sine wave 880Hz, soft attack and decay)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(784, ctx.currentTime); // G5 note
        
        // Very soft volume
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.28);
      };

      // Play initial beep
      playBeep();
      // 72 BPM ≈ 833ms interval
      const interval = window.setInterval(playBeep, 850);
      intervalRef.current = interval;
      setIsPlaying(true);
    } catch {
      console.warn("Audio Context not supported");
    }
  };

  const stopHeartbeat = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopHeartbeat();
    } else {
      startHeartbeat();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close().catch(() => {});
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      title={isPlaying ? "Σίγαση ατμόσφαιρας μόνιτορ (Δωμάτιο 312)" : "Ενεργοποίηση ατμόσφαιρας μόνιτορ (Δωμάτιο 312)"}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
        isPlaying
          ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-[0_0_12px_rgba(234,179,8,0.3)]'
          : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
      }`}
    >
      {isPlaying ? (
        <>
          <Activity className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>312 • 72 BPM</span>
          <Volume2 className="w-3.5 h-3.5 text-amber-400" />
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5" />
          <span>Ατμόσφαιρα 312</span>
        </>
      )}
    </button>
  );
};

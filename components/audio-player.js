"use client";

import { useEffect, useId, useRef, useState } from "react";

const GLOBAL_PLAY_EVENT = "audio-player:play";

function formatTime(value) {
  if (!Number.isFinite(value) || value < 0) {
    return "0:00";
  }

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function AudioPlayer({ src, title, startTime = 0 }) {
  const audioRef = useRef(null);
  const playerId = useId();
  const safeStartTime = Number.isFinite(startTime) && startTime > 0 ? startTime : 0;
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(safeStartTime);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    function handleExternalPlay(event) {
      if (event.detail?.id === playerId) {
        return;
      }

      if (!audioRef.current?.paused) {
        audioRef.current.pause();
      }
    }

    window.addEventListener(GLOBAL_PLAY_EVENT, handleExternalPlay);

    return () => {
      window.removeEventListener(GLOBAL_PLAY_EVENT, handleExternalPlay);
    };
  }, [playerId]);

  function syncFromAudio() {
    if (!audioRef.current) {
      return;
    }

    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration || 0);
  }

  async function togglePlayback() {
    if (!audioRef.current) {
      return;
    }

    if (audioRef.current.paused) {
      if (audioRef.current.ended) {
        audioRef.current.currentTime = safeStartTime;
      }

      window.dispatchEvent(new CustomEvent(GLOBAL_PLAY_EVENT, { detail: { id: playerId } }));

      try {
        await audioRef.current.play();
      } catch {
        setIsPlaying(false);
      }

      return;
    }

    audioRef.current.pause();
  }

  function handleLoadedMetadata() {
    if (!audioRef.current) {
      return;
    }

    if (safeStartTime > 0 && safeStartTime < audioRef.current.duration) {
      audioRef.current.currentTime = safeStartTime;
    }

    setIsReady(true);
    syncFromAudio();
  }

  function handleTimeUpdate() {
    syncFromAudio();
  }

  function handlePlay() {
    setIsPlaying(true);
  }

  function handlePause() {
    setIsPlaying(false);
  }

  function handleEnded() {
    setIsPlaying(false);
    setCurrentTime(safeStartTime);
  }

  function handleSeek(event) {
    if (!audioRef.current) {
      return;
    }

    const nextTime = Number(event.target.value);
    audioRef.current.currentTime = nextTime;
    setCurrentTime(nextTime);
  }

  const progressMax = duration > 0 ? duration : 0;
  const progressValue = progressMax > 0 ? currentTime : 0;
  const progressPercent = progressMax > 0 ? (progressValue / progressMax) * 100 : 0;

  return (
    <div
      className={[
        "audio-player mt-6 rounded-[1.6rem] border border-[color:rgba(24,21,18,0.1)] px-4 py-4 sm:px-5",
        isPlaying ? "audio-player-active" : ""
      ].join(" ")}
      style={{ "--audio-progress": `${progressPercent}%` }}
    >
      <audio
        onEnded={handleEnded}
        onLoadedMetadata={handleLoadedMetadata}
        onPause={handlePause}
        onPlay={handlePlay}
        onTimeUpdate={handleTimeUpdate}
        preload="metadata"
        ref={audioRef}
        src={src}
      />

      <div className="flex items-center gap-4">
        <button
          aria-label={`${isPlaying ? "Pause" : "Play"} ${title}`}
          className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[color:rgba(24,21,18,0.12)] bg-[color:rgba(255,255,255,0.56)] text-[color:var(--text)] transition duration-200 hover:border-[color:rgba(24,21,18,0.22)] hover:bg-[color:rgba(255,255,255,0.8)]"
          onClick={togglePlayback}
          type="button"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="eyebrow text-[0.64rem]">
                {isPlaying ? "Now playing" : isReady ? "Ready to play" : "Loading track"}
              </p>
              <p className="mt-2 truncate text-sm uppercase tracking-[0.14em] text-[color:var(--text)]">
                {title}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-sm uppercase tracking-[0.14em] text-[color:var(--muted)]">
                {formatTime(currentTime)}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[color:rgba(100,91,82,0.7)]">
                {formatTime(duration)}
              </p>
            </div>
          </div>

          <input
            aria-label={`Seek ${title}`}
            className="audio-progress mt-4 block w-full"
            disabled={progressMax === 0}
            max={progressMax}
            min="0"
            onChange={handleSeek}
            step="0.1"
            type="range"
            value={progressValue}
          />
        </div>
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      className="ml-0.5 h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 6.5C8 5.72 8.85 5.24 9.52 5.64L18.17 10.64C18.83 11.03 18.83 11.97 18.17 12.36L9.52 17.36C8.85 17.76 8 17.28 8 16.5V6.5Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 6.75C8 6.34 8.34 6 8.75 6H10.75C11.16 6 11.5 6.34 11.5 6.75V17.25C11.5 17.66 11.16 18 10.75 18H8.75C8.34 18 8 17.66 8 17.25V6.75Z" />
      <path d="M12.5 6.75C12.5 6.34 12.84 6 13.25 6H15.25C15.66 6 16 6.34 16 6.75V17.25C16 17.66 15.66 18 15.25 18H13.25C12.84 18 12.5 17.66 12.5 17.25V6.75Z" />
    </svg>
  );
}

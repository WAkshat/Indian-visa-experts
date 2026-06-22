"use client";

import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  webmSrc?: string;
  /** Accepted for compatibility; a brand gradient is shown until the video plays. */
  poster?: string;
  overlayOpacity?: number;
  className?: string;
}

export default function VideoBackground({
  src,
  webmSrc,
  overlayOpacity = 0.7,
  className = "",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !useVideo) return;

    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      video.play().catch(() => setUseVideo(false));
    };

    video.addEventListener("canplay", play);
    if (video.readyState >= 3) play();

    return () => video.removeEventListener("canplay", play);
  }, [prefersReducedMotion, useVideo]);

  const showVideo = useVideo && !prefersReducedMotion;

  return (
    <div className={`absolute inset-0 overflow-hidden bg-navy-950 ${className}`} aria-hidden="true">
      {/* Brand-colored placeholder shown until the video paints its first frame —
          avoids flashing a static photo that doesn't match the footage. */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-black" />

      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlaying={() => setVideoReady(true)}
          onError={() => setUseVideo(false)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          <source src={src} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-navy-950" style={{ opacity: overlayOpacity }} />
    </div>
  );
}

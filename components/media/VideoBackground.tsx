"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface VideoBackgroundProps {
  src: string;
  webmSrc?: string;
  poster: string;
  overlayOpacity?: number;
  className?: string;
}

export default function VideoBackground({
  src,
  webmSrc,
  poster,
  overlayOpacity = 0.7,
  className = "",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(true);
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
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <Image
        src={poster}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setUseVideo(false)}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          <source src={src} type="video/mp4" />
        </video>
      )}

      <div
        className="absolute inset-0 bg-navy-950"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}

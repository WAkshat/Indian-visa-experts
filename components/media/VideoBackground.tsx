"use client";

import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  webmSrc?: string;
  /** Full still frame; loaded at low priority and the backdrop for reduced-motion. */
  poster?: string;
  overlayOpacity?: number;
  className?: string;
}

// Inlined ~380-byte blurred first frame of the hero video. Paints instantly with
// the HTML (zero network) so the Taj Mahal is visible immediately — but as a CSS
// background it never competes with the render-critical CSS for bandwidth, so it
// can't delay FCP/LCP the way a high-priority poster preload did.
const LQIP =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAQTGF2YzYwLjMxLjEwMgD/2wBDAAgSEhUSFRgYGBgYGB0bHR4eHh0dHR0eHh4gICAmJiYgICAeHiAgJCQmJikqKScnJicqKi0tLTY2MzM/P0FNTV3/xABvAAACAwEAAAAAAAAAAAAAAAAFAwIEBgcBAQEBAQAAAAAAAAAAAAAAAAMFAgQQAAEDAgMHBQEBAAAAAAAAAAECABESAzFRQULRkpEyYSGhcTMiE/BTEQEBAAMBAQEAAAAAAAAAAAABABEDAkGREv/AABEIABIAIAMBIgACEQADEQD/2gAMAwEAAhEDEQA/AOg2VE20SZNIk5+G4qT5lUerzyLv1A7ANSiqlZSSFEpE0iYjzhi+Xvahg+y86xcsaqChIdBfYgZzk0K0IkkUyYxxcAVE68mhuXl8YnSfo9LLfosbSuZY+9euU9a+I73ZY290udVoUb96fkua7St7Wq9d/wBF8Rz92g483BWH9m1sX//Z";

export default function VideoBackground({
  src,
  webmSrc,
  poster,
  overlayOpacity = 0.7,
  className = "",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);
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
      {/* Instant blurred still — inline, paints with the HTML, no empty hero. */}
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center blur-xl"
        style={{ backgroundImage: `url("${LQIP}")` }}
      />

      {/* Full-resolution still — low priority so it yields to critical CSS/JS,
          then fades in over the blur. Also the backdrop for reduced-motion. */}
      {poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt=""
          fetchPriority="low"
          loading="eager"
          decoding="async"
          onLoad={() => setPosterLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            posterLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

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

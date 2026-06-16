/**
 * Media configuration — replace placeholder assets with your own when ready.
 *
 * Free stock sources:
 * - Videos: https://www.pexels.com/videos/ | https://mixkit.co/free-stock-video/
 * - Images: https://unsplash.com | https://www.pexels.com/
 * - Animations: https://lottiefiles.com (filter by Free)
 */
export const media = {
  hero: {
    poster: "/images/hero-poster.jpg",
    video: "/videos/hero.mp4",
    /** Optional WebM for smaller file size — add to public/videos/ when available */
    videoWebm: undefined as string | undefined,
    overlayOpacity: 0.72,
  },
  consultation: {
    poster: "/images/about-consultation.jpg",
    video: "/videos/consultation.mp4",
  },
  lottie: {
    documents: "/animations/documents.json",
  },
  /**
   * Replace with your own YouTube video ID once you upload a consultation explainer.
   * Example: "dQw4w9WgXcQ" from youtube.com/watch?v=dQw4w9WgXcQ
   * Leave empty to show the self-hosted fallback video instead.
   */
  youtube: {
    consultationVideoId: "" as string,
  },
  unsplash: {
    aboutConsultation:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    services: {
      "business-visa-india":
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      "employment-visa-india":
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80",
      "x-visa-india":
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80",
      "frro-registration-india":
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
      "visa-extension-india":
        "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=600&q=80",
      "oci-services-india":
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
      "foreign-company-india-advisory":
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      // Document Review card (its service slug is "contact").
      "contact":
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
    } as Record<string, string>,
  },
} as const;

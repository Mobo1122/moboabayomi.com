import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import InstagramGrid from "../components/InstagramGrid";

export function meta() {
  const title = "Moodboard — Mobo Abayomi";
  const description =
    "A running visual log of images that inform how I think about products, culture and aesthetics.";
  const image =
    "https://moboabayomi.com/og.jpg";
  const url = "https://moboabayomi.com/moodboard";

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },

    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Mobo Abayomi" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

export default function MoodboardPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Header Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-black/40 mb-8 font-medium">
            Visual references
          </div>
          <h1 className="text-[clamp(3rem,12vw,10rem)] font-black leading-[0.9] tracking-tight text-black mb-8">
            THE MOBO
            <br />
            MOODBOARD
          </h1>
          <p className="text-base leading-relaxed text-black/60 max-w-2xl mb-8">
            A running visual log of images that inform how I think about
            products, culture and aesthetics
          </p>
          <a
            href="https://www.instagram.com/notmobo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-black hover:opacity-60 transition-opacity uppercase tracking-wider"
          >
            @notmobo <ExternalLink size={14} />
          </a>
        </motion.div>
      </section>

      {/* Full Instagram Feed */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Custom Instagram Grid - all posts */}
          <InstagramGrid />

          {/* Back to Home Link */}
          <div className="mt-16 pt-8 border-t-2 border-black">
            <a
              href="/"
              className="inline-block text-sm font-bold text-black hover:opacity-60 transition-opacity uppercase tracking-wider"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

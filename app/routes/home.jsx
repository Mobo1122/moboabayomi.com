import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import InstagramGrid from "../components/InstagramGrid";

const experience = [
  {
    company: "Law Business Research",
    role: "Business Development Associate",
    dates: "July 2024 – Present",
    impact: [
      "Driving revenue growth through strategic partnership development and senior stakeholder management.",
      "Collaborating cross-functionally with marketing, events, and production teams to deliver high-impact solutions.",
      "Managing end-to-end sales cycles for premium legal business intelligence products.",
    ],
  },
  {
    company: "Ivy Media",
    role: "Founder",
    dates: "Sept 2022 – May 2024",
    impact: [
      "Built and managed end-to-end partner relationships, focusing on brand asset creation and creative direction.",
      "Coordinated with internal teams to ensure seamless delivery of high-quality media projects.",
      "Developed a unique visual language for clients at the intersection of culture and commerce.",
    ],
  },
  {
    company: "City Storage Systems (CloudKitchens)",
    role: "Account Executive",
    dates: "Jan – Aug 2022",
    impact: [
      "Managed the full prospecting-to-close cycle, consistently exceeding aggressive sales targets.",
      "Onboarded and managed partner accounts, ensuring long-term success and platform adoption.",
      "Optimized sales workflows in a fast-paced, high-growth technology environment.",
    ],
  },
];

const apps = [
  {
    name: "THE DUGOUT",
    tagline: "Your Fantasy Premier League co-pilot.",
    description:
      "Import your FPL squad with nothing but a public Team ID, see it laid out on a chalkboard tactics pitch, and talk transfers with an AI that actually knows your players, budget, chips and rank — and explains the why in plain English. Web app and iOS, built end to end.",
    status: "Live",
    link: "https://dugoutfpl.com",
    linkLabel: "dugoutfpl.com",
  },
  {
    name: "RANK",
    tagline: "The social ranking party game.",
    description:
      "A playful social ranking party game for 4–8 friends, focused on prompts and conversation. Born from a desire to spark more meaningful (and hilarious) interactions at gatherings.",
    status: "On the shelf",
  },
];

export function meta() {
  const title = "Mobo Abayomi — Creative generalist";
  const description =
    "Mobo Abayomi sits at the intersection of business, culture and technology — closing partnerships and building practical products, including The Dugout, an AI co-pilot for Fantasy Premier League.";
  const image =
    "https://moboabayomi.com/og.jpg";
  const url = "https://moboabayomi.com/";

  return [
    { title },
    { name: "description", content: description },
    { name: "author", content: "Mobo Abayomi" },
    { tagName: "link", rel: "canonical", href: url },

    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Mobo Abayomi" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Mobo Abayomi" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

export default function HomePage() {
  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden bg-[#f5f5f0]">
      {/* Hero Section - Editorial Style */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32 bg-[#f5f5f0] relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl w-full relative"
        >
          <div className="flex items-center justify-between mb-12">
            <div className="text-[10px] uppercase tracking-[0.4em] text-black/30 font-medium">
              Creative generalist
            </div>
            <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden">
              <img
                src="/portrait.jpg"
                alt="Mobo"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="relative mb-20">
            <h1 className="text-[clamp(3rem,12vw,14rem)] font-black leading-[0.9] tracking-tight text-black">
              MIXING
            </h1>
            <h1 className="text-[clamp(3rem,12vw,14rem)] font-black leading-[0.9] tracking-tight text-black">
              DEAL MAKING
            </h1>
            <h1 className="text-[clamp(3rem,12vw,14rem)] font-black leading-[0.9] tracking-tight text-black">
              WITH PRODUCT
            </h1>
            <div className="flex items-baseline gap-6">
              <h1 className="text-[clamp(3rem,12vw,14rem)] font-black leading-[0.9] tracking-tight text-black">
                MANAGEMENT
              </h1>
            </div>
          </div>

          <div className="mt-20 max-w-xl">
            <p className="text-lg leading-relaxed text-black/50 mb-12 font-light">
              Mobo is a creative generalist who sits at the intersection of
              business, culture, and technology. He closes partnerships and
              builds practical products that reflect that mix, with a focus on
              clear value and grounded execution.
            </p>
            <div className="flex gap-6">
              <button
                onClick={scrollToContact}
                className="px-10 py-4 bg-black text-[#f5f5f0] font-bold text-xs uppercase tracking-[0.2em] hover:opacity-80 transition-opacity"
              >
                Hire me
              </button>
              <button
                onClick={scrollToContact}
                className="px-10 py-4 border-2 border-black text-black font-bold text-xs uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
              >
                Collaborate
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section - Editorial with Left Borders */}
      <section className="py-40 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32">
            <div className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6 font-medium">
              Professional journey
            </div>
            <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-black leading-[0.9] tracking-tight">
              EXPERIENCE
            </h2>
          </div>

          <div className="space-y-24">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-l-2 border-white/20 pl-12"
              >
                <div className="grid md:grid-cols-[240px_1fr] gap-12 mb-10">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium">
                    {item.dates}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-medium">
                      {item.company}
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tight mb-10">
                      {item.role}
                    </h3>
                  </div>
                </div>
                <div className="md:ml-[252px]">
                  <ul className="space-y-6 max-w-3xl">
                    {item.impact.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-6 text-white/60 leading-relaxed text-base font-light"
                      >
                        <span className="text-white mt-1.5 shrink-0">—</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Section - Light Background */}
      <section className="py-40 px-6 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32">
            <div className="text-[10px] uppercase tracking-[0.4em] text-black/30 mb-6 font-medium">
              Solo projects
            </div>
            <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-black leading-[0.9] tracking-tight text-black">
              APPS
            </h2>
          </div>

          <div className="space-y-40">
            {apps.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-l-2 border-black/20 pl-12"
              >
                <div className="grid md:grid-cols-2 gap-20 items-start">
                  <div>
                    <div
                      className={`text-[10px] uppercase tracking-[0.3em] mb-8 font-medium flex items-center gap-2 ${
                        app.link ? "text-black" : "text-black/30"
                      }`}
                    >
                      {app.link && (
                        <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                      )}
                      {app.status}
                    </div>
                    <h3 className="text-6xl md:text-8xl font-black tracking-tight text-black mb-6">
                      {app.name}
                    </h3>
                    <p className="text-xl font-bold text-black/60 mb-6">
                      {app.tagline}
                    </p>
                  </div>
                  <div className="space-y-8">
                    <p className="text-base leading-relaxed text-black/50 font-light">
                      {app.description}
                    </p>
                    {app.link && (
                      <a
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-black font-bold hover:opacity-60 transition-opacity text-xs uppercase tracking-[0.2em]"
                      >
                        {app.linkLabel ?? "Visit site"}{" "}
                        <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Moodboard Section */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="text-[10px] uppercase tracking-[0.4em] text-black/30 mb-6 font-medium">
              Visual references
            </div>
            <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-black leading-[0.9] tracking-tight text-black mb-10">
              MOODBOARD
            </h2>
            <p className="text-base text-black/50 max-w-2xl font-light leading-relaxed">
              A running visual log of images that inform how I think about
              products, culture and aesthetics
            </p>
          </div>

          {/* Custom Instagram Grid - 12 posts for homepage */}
          <InstagramGrid />

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-black/10 pt-12">
            <a
              href="/moodboard"
              className="text-xs font-bold text-black hover:opacity-60 transition-opacity uppercase tracking-[0.2em] flex items-center gap-2"
            >
              View full moodboard <ArrowRight size={16} />
            </a>
            <a
              href="https://www.instagram.com/notmobo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-black/30 hover:opacity-60 transition-opacity flex items-center gap-2 uppercase tracking-[0.2em]"
            >
              @notmobo <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-48 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-12 font-medium">
              Get in touch
            </div>
            <h2 className="text-[clamp(2.5rem,10vw,10rem)] font-black leading-[0.9] tracking-tight mb-16">
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              TOGETHER
            </h2>
            <p className="text-lg text-white/50 mb-20 max-w-2xl font-light leading-relaxed">
              Open to roles, advisory work and interesting collaborations at the
              edge of business, culture and technology.
            </p>
            <a
              href="mailto:mobo.abayomi@gmail.com"
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] hover:opacity-80 transition-opacity"
            >
              Email me <Mail size={18} />
            </a>

            <div className="mt-32 pt-16 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                <a
                  href="https://www.linkedin.com/in/moboa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/30 hover:opacity-60 transition-opacity uppercase tracking-[0.2em]"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/mobo.abayomi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/30 hover:opacity-60 transition-opacity uppercase tracking-[0.2em]"
                >
                  Instagram — @mobo.abayomi
                </a>
                <a
                  href="https://www.instagram.com/notmobo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/30 hover:opacity-60 transition-opacity uppercase tracking-[0.2em]"
                >
                  Moodboard — @notmobo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
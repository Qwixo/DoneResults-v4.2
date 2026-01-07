import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GlowingEffect } from "./ui/glowing-effect";
import { ArrowRight } from "lucide-react";

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id="final-cta"
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Bigger, Closer Warning Box */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mb-10 bg-yellow-50 border border-yellow-200 rounded-lg px-6 py-10 text-center shadow-sm"
          >
            <div className="flex flex-col items-center text-gray-800">
              <p className="text-2xl font-bold  mb-6">
              You’re busy. So are we.
              </p>
              <div className="space-y-3 text-base sm:text-lg">
                <p>
                That’s why we only take on a few hand-picked clients at a time — to keep results strong, fast, and GUARANTEED.
                </p>
                <p><em>The kind we can actually help grow.</em></p>
                <p className="font-semibold">
                  <span>Right now, </span>
                  <span className="text-teal-600 font-bold italic">
                    one spot is open.
                  </span>
                </p>

              </div>
            </div>
          </motion.div>

          {/* CTA Frosted Card */}
          <div className="relative backdrop-blur-sm bg-white/80 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Does This Sound Like Something That Could Help You Grow?
            </h2>

            <div className="mb-6 text-center">
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-300"></div>
                <a
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Nftb9ChvZAt0emu09Jlpy8yb75wFGHuHhE3G_ZJLs5GxGKeotkde5FL3yrUW6JZT5TtQbDr95?gv=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold bg-teal-500 hover:bg-teal-600 rounded-full shadow-md transition-all duration-300 text-lg hover:scale-[1.03] after:content-[''] after:absolute after:inset-0 after:rounded-full after:ring-2 after:ring-teal-500/30 after:animate-ping"
                >
                  Book a Free Strategy Call
                  <ArrowRight size={20} />
                </a>
                <GlowingEffect disabled={false} glow={true} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

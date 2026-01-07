import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const dotsHighlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const dotsHighlight = dotsHighlightRef.current;

    if (!hero || !dotsHighlight) return;

    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        dotsHighlight.style.setProperty('--mouse-x', `${mouseX}px`);
        dotsHighlight.style.setProperty('--mouse-y', `${mouseY}px`);
        dotsHighlight.style.opacity = '1';

        rafId = null;
      });
    };

    const handleMouseLeave = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      if (dotsHighlight) dotsHighlight.style.opacity = '0';
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-dots"></div>
        <div className="hero-dots-highlight" ref={dotsHighlightRef}></div>
        <div className="hero-dots-fade"></div>
      </div>

      <div className="hero-content">
        <h1>
          <motion.span
            className="hero-heading-part"
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            Want More Clients?
          </motion.span>
          <br />
          <motion.span
            className="hero-heading-part highlight-guaranteed glitch"
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3, ease: 'easeOut' }}
          >
            Guaranteed.
          </motion.span>
          <br />
          <motion.span
            className="hero-heading-part"
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3, ease: 'easeOut' }}
          >
            Or You Don't Pay.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3, ease: 'easeOut' }}
        >
          We leverage AI-powered cold email to deliver warm, high-intent leads. If we fail, you don't pay.
        </motion.p>

        <motion.a
          href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Nftb9ChvZAt0emu09Jlpy8yb75wFGHuHhE3G_ZJLs5GxGKeotkde5FL3yrUW6JZT5TtQbDr95?gv=true"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3, ease: 'easeOut' }}
        >
          Book a Free Strategy Call
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;

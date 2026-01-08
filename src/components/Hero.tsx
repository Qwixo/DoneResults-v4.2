import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const dotsHighlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const dotsHighlight = dotsHighlightRef.current;

    if (!hero || !dotsHighlight) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    let rafId: number | null = null;
    let cachedRect: DOMRect | null = null;

    const updateRect = () => {
      if (hero) cachedRect = hero.getBoundingClientRect();
    };

    updateRect();

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        if (!cachedRect) updateRect();
        if (!cachedRect) {
          rafId = null;
          return;
        }

        const mouseX = e.clientX - cachedRect.left;
        const mouseY = e.clientY - cachedRect.top;

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

    const handleResize = () => {
      updateRect();
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
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
          <span className="hero-heading-part hero-animate-1">
            B2B Lead Generation Agency
          </span>
          <br />
          <span className="hero-heading-part highlight-guaranteed glitch hero-animate-2">
            Guaranteed Results
          </span>
          <br />
          <span className="hero-heading-part hero-animate-3">
            Or You Don't Pay.
          </span>
        </h1>

        <p className="hero-animate-4">
          We're a lead generation agency that delivers qualified B2B meetings through AI-powered cold email outreach. If we fail, you don't pay.
        </p>

        <a
          href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Nftb9ChvZAt0emu09Jlpy8yb75wFGHuHhE3G_ZJLs5GxGKeotkde5FL3yrUW6JZT5TtQbDr95?gv=true"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button hero-animate-5"
        >
          Book a Free Strategy Call
        </a>
      </div>
    </section>
  );
};

export default Hero;

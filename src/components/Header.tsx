import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;
    let lastScrollTop = 0;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop !== lastScrollTop) {
          setIsVisible(scrollTop > 50);
          lastScrollTop = scrollTop;
        }

        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="main-header"
      className={`bg-white text-gray-800 transition-all duration-300 ${isVisible ? 'visible' : ''}`}
    >
      <div className="container">
        <div className="logo">
          <img
            src="/assets/images/logo-header.png"
            alt="DoneResults company logo"
            width="206"
            height="30"
          />
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Nftb9ChvZAt0emu09Jlpy8yb75wFGHuHhE3G_ZJLs5GxGKeotkde5FL3yrUW6JZT5TtQbDr95?gv=true"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta"
              >
                Book a Call
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

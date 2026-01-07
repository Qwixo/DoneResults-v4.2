import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center gap-4 text-center">
        <img
          src="https://i.imgur.com/kpHtGKX.png"
          alt="DoneResults Logo"
          className="h-12 md:h-16"
        />

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm md:text-base">
          <a
            href="/blog-home.html"
            className="hover:underline text-white"
          >
            Blog
          </a>

          <a
            href="/privacy.html"
            className="hover:underline text-white"
          >
            Privacy
          </a>

          <a
            href="/terms.html"
            className="hover:underline text-white"
          >
            Terms
          </a>

          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Nftb9ChvZAt0emu09Jlpy8yb75wFGHuHhE3G_ZJLs5GxGKeotkde5FL3yrUW6JZT5TtQbDr95?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white"
          >
            Book a call
          </a>
        </div>

        <p className="text-sm md:text-base">
          <a
            href="mailto:jan@doneresults.com"
            className="hover:underline text-white"
          >
            jan@doneresults.com
          </a>{" "}
          | DoneResults © 2026 | Partner{" "}
          <a
            href="https://www.benzomarketing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white"
          >
            Benzo Marketing
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

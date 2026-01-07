import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const MarketingComparison: React.FC = () => {
  const buttonControls = useAnimation();
  const buttonRef = useRef<HTMLAnchorElement>(null);

  // Animation for the button shine effect
  useEffect(() => {
    const animateButton = async () => {
      while (true) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await buttonControls.start({
          background: [
            'linear-gradient(90deg, rgba(20, 184, 166, 1) 0%, rgba(20, 184, 166, 1) 100%)',
            'linear-gradient(90deg, rgba(20, 184, 166, 1) 0%, rgba(45, 212, 191, 1) 50%, rgba(20, 184, 166, 1) 100%)',
            'linear-gradient(90deg, rgba(20, 184, 166, 1) 0%, rgba(20, 184, 166, 1) 100%)',
          ],
          transition: { duration: 1.5, ease: "easeInOut" }
        });
      }
    };

    animateButton();
    return () => {
      buttonControls.stop();
    };
  }, [buttonControls]);

  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-12">
          <motion.p 
            className="text-lg text-gray-500 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Here is the truth:
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Most Companies Do Marketing All Wrong...
          </motion.h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-red-50 rounded-xl p-6 md:p-10 shadow-md text-red-700"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Most Companies</h3>
            <p className="mb-4 underline decoration-red-400 underline-offset-4">
              In 2025, the majority of companies still:
            </p>
            <ul className="space-y-2">
              <li>• Burn money with paid ads</li>
              <li>• Think social media will get clients</li>
              <li>• Reach out to leads one at a time</li>
              <li>• Land in spam when doing cold email</li>
              <li>• Send generic cold emails that no one opens</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-green-50 rounded-xl p-6 md:p-10 shadow-md text-green-700"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">The DoneResults Way</h3>
            <p className="mb-4 underline decoration-green-500 underline-offset-4">
              This is what the top 1% are doing — and it's working:
            </p>
            <ul className="space-y-2">
              <li>• Hire AI that always gets the job done</li>
              <li>• Direct outreach to decision-makers</li>
              <li>• Sends hundreds of emails daily</li>
              <li>• High deliverability with domain protection</li>
              <li>• Every email is "handcrafted" to resonate</li>
            </ul>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 rounded-md bg-teal-300/30 blur-sm animate-pulse"></div>
            <motion.a 
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Nftb9ChvZAt0emu09Jlpy8yb75wFGHuHhE3G_ZJLs5GxGKeotkde5FL3yrUW6JZT5TtQbDr95?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              ref={buttonRef}
              animate={buttonControls}
              className="relative inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-md transition duration-200 shadow-md"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Let's Talk
            </motion.a>
          </div>
          <p className="text-sm text-gray-600 mt-2 font-medium">
            We choose our clients. When we're full, we're full.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketingComparison;

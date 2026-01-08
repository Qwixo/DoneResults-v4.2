import React from 'react';
import { motion } from 'framer-motion';

const Guarantee: React.FC = () => {
  return (
    <section
      id="guarantee"
      className="py-16 bg-white text-gray-900" // ✅ FORCE light bg and text
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Guaranteed Lead Generation. Or You Don't Pay.
          </h2>

          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Unlike other lead generation agencies, we guarantee your results. If we don't book you warm, qualified leads, you don't pay our service fee.
            If that ever happens (and it hasn't yet), the only thing you'll cover are basic system fees.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;

import React from 'react';
import { motion } from 'framer-motion';

const SocialProof: React.FC = () => {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-6">
            Trusted B2B Lead Generation Agency
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">B2B Clients Served</div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-200"></div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Meetings Booked</div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-200"></div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">20+</div>
              <div className="text-sm text-gray-600">Industries Served</div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-200"></div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-500">100%</div>
              <div className="text-sm text-gray-600">Results Guaranteed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;

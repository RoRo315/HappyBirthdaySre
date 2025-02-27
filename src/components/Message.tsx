import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Sre,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          My love, I thank you for everything. Literally everything. 
          Thank you for existing. I just wanted to tell you that you are loved a lot by me, and will always be.
          I am very happy being yours sreye. So damn happy. I hope you are happy too. 
          My precious love, my darling wifey I look forward to spending entirety of my life with you, being your ro.
          I promise to always take care of you, love you and protect you.
          Promise me that you will drink water well and go for health checkup soon.
          Pomme, you are very very special to me...
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          ..and on your special day, I wish you A VERRYYYY HAPPPYYY BIRRTTHHDAAYYYYYY!!! 
          I LOVEEE YOUUUUU 🫂🫂🫂🫂
        </p>
      </motion.div>
    </div>
  );
};

export default Message;
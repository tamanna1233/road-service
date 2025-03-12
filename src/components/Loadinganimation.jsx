import { motion } from "framer-motion";

export default function LoadingAnimation() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className="w-4 h-4 bg-blue-500 rounded-full"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2, // Staggered animation
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

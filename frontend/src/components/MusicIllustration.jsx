import { motion } from "framer-motion"

export function MusicIllustration() {
  return (
    <motion.img
      src="/placeholder.svg?height=400&width=400"
      alt="Music Analytics Illustration"
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        duration: 0.6,
        y: {
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      }}
    />
  )
}


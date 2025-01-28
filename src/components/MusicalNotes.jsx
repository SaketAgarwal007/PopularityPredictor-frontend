import { motion } from "framer-motion"
import { Music } from "lucide-react"

export default function MusicalNotes() {
  return (
    <div className="musical-notes">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="note"
          initial={{ opacity: 0, y: 20, x: i * 15 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-20, -40],
            x: [i * 15, i * 20],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        >
          <Music size={14} />
        </motion.div>
      ))}
    </div>
  )
}


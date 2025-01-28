import { motion } from "framer-motion"
import { Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <motion.footer
      className="bg-[#1E1E1E] border-t border-gray-800 mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">© 2024 Music Analytics. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}


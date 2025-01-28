import { Link } from "react-router-dom"
import { Music } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header
      className="bg-[#1E1E1E] border-b border-gray-800"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Music className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-white">Music Analytics</span>
          </Link>
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Dashboard
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}


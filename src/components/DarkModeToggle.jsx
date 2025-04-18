import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <motion.button
            onClick={toggleDarkMode}
            className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {isDarkMode ? (
                <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
                <Moon className="w-6 h-6 text-gray-700" />
            )}
        </motion.button>
    );
};

export default DarkModeToggle; 
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import { useDarkMode } from './context/DarkModeContext';

export const RootLayout = () => {
    const { isDarkMode } = useDarkMode();

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-black text-amber-50' : 'bg-white text-gray-900'}`} >
            <Navbar />
            {/* <main className="pt-16"> */}
                <Outlet />
            {/* </main> */}
            <Footer />
        </div>
    )
}

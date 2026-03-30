'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Particles } from '@/components/magicui/particles';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    
    const handleScroll = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('touchstart', handleTouchStart);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="relative sticky top-0 z-50 w-full overflow-hidden border-b border-white/10 bg-[#030508]/80 shadow-[0_4px_30px_-8px_rgba(0,0,0,0.85)] backdrop-blur-md">
      <Suspense fallback={null}>
        <Particles
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.35]"
          quantity={28}
          color="#94a3b8"
          size={0.45}
          ease={85}
          staticity={55}
        />
      </Suspense>
      <div className="relative z-10 mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/home/hosca.png" width={48} height={48} alt="Logo" className="h-12 w-auto object-contain rounded-full"/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">HOSCA</span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-800/50 transition-all duration-300"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 17 14">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? '' : 'hidden'}`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-800 rounded-lg text-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent"
              style={{ backgroundColor: isMobileMenuOpen ? '#111827' : 'transparent' }}>
            
            <li>
              <Link href="/" className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 hover:text-blue-400 relative group transition-colors duration-300">
                Home
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 md:block hidden"></span>
              </Link>
            </li>
            
            <li>
              <Link href="/club" className="block py-2 px-3 text-white rounded hover:bg-gray-800/50 md:hover:bg-transparent md:p-0 hover:text-blue-400 relative group transition-colors duration-300">
                Clubs
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 md:block hidden"></span>
              </Link>
            </li>

            <li>
              <Link href="/committee/Developers" className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 hover:text-blue-400 relative group transition-colors duration-300">
                Committee
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 md:block hidden"></span>
              </Link>
            </li>

            <li>
              <Link href="/achievement" className="block py-2 px-3 text-white rounded hover:bg-gray-800/50 md:hover:bg-transparent md:p-0 hover:text-blue-400 relative group transition-colors duration-300">
                Achievements
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 md:block hidden"></span>
              </Link>
            </li>

            <li>
              <Link href="/gallery" className="block py-2 px-3 text-white rounded hover:bg-gray-800/50 md:hover:bg-transparent md:p-0 hover:text-blue-400 relative group transition-colors duration-300">
                Gallery
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 md:block hidden"></span>
              </Link>
            </li>

            <li>
              <Link href="/events" className="block py-2 px-3 text-white rounded hover:bg-gray-800/50 md:hover:bg-transparent md:p-0 hover:text-blue-400 relative group transition-colors duration-300">
                Events
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 md:block hidden"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

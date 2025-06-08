'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Navbar as ResizableNavbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
} from '@/components/ui/resizable-navbar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommitteeDropdownOpen, setIsCommitteeDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Clubs', link: '/club' },
    { name: 'Committee', link: '#', isDropdown: true },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Events', link: '/events' },
  ];

  const committeeItems = [
    { name: 'HOSCA Committee', link: '/committee/hoscaa' },
    { name: 'Gymkhana Committee', link: '/committee/gymkhana' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCommitteeDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes (you might want to add a router listener)
  const handleMobileNavClick = (hasDropdown = false) => {
    if (!hasDropdown) {
      setIsMenuOpen(false);
    }
  };

  const handleCommitteeDropdownToggle = () => {
    setIsCommitteeDropdownOpen(!isCommitteeDropdownOpen);
  };

  const handleCommitteeItemClick = () => {
    setIsCommitteeDropdownOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <ResizableNavbar className="!top-0">
      {/* Desktop Navigation */}
      <NavBody className="!min-w-full bg-gradient-to-r from-red-700 via-blue-400 to-gray-800 dark:from-gray-900 dark:via-red-600 dark:to-gray-800">
        <div className="flex items-center justify-between w-full">
          <NavbarLogo>
            <Image
              src="/Hosca_logo.png"
              alt="HOSCA Logo"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
            <span className="text-2xl font-bold text-white">HOSCA</span>
          </NavbarLogo>

          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              item.isDropdown ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={handleCommitteeDropdownToggle}
                    className="flex items-center px-4 py-2 text-white hover:text-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md"
                    aria-expanded={isCommitteeDropdownOpen ? "true" : "false"}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        isCommitteeDropdownOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isCommitteeDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-white/95 backdrop-blur-sm ring-1 ring-black ring-opacity-5 z-50 transform transition-all duration-200 ease-out">
                      <div className="py-2">
                        {committeeItems.map((subItem) => (
                          <Link
                            key={subItem.link}
                            href={subItem.link}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                            onClick={() => setIsCommitteeDropdownOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.link}
                  href={item.link}
                  className="px-4 py-2 text-white hover:text-gray-100 transition-colors duration-200 rounded-md hover:bg-white/10"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className="bg-gradient-to-r from-gray-500 via-red-400 to-gray-500 dark:from-gray-800 dark:via-red-600 dark:to-gray-800">
        <MobileNavHeader>
          <NavbarLogo>
            <Image
              src="/Hosca_logo.png"
              alt="HOSCA Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <span className="font-medium text-white">HOSCA</span>
          </NavbarLogo>
          <MobileNavToggle 
            isOpen={isMenuOpen} 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <div className="flex flex-col space-y-1 w-full">
            {navItems.map((item) => (
              item.isDropdown ? (
                <div key={item.name} className="space-y-1">
                  <button
                    onClick={handleCommitteeDropdownToggle}
                    className="flex items-center justify-between w-full text-left px-4 py-3 text-white hover:text-gray-100 hover:bg-white/10 transition-colors duration-150 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    aria-expanded={isCommitteeDropdownOpen ? "true" : "false"}
                  >
                    <span>{item.name}</span>
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isCommitteeDropdownOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isCommitteeDropdownOpen && (
                    <div className="pl-4 space-y-1 border-l-2 border-red-200 ml-4">
                      {committeeItems.map((subItem) => (
                        <Link
                          key={subItem.link}
                          href={subItem.link}
                          className="block px-4 py-2 text-white hover:text-gray-100 hover:bg-white/10 transition-colors duration-150 font-medium rounded-md"
                          onClick={handleCommitteeItemClick}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.link}
                  href={item.link}
                  className="block px-4 py-3 text-white hover:text-gray-100 hover:bg-white/10 transition-colors duration-150 font-medium rounded-md"
                  onClick={() => handleMobileNavClick()}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
};

export default Navbar; 
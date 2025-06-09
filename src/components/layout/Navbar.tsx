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
    { name: 'Gymkhana Committee', link: '/committee/gymkhana' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Events', link: '/events' },
  ];

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
      <div className="hidden lg:flex w-full">
        <NavBody className="!min-w-full bg-gradient-to-r from-gray-900 to-gray-950 dark:from-gray-900 dark:via-red-600 dark:to-gray-800">
          <div className="flex items-center justify-between w-full">
            <NavbarLogo>
              <Image
                src="/Hosca_logo.png"
                alt="HOSCA Logo"
                width={50}
                height={50}
                className="object-contain bg-amber-500 rounded-4xl"
                priority
              />
              <span className="text-2xl font-bold text-white">HOSCA</span>
            </NavbarLogo>

            <div className="hidden lg:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className="px-4 py-2 text-white hover:text-gray-100 transition-colors duration-200 rounded-md hover:bg-white/10"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </NavBody>
      </div>
      <div className="flex lg:hidden w-full">
        <MobileNav className="bg-gradient-to-r from-gray-900 to-gray-950 dark:from-gray-800 dark:via-red-600 dark:to-gray-800">
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
                <Link
                  key={item.link}
                  href={item.link}
                  className="block px-4 py-3 text-black hover:text-red-500 hover:bg-white/10 transition-colors duration-150 font-medium rounded-md"
                  onClick={() => handleMobileNavClick()}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </div>
    </ResizableNavbar>
  );
};

export default Navbar; 
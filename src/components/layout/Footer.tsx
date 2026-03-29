'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Clubs', href: '/club' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Events', href: '/events' },
    { name: 'Gymkhana Committee', href: '/committee/Developers' },
    { name: 'IIT Patna', href: 'https://www.iitp.ac.in/', external: true },
  ];

  const socialLinks = {
    hosca: [
      { icon: FaFacebook, href: 'https://www.facebook.com/hosca.iitp', label: 'HOSCA Facebook' },
      { icon: FaInstagram, href: 'https://www.instagram.com/iitpatna_hosca/', label: 'HOSCA Instagram' },
      { icon: FaYoutube, href: 'https://www.youtube.com/user/CULTatIITP', label: 'HOSCA YouTube' },
    ],
    iitp: [
      { icon: FaFacebook, href: 'https://www.facebook.com/iitp.ac.in/', label: 'IITP Facebook' },
      { icon: FaTwitter, href: 'https://twitter.com/IITPAT', label: 'IITP Twitter' },
      { icon: FaInstagram, href: 'https://www.instagram.com/iit_patna_official/', label: 'IITP Instagram' },
      { icon: FaLinkedin, href: 'https://www.linkedin.com/school/indian-institute-of-technology-patna/', label: 'IITP LinkedIn' },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white">
                <Image
                  src="/home/hosca.png"
                  alt="HOSCA Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-xl font-bold">
                House of <span className="text-red-400">Socio-Cultural</span> Affairs
              </h3>
            </div>
            <div className="flex space-x-4">
              {socialLinks.hosca.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-400">Quick Links</h3>
            <ul className="grid grid-cols-1 gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-red-400">Indian Institute of Technology, Patna</h3>
              <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0811345297775!2d84.84899121501635!3d25.535674183739797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954a4ab%3A0x6ce8f1b9fc2aa02a!2sIndian%20Institute%20of%20Technology%2C%20Patna%20(IIT%20Patna)!5e0!3m2!1sen!2sin!4v1667537698067!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="flex space-x-4">
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          © {new Date().getFullYear()} Hosca IIT Patna. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
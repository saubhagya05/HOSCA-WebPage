'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Particles } from '@/components/magicui/particles';

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
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030508] text-zinc-100">
      <Suspense fallback={null}>
        <Particles
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.25]"
          quantity={36}
          color="#94a3b8"
          size={0.45}
          ease={80}
          staticity={50}
        />
      </Suspense>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-zinc-900/80 ring-2 ring-white/15">
                <Image
                  src="/home/hosca.png"
                  alt="HOSCA Logo"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <h3 className="text-xl font-bold text-zinc-100">
                House of <span className="text-amber-300/95">Socio-Cultural</span> Affairs
              </h3>
            </div>
            <div className="flex space-x-4">
              {socialLinks.hosca.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 transition-colors duration-200 hover:text-sky-400"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wide text-amber-300/90">
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-zinc-500 transition-colors duration-200 hover:text-zinc-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold tracking-wide text-amber-300/90">
                IIT Patna Map
              </h3>
              <p className="mb-3 text-sm text-zinc-500">
                Indian Institute of Technology, Patna
              </p>
              <div className="overflow-hidden rounded-lg shadow-[0_0_40px_-10px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0811345297775!2d84.84899121501635!3d25.535674183739797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954a4ab%3A0x6ce8f1b9fc2aa02a!2sIndian%20Institute%20of%20Technology%2C%20Patna%20(IIT%20Patna)!5e0!3m2!1sen!2sin!4v1667537698067!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, filter: 'grayscale(0.25) brightness(0.92)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="IIT Patna on Google Maps"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/5 bg-black/40 py-4 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Hosca IIT Patna. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
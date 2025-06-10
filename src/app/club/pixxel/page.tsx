'use client';

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function PixxelPage() {
  return (
    <div className="relative min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <BackgroundBeams className="absolute inset-0" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16 mt-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Pixxel</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            The Photography and Videography Club of IIT Patna - Capturing moments, creating memories.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* About Section */}
          <CardContainer className="w-full">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">About Pixxel</h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Pixxel is IIT Patna's own photography and videography club. It is responsible for developing interest in photography and videography and various editing related to it among the students of IITP and also creating a platform where they can showcase their talent and imagination.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">What We Do</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Photography workshops and training</li>
                  <li>Videography projects</li>
                  <li>Photo exhibitions</li>
                  <li>Event coverage</li>
                  <li>Photo walks and competitions</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">Our Events</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Photo Exhibitions</li>
                  <li>Photography Workshops</li>
                  <li>Photo Walks</li>
                  <li>Photo Competitions</li>
                  <li>Videography Projects</li>
                </ul>
              </div>
            </CardBody>
          </CardContainer>

          {/* Image Gallery */}
          <CardContainer className="w-full">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                <img src="/club/Pixxel.jpeg" alt="Pixxel Photography" className="rounded-lg w-full h-48 object-cover" />
                <img src="/club/Pixxel.jpeg" alt="Pixxel Workshop" className="rounded-lg w-full h-48 object-cover" />
                <img src="/club/Pixxel.jpeg" alt="Pixxel Event" className="rounded-lg w-full h-48 object-cover" />
                <img src="/club/Pixxel.jpeg" alt="Pixxel Team" className="rounded-lg w-full h-48 object-cover" />
              </div>
            </CardBody>
          </CardContainer>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://facebook.com/hosca.iitp"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/hosca_iitp"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com/user/CULTatIITP"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#FF0000] hover:text-white transition-colors duration-300"
            aria-label="YouTube"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
} 
"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ImageGrid } from "@/components/ui/image-grid";
import Image from "next/image";

interface ClubMember {
  id: number;
  name: string;
  position: string;
  imageUrl?: string;
  email?: string;
  linkedinUrl?: string;
}

const PixxelMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Kondaveti Koushik',
    position: 'Coordinator',
    email: 'koushik_2301me25@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/kondaveti-koushik-83631a285/',
    imageUrl: '/Coordinators/Pixxel/koushik.jpg',
  },
  {
    id: 2,
    name: 'Shreyash M',
    position: 'Coordinator',
    email: 'shreyash_2301mm16@iitp.ac.in',
    linkedinUrl: '#',
    imageUrl: '/Coordinators/Pixxel/Shreyash.jpg',
  },
  {
    id: 3,
    name: 'Lochan Bhaskaruni',
    position: 'Coordinator',
    email: 'lochan_2301me28@iitp.ac.in',
    linkedinUrl: 'http://www.linkedin.com/in/lochan-bhaskaruni-10176b283',
    imageUrl: '/Coordinators/Pixxel/Lochan.jpg',
  },
  {
    id: 4,
    name: 'Charan Ravipati',
    position: 'Sub-Coordinator',
    email: 'pixxel_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/charan-ravipati-421982332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Pixxel/Charan.png',
  },
  {
    id: 5,
    name: 'Kalpit Chaudhary',
    position: 'Sub-Coordinator',
    email: 'pixxel_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/kalpit-chaudhary-946b10271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Pixxel/KalpitChaudhary.jpg',
  },
  {
    id: 6,
    name: 'K Yashwanth Varma',
    position: 'Sub-Coordinator',
    email: 'pixxel_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/k-yashwanth-varma-50a54a320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Pixxel/KYashwanthVarma.jpg',
  },
  {
    id: 7,
    name: 'Cheella Keerthana',
    position: 'Sub-Coordinator',
    email: 'pixxel_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/keerthana-cheella-27a114333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Pixxel/CheellaKeerthana.jpg',
  },
  {
    id: 8,
    name: 'Priyanshu Sharma',
    position: 'Sub-Coordinator',
    email: 'pixxel_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/priyanshu-sharma-999740348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Pixxel/PriyanshuSharma.jpg',
  },
  {
    id: 9,
    name: 'Vuyyala Sai Hemanth Goud',
    position: 'Sub-Coordinator',
    email: 'pixxel_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/sai-hemanth-vuyyala-579b4536a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    imageUrl: '/SubCords/Pixxel/Vuyyala.JPG',
  }
];

export default function PixxelPage() {
  const renderMemberCard = (member: ClubMember) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-[320px] h-[520px]">
        <CardBody className="bg-gray-400 relative group/card border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white bg-white flex items-center justify-center">
            {member.imageUrl ? (
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={500} 
                height={500}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-white flex items-center justify-center">
                <span className="text-3xl font-bold text-orange-500 text-center px-2">
                  {member.name.charAt(0)}
                </span>
              </div>
            )}
            </div>
          </CardItem>

          <div className="flex justify-center gap-5 mt-4">
            <CardItem
              translateZ="50"
              className="flex items-center justify-center text-xl font-bold text-neutral-600 dark:text-white text-center"
            >
              {member.name}
            </CardItem>
          </div>

          <div className="flex justify-center gap-3 mt-4">
            {member.email && (
              <CardItem
                translateZ={20}
                as="a"
                href={`mailto:${member.email}`}
                className="p-2 rounded-full bg-white text-black hover:bg-red-500 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-4 h-4" />
              </CardItem>
            )}
            {member.linkedinUrl && (
              <CardItem
                translateZ={20}
                as="a"
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white text-black hover:bg-[#0077B5] hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </CardItem>
            )}
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
  return (
    <div className="relative min-h-screen w-full bg-[url('/club/aria_background.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/[0.6]"></div>
      <BackgroundBeams className="absolute inset-0" />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
            <Image
              src="/ClubLogo/Pixxel.jpeg"
              alt="Pixxel Photography Society"
              width={384} 
              height={384} 
              className="rounded-2xl shadow-2xl border border-white/[0.1] object-cover"
            />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Pixxel
            </h1>
            <p className="text-lg md:text-xl text-black max-w-2xl mx-auto lg:mx-0">
              The Photography and Videography Club of IIT Patna - Capturing
              moments, creating memories.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="w-full">
            <div className="border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">
                About Pixxel
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Pixxel is IIT Patna&apos;s own photography and videography club. It
                is responsible for developing interest in photography and
                videography and various editing related to it among the students
                of IITP and also creating a platform where they can showcase
                their talent and imagination.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  What We Do
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Photography workshops and training</li>
                  <li>Videography projects</li>
                  <li>Photo exhibitions</li>
                  <li>Event coverage</li>
                  <li>Photo walks and competitions</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  Our Events
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Tasveer</li>
                  <li>Shutter Island</li>
                  <li>Battle of keyframes </li>
                  <li>The Prestige cut</li>
                  <li>Behind the shutter</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <ImageGrid
              images={[
                "/ClubPages/Pixxel/1000062866.jpg",
                "/ClubPages/Pixxel/1000062867.jpg",
                "/ClubPages/Pixxel/1000125976.jpg",
                "/ClubPages/Pixxel/1000126585.jpg",
                "/ClubPages/Pixxel/1000145976.jpg",
                "/ClubPages/Pixxel/IMG_0228.JPG",
                "/ClubPages/Pixxel/IMG_20241213_154530.jpg",
                "/ClubPages/Pixxel/IMG_20250129_164756.jpg",
                "/ClubPages/Pixxel/IMG_20250327_023518.jpg",
                "/ClubPages/Pixxel/IMG-20240907-WA0008.jpg",
                "/ClubPages/Pixxel/IMG-20241213-WA0008.jpg",
                "/ClubPages/Pixxel/IMG-20241213-WA0015.jpg",
                "/ClubPages/Pixxel/IMG_0238.JPG",
                "/ClubPages/Pixxel/SAVE_20250327_023318.jpg",
              ]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>

        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mt-10 mb-12 text-blue-500">
            Our Team
          </h2>
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#4169E1] px-2 md:px-0">
            Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {PixxelMembers.slice(0, 3).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#4169E1] px-4 md:px-0">
            Sub Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {PixxelMembers.slice(3).map((member) => renderMemberCard(member))}
          </div>
        </section>
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://www.facebook.com/pixxeliitp/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/pixxel_iitp/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@PixxelIITP"
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
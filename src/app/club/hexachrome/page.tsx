"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaInstagram } from "react-icons/fa";
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

const HexachromeMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Chahat Mahajan',
    position: 'Coordinator',
    email: 'chahat_2301ai49@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/chahat-mahajan-b80767298/',
    imageUrl: '/Coordinators/HexaChrome/Chahat.jpg',
  },
  {
    id: 2,
    name: 'Keshav Mahansaria',
    position: 'Coordinator',
    email: 'keshav_2301cs23@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/keshav-mahansaria-66979229a',
    imageUrl: '/Coordinators/HexaChrome/Keshav.jpg',
  },
  {
    id: 3,
    name: 'Aryan Patil',
    position: 'Sub-Coordinator',
    email: 'hexachrome@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/aryan-patil-58393736a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/HexaChrome/AryanPatil.jpeg',
  },
  {
    id: 4,
    name: 'Akash Kota',
    position: 'Sub-Coordinator',
    email: 'hexachrome@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/akash-kota-a3538a323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/HexaChrome/Akash.jpg',
  },
  {
    id: 5,
    name: 'Hrijoy Sikdar',
    position: 'Sub-Coordinator',
    email: 'hexachrome@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/hrijoy-sikdar-780a28311',
    imageUrl: '/SubCords/HexaChrome/HrijoySikdar.webp',
  },
  {
    id: 6,
    name: 'Lavanya Bhadani',
    position: 'Sub-Coordinator',
    email: 'hexachrome@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/lavanya-bhadani-1834b1313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/HexaChrome/lavanya.jpg',
  },
  {
    id: 7,
    name: 'Vaibhav Dalmia',
    position: 'Sub-Coordinator',
    email: '',
    linkedinUrl: 'http://www.linkedin.com/in/vaibhav-dalmia-2b1b84325',
    imageUrl: '/SubCords/HexaChrome/VaibhavDalmia.jpg',
  }
];

export default function HexaChromePage() {
  const renderMemberCard = (member: ClubMember) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-[320px] h-[520px]">
        <CardBody className="bg-[#ADDAEA] text-black border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white bg-white flex items-center justify-center">
              {member.imageUrl ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={144}
                  height={144}
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
      <div className="absolute inset-0 bg-white/60"></div>
      <BackgroundBeams className="absolute inset-0" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/ClubLogo/Hexachrome.jpg"
                alt="Hexachrome"
                width={384}
                height={384}
                className="object-cover rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-400 mb-6">
              HexaChrome
            </h1>
            <p className="text-lg md:text-xl text-black max-w-2xl mx-auto lg:mx-0">
              Aims to provide a platform for students to learn and improve in
              solving puzzles such as Rubik&apos;s Cube, Cryptograms,
              Crosswords, Scrabble.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="w-full">
            <div className="border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8 ">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">
                About HexaChrome
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                The Hexachrome Club aims to provide a platform for students to
                learn and improve in solving puzzles such as Rubik&apos;s Cube,
                Cryptograms, Crosswords, Scrabble. It fosters a problem-solving
                mindset and builds a community of puzzle enthusiasts driven by
                logic, creativity, and speed.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  What We Do
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Sudo-Clash</li>
                  <li>Playing Games</li>
                  <li>Cryptogram learning workshops</li>
                  <li>Sudoku Solving sessions</li>
                  <li>Rubik&apos;s cube learning sessions</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  Our Events
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Escape Room</li>
                  <li>Sudoku Solving</li>
                  <li>Unscramble</li>
                  <li>Tambola Night</li>
                  <li>Cryptogram</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <ImageGrid
              images={[
                "/ClubPages/Hexachrome/IMG-20241028-WA0001.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0002.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0003.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0004.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0005.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0006.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0007.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0008.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0009.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0010.jpg",
                "/ClubPages/Hexachrome/IMG-20241028-WA0011.jpg",
                "/ClubPages/Hexachrome/IMG-20241019-WA0013.jpg",
                "/ClubPages/Hexachrome/IMG-20241018-WA0058.jpg",
                "/ClubPages/Hexachrome/IMG-20241018-WA0060.jpg",
                "/ClubPages/Hexachrome/IMG-20241018-WA0062.jpg",
                "/ClubPages/Hexachrome/IMG-20241018-WA0069.jpg",
                "/ClubPages/Hexachrome/IMG-20241018-WA0071.jpg",
                "/ClubPages/Hexachrome/IMG-20241018-WA0073.jpg",
                "/ClubPages/Hexachrome/IMG-20241018-WA0075.jpg",
                "/ClubPages/Hexachrome/IMG-20241018-WA0077.jpg",
              ]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>

        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E90FF]">
            Our Team
          </h2>
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#4169E1] px-2 md:px-0">
            Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {HexachromeMembers.slice(0, 2).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#4169E1] px-4 md:px-0">
            Sub Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:hidden lg:grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {HexachromeMembers.slice(2,5).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <div className="grid grid-cols-1 sm:hidden lg:grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto ">
            {HexachromeMembers.slice(5).map((member) =>
              renderMemberCard(member)
            )}
          </div>
            
            <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-10 max-w-6xl mx-auto">
            {HexachromeMembers.slice(2,4).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-10 max-w-6xl mx-auto ">
            {HexachromeMembers.slice(4,6).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <div className="hidden sm:grid sm:grid-cols-1 lg:hidden gap-10 max-w-6xl mx-auto ">
            {HexachromeMembers.slice(6).map((member) =>
              renderMemberCard(member)
            )}
          </div>

        </section>
        <div className="flex justify-center gap-6 mt-12">
          
          <a
            href="https://www.instagram.com/hexachrome_iitp/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
         
        </div>
      </div>
    </div>
  );
}
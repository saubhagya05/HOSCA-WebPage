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

const EpicureanMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Ananya Maldyar',
    position: 'Coordinator',
    email: 'ananya_2301ee06@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/ananya-maldyar-132505298/',
    imageUrl: '/Coordinators/Epicurean/ananya.jpg',
  },
  {
    id: 2,
    name: 'Shibanshu Soubhagya Das',
    position: 'Coordinator',
    email: 'shibanshu_2302gt08@iitp.ac.in',
    linkedinUrl: 'https://in.linkedin.com/in/shibanshu-soubhagya-das-46a5342b5',
    imageUrl: '/Coordinators/Epicurean/Shibhanshu.png',
  },
  {
    id: 3,
    name: 'Aditi Lohiya',
    position: 'Sub-Coordinator',
    email: 'culinary_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/aditi-lohiya-395532321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Epicurean/AditiLohiya.jpg',
  },
  {
    id: 4,
    name: 'Avi Bharti',
    position: 'Sub-Coordinator',
    email: 'culinary_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/avi-bharti-029b1833b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    imageUrl: '/SubCords/Epicurean/Avi.JPG',
  },
  {
    id: 5,
    name: 'Shailja Brijendra Mathuria',
    position: 'Sub-Coordinator',
    email: 'culinary_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/shailja-mathuria-739834312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/CndSubcords/Shailja.jpeg',
  },
  {
    id: 6,
    name: 'Krittika Das',
    position: 'Sub-Coordinator',
    email: 'culinary_club@iitp.ac.in',
    linkedinUrl: 'https://in.linkedin.com/in/krittika-das-4704b2327',
    imageUrl: '/SubCords/Epicurean/Kritika.jpg',
  },
  {
    id: 7,
    name: 'Kumari Shikha',
    position: 'Sub-Coordinator',
    email: 'culinary_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/kumari-shikha-a1506a327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Epicurean/KumariShikha.jpg',
  },
  {
    id: 8,
    name: 'Shashank Mishra',
    position: 'Sub-Coordinator',
    email: 'culinary_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/shashank-mishra-72b495326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Epicurean/Shashank.jpg',
  }
];

export default function EpicureanPage() {
  const renderMemberCard = (member: ClubMember, index: number) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-[320px] h-[520px]">
        <CardBody className="bg-[#E5AD01] text-black border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white bg-white flex items-center justify-center">
              {member.imageUrl ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority={index < 3}
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
      <div className="absolute inset-0 bg-white/[0.6]" />
      <BackgroundBeams className="absolute inset-0" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/ClubLogo/epicurean.png"
                alt="Epicurean"
                fill
                className="rounded-2xl shadow-2xl border border-white/[0.1] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-300 mb-6">Epicurean</h1>
            <p className="text-lg md:text-xl text-black max-w-2xl mx-auto lg:mx-0">
              The art of articulation and this is where team bonding is celebrated.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="w-full">
            <div className="border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">About Epicurean</h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Where flavors ignite curiosity and passion simmers with every stir.
                Epicurean isn’t just about food—it’s a journey of taste, technique, and togetherness.
                From spontaneous dorm recipes to exquisite culinary experiments, we celebrate the joy of creating and sharing.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">What We Do</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Learning new recipes and techniques</li>
                  <li>Bonding over shared meals</li>
                  <li>Celebrating the Joy of Cooking</li>
                  <li>Hands-On Cooking workshops</li>
                  <li>Exploring Culinary and Beverage Arts</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">Our Events</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Culinary Competitions</li>
                  <li>Mixology Events</li>
                  <li>Weekly Cooking Sessions</li>
                  <li>What&apos;s in the pot?</li>
                  <li>Cooking and Beverage Workshops</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <ImageGrid
              images={[
                "/ClubPages/Epicurean/IMG-20250126-WA0040.jpg",
                "/ClubPages/Epicurean/IMG-20250126-WA0042.jpg",
                "/ClubPages/Epicurean/IMG-20250126-WA0045.jpg",
                "/ClubPages/Epicurean/IMG-20250126-WA0046.jpg",
                "/ClubPages/Epicurean/IMG-20250126-WA0047.jpg",
                "/ClubPages/Epicurean/IMG-20250126-WA0049.jpg",
                "/ClubPages/Epicurean/IMG-20250126-WA0050.jpg",
                "/ClubPages/Epicurean/IMG-20250126-WA0051.jpg",
              ]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>

        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#FFDB58]">Our Team</h2>
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#4169E1] px-2 md:px-0">Coordinators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {EpicureanMembers.slice(0, 2).map((member, index) => renderMemberCard(member, index))}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#4169E1] px-4 md:px-0">Sub Coordinators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {EpicureanMembers.slice(2).map((member, index) => renderMemberCard(member, index + 2))}
          </div>
        </section>

        <div className="flex justify-center gap-6 mt-12">
         
          <a
            href="https://www.instagram.com/culinary_club_iitpatna/"
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
"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaFacebook, FaInstagram } from "react-icons/fa";
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

const VincetrokeMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Chiranjeeb Debata',
    position: 'Coordinator',
    email: 'chiranjeeb_2303me04@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/chiranjeeb-debata-a1a891295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/Coordinators/VinceTroke/Chiranjeeb.jpg',
  },
  {
    id: 2,
    name: 'Ishika Khanagwal',
    position: 'Coordinator',
    email: 'ishika_2301mc09@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/ishika-khanagwal-362432297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/Coordinators/VinceTroke/Ishika.jpg',
  },
  {
    id: 3,
    name: 'Tanvi Vasoya',
    position: 'Coordinator',
    email: 'tanvi_2301ce30@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/tanvi-vasoya-32732b298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/Coordinators/VinceTroke/Tanvi.jpg',
  },
  {
    id: 4,
    name: 'Aditi Lohiya',
    position: 'Sub-Coordinator',
    email: 'vincetroke_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/aditi-lohiya-395532321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Vincetroke/Aditi_Vincetroke.jpg',
  },
  {
    id: 5,
    name: 'Riddhesh Dalal',
    position: 'Sub-Coordinator',
    email: 'vincetroke_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/riddhesh-dalal-704664317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Vincetroke/Riddhesh.jpg',
  },
  {
    id: 6,
    name: 'Anand Kumar',
    position: 'Sub-Coordinator',
    email: 'vincetroke_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/anand-kumar-563523342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Vincetroke/Anand.jpg',
  },
  {
    id: 7,
    name: 'Aviral Pratap Singh',
    position: 'Sub-Coordinator',
    email: 'vincetroke_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/aviral-pratap-singh-a88977319/',
    imageUrl: '/SubCords/Vincetroke/Aviral.jpg',
  },
  {
    id: 8,
    name: 'Richa Chaudhary',
    position: 'Sub-Coordinator',
    email: 'vincetroke_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/richa-chaudhary-9a2877349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Vincetroke/Richa.jpg',
  }
];

export default function VincetrokePage() {
  const renderMemberCard = (member: ClubMember) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-[320px] h-[520px]">
        <CardBody className="bg-[#D2B48C] text-black border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white bg-white flex items-center justify-center">
              {member.imageUrl ? (
                <Image
                  fill
                  src={member.imageUrl}
                  alt={member.name}
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
                src="/ClubLogo/Vincetroke.jpg"
                alt="Art Society"
                
                width={384}
                height={384}
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border border-white/[0.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content Section - Right on desktop, bottom on mobile */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-400 mb-6"
              style={{ color: "#007C91" }}
            >
              Vincetroke
            </h1>
            <p className="text-lg md:text-xl text-black max-w-2xl mx-auto lg:mx-0">
              Let their imagination run wild and provides them with the sight to
              see things in a different way.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* About Section */}
          <div className="w-full">
            <div className="border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8 ">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">
                About Vincetroke
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Vincetroke is the fine arts club of IIT Patna. Vincetroke
                encourages practicing artists to express themselves, and their
                inner creativity through various visual art forms. The club
                provides an opportunity for the students to let their
                imagination run wild and provides the sight to see things in a
                different way.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  What We Do
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Charcoal Art</li>
                  <li>Live sketching</li>
                  <li>Wall and Canva paintings</li>
                  <li>Art and Origami sessions</li>
                  <li>Costume Design via Origami</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  Our Events
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Darpan</li>
                  <li>Chakra Bhav</li>
                  <li>Rang Tarang</li>
                  <li>Monochrome Painting</li>
                  <li>DrawVerse</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <ImageGrid
              images={[
                "/ClubPages/Vincetroke/im 1.jpg",
                "/ClubPages/Vincetroke/im 2.jpg",
                "/ClubPages/Vincetroke/im 3.jpg",
                "/ClubPages/Vincetroke/im 4.jpg",
                "/ClubPages/Vincetroke/im 5.jpg",
                "/ClubPages/Vincetroke/im 6.jpg",
                "/ClubPages/Vincetroke/im 7.jpg",
                "/ClubPages/Vincetroke/im 8.jpg",
              ]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>
        {/* Members Section */}

        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#207C9A]">
            Our Team
          </h2>
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#4169E1] px-2 md:px-0">
            Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:hidden lg:grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {VincetrokeMembers.slice(0, 3).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-10 max-w-6xl mx-auto">
            {VincetrokeMembers.slice(0, 2).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <div className="hidden sm:grid sm:grid-cols-1 lg:hidden gap-10 max-w-6xl mx-auto">
            {VincetrokeMembers.slice(2,3).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#4169E1] px-4 md:px-0">
            Sub Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:hidden lg:grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {VincetrokeMembers.slice(3,6).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <div className="grid grid-cols-1 sm:hidden lg:grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto ">
            {VincetrokeMembers.slice(6).map((member) =>
              renderMemberCard(member)
            )}
          </div>
            
            <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-10 max-w-6xl mx-auto">
            {VincetrokeMembers.slice(3,5).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-10 max-w-6xl mx-auto ">
            {VincetrokeMembers.slice(5,7).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <div className="hidden sm:grid sm:grid-cols-1 lg:hidden gap-10 max-w-6xl mx-auto ">
            {VincetrokeMembers.slice(7).map((member) =>
              renderMemberCard(member)
            )}
          </div>
        </section>

        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://www.facebook.com/vincetroke.iitp/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/vincetroke.iitp/"
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

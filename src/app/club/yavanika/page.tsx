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

const YavanikaMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Viraj Kulkarni ',
    position: 'Coordinator',
    email: 'viraj_2301mm25@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/viraj-kulkarni-097869312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    imageUrl: '/Coordinators/Yavanika/Viraj.JPG',
  },
  {
    id: 2,
    name: 'Kumari Nisha',
    position: 'Coordinator',
    email: 'kumari_2301ct13@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/kumari-nisha-3209b02a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/Coordinators/Yavanika/Nisha.jpeg',
  },
  {
    id: 3,
    name: 'Lalit Sen',
    position: 'Coordinator',
    email: 'lalit_2301ec59@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/Lalit-sen-73a2392a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    imageUrl: '/Coordinators/Yavanika/Lalit.jpg',
  },
  {
    id: 4,
    name: 'Yahya Dawoodi',
    position: 'Sub-Coordinator',
    email: 'drama_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/yahya-dawoodi-119dd39239/',
    imageUrl: '/SubCords/Yavanika/Yahya.jpg',
  },
  {
    id: 5,
    name: 'Ayush Kumar Gupta',
    position: 'Sub-Coordinator',
    email: 'drama_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/ayush-gupta-675549320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Yavanika/Ayush.png',
  },
  {
    id: 6,
    name: 'Priyadeep Jaiswal',
    position: 'Sub-Coordinator',
    email: 'drama_club@iitp.ac.in',
    linkedinUrl: 'http://www.linkedin.com/in/priyadeep-jaiswal-39ab001b5',
    imageUrl: '/SubCords/Yavanika/Priyadeep.jpg',
  },
  {
    id: 7,
    name: 'Vishmith Shetty',
    position: 'Sub-Coordinator',
    email: 'drama_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/vishmith-shetty-a16873313/',
    imageUrl: '/SubCords/Yavanika/Vishmith.jpg',
  },
  {
    id: 8,
    name: 'Vidhi Patel',
    position: 'Sub-Coordinator',
    email: 'drama_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/vidhi-patel-5a1893310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Yavanika/vidhiPatel.jpg',
  }
];

export default function YavanikaPage() {
  const renderMemberCard = (member: ClubMember) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-[320px] h-[320px]">
        <CardBody className="bg-white dark:bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[280px] h-[320px] rounded-xl p-6 border flex flex-col justify-between">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-yellow-500 flex-shrink-0">
              {member.imageUrl ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
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
    <div className="relative min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <BackgroundBeams className="absolute inset-0" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/ClubLogo/yavanika.png"
                alt="Exousia Dance Society"
                width={384}
                height={384}
                className="object-cover rounded-2xl shadow-2xl border border-white/[0.1]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-300 mb-6">
              Yavanika
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto lg:mx-0">
              The Dramatics Society of IIT Patna -Where talent meets passion and
              stories come alive on stage.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16 ">
          {/* About Section */}
          <div className="w-full">
            <div className="bg-white border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8 ">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">
                About Yavanika
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Yavanika is the dramatics society and one of the oldest clubs of
                IIT Patna. With talent and feeling like of a movie actor, it makes the journey
                superexcited and memorable. From stage plays to street performances, Yavanika brings stories to life and fuels the dramatic spirit of the campus.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  What We Do
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Stage plays and theatrical performances</li>
                  <li>Street plays and nukkad nataks</li>
                  <li>Acting workshops and training sessions</li>
                  <li>Inter-college drama competitions</li>
                  <li>Annual theatrical productions</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">Our Events</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Nautanki Nights</li>
                  <li>RangManch</li>
                  <li>Abhivyakti</li>
                  <li>Kalakriti</li>
                  <li>Goonj-E-Dastaan</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <ImageGrid
              images={[
                "/ClubPages/Yavanika/Picture1.jpg",
                "/ClubPages/Yavanika/Picture3.jpg",
                "/ClubPages/Yavanika/Picture5.jpg",
                "/ClubPages/Yavanika/Picture8.jpg",
                "/ClubPages/Yavanika/Picture10.jpg",
                "/ClubPages/Yavanika/Picture11.jpg",
                "/ClubPages/Yavanika/Picture13.png",
                "/ClubPages/Yavanika/Picture14.png",
                "/ClubPages/Yavanika/Picture15.png",
                "/ClubPages/Yavanika/Picture16.jpg",
                "/ClubPages/Yavanika/Picture17.jpg",
                "/ClubPages/Yavanika/Picture18.jpg",
                "/ClubPages/Yavanika/Picture19.jpg",
                "/ClubPages/Yavanika/Picture20.jpg",
                "/ClubPages/Yavanika/Picture21.jpg",
                "/ClubPages/Yavanika/Picture22.jpg",
                "/ClubPages/Yavanika/WhatsApp Image 2025-06-13 at 21.13.25_a7e3e9e4.jpg",
                "/ClubPages/Yavanika/WhatsApp Image 2025-06-13 at 21.13.24_f47aabd2.jpg",
                "/ClubPages/Yavanika/WhatsApp Image 2025-06-13 at 21.13.24_545c13a3.jpg",
                "/ClubPages/Yavanika/WhatsApp Image 2025-06-13 at 21.13.23_50f5c902.jpg",
              ]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>


        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Team
          </h2>
          <h2 className="text-3xl font-semibold text-center mb-6 text-yellow-300 px-2 md:px-0">
            Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:hidden lg:grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {YavanikaMembers.slice(0, 3).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-10 max-w-6xl mx-auto">
            {YavanikaMembers.slice(0, 2).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <div className="hidden sm:grid sm:grid-cols-1 lg:hidden gap-10 max-w-6xl mx-auto">
            {YavanikaMembers.slice(2,3).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#4169E1] px-4 md:px-0">
            Sub Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:hidden lg:grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {YavanikaMembers.slice(3,6).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <div className="grid grid-cols-1 sm:hidden lg:grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto ">
            {YavanikaMembers.slice(6).map((member) =>
              renderMemberCard(member)
            )}
          </div>
            
            <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-10 max-w-6xl mx-auto">
            {YavanikaMembers.slice(3,5).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-10 max-w-6xl mx-auto ">
            {YavanikaMembers.slice(5,7).map((member) =>
              renderMemberCard(member)
            )}
          </div>
          <div className="hidden sm:grid sm:grid-cols-1 lg:hidden gap-10 max-w-6xl mx-auto ">
            {YavanikaMembers.slice(7).map((member) =>
              renderMemberCard(member)
            )}
          </div>
        </section> 

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://www.facebook.com/yavanika.iitp/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/yavanika_iitp/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@Yavanika_iitp"
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

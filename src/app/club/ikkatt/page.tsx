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

const IkkattMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Meghna Kumari',
    position: 'Coordinator',
    email: 'meghna_2301ce18@iitp.ac.in',
    linkedinUrl: 'http://linkedin.com/in/meghna-kumari-00a431298',
    imageUrl: '/Coordinators/Ikkat/Meghna.jpeg',
  },
  {
    id: 2,
    name: 'Sanskar',
    position: 'Coordinator',
    email: 'sanskar_2301mm31@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/sanskar-sahu-58a81b289/',
    imageUrl: '/Coordinators/Ikkat/sanskar.jpg',
  },
  {
    id: 3,
    name: 'Amaan Ali',
    position: 'Coordinator',
    email: 'amaan_2302gt06@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/amaan-ali-94830b291/',
    imageUrl: '/Coordinators/Ikkat/Amaan.jpeg',
  },
  {
    id: 4,
    name: 'Mohima Baidya',
    position: 'Sub-Coordinator',
    email: 'culturalaffairs@iitp.ac.in',
    linkedinUrl: 'http://www.linkedin.com/in/mohima-baidya/',
    imageUrl: '/SubCords/Ikkat/Mohima.jpg',
  },
  {
    id: 5,
    name: 'Aanushka Saha',
    position: 'Sub-Coordinator',
    email: 'culturalaffairs@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/aanushka-saha-a2b78a322/',
    imageUrl: '/SubCords/Ikkat/aanushka.jpg',
  },
  {
    id: 6,
    name: 'Aditi Lohiya',
    position: 'Sub-Coordinator',
    email: 'culturalaffairs@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/aditi-lohiya-395532321/',
    imageUrl: '/SubCords/Ikkat/Aditi_ikkat.jpg',
  },
  {
    id: 7,
    name: 'Prince',
    position: 'Sub-Coordinator',
    email: 'culturalaffairs@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/prince-narayan-173b0a36a/',
    imageUrl: '/SubCords/Ikkat/prince.jpg',
  },
  {
    id: 8,
    name: 'Ankit Basu',
    position: 'Sub-Coordinator',
    email: 'culturalaffairs@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/ankit-basu-32295931a/',
    imageUrl: '/SubCords/Ikkat/AnkitBasu.jpg',
  },
  {
    id: 9,
    name: 'Tanishq Sangwan',
    position: 'Sub-Coordinator',
    email: 'culturalaffairs@iitp.ac.in',
    linkedinUrl: 'www.linkedin.com/in/tanishq-sangwan/',
    imageUrl: '/SubCords/Ikkat/Tanishq.jpg',
  }
];

export default function AnimePage() {
  const renderMemberCard = (member: ClubMember) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-[320px] h-[520px]">
        <CardBody className="bg-[#F5D7A1] text-black border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-red-500 bg-white flex items-center justify-center">
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
            {/* {member.instagramUrl && (
              <CardItem
                translateZ={20}
                as="a"
                href={member.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white text-black hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </CardItem>
            )} */}
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
  return (
    <div className="relative min-h-screen w-full bg-white/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <BackgroundBeams className="absolute inset-0" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
                <Image
                  src="/ClubLogo/ikkatt.png"
                  alt="Designing Society"
                  width={384} 
                  height={384} 
                  className="rounded-2xl shadow-2xl border border-white/[0.1] object-cover"
                  priority 
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-400 mb-6"
              style={{ color: "#D4AF37" }}
            >
              Ikkatt
            </h1>
            <p className="text-lg md:text-xl text-black max-w-2xl mx-auto lg:mx-0">
              Style isn&apos;t just worn—it&apos;s designed. Ikkatt gives you the ramp and
              the sketchpad. From fashion shows to DIY workshops, this club
              turns creativity into couture.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="w-full">
            <div className="border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">
                About Ikkatt Club
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Style isn&apos;t just worn—it&apos;s designed. Ikkatt gives you the ramp
                and the sketchpad. From fashion shows to DIY workshops, this
                club turns creativity into couture. It celebrates
                self-expression through design, empowering students to wear
                their imagination with pride.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  What We Do
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Conduct fashion and makeup workshop</li>
                  <li>Rampwalks</li>
                  <li>Upcycling and thrifting clothes</li>
                  <li>Online / Offline photoshoot and modelling workshop</li>
                  <li>Performances at college fests</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  Our Events
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Mr and Ms Freshers</li>
                  <li>Reverb Fashion</li>
                  <li>Inter-College fashion events</li>
                  <li>StyleSpill</li>
                  <li>Verve</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <ImageGrid
              images={[
                "/ClubPages/Ikkatt/ikkat1.jpg",
                "/ClubPages/Ikkatt/ikkat2.jpg",
                "/ClubPages/Ikkatt/ikkat3.jpg",
                "/ClubPages/Ikkatt/ikkat4.jpg",
                "/ClubPages/Ikkatt/ikkat5.jpg",
                "/ClubPages/Ikkatt/ikkat6.jpg",
                "/ClubPages/Ikkatt/ikkat9.jpg",
                "/ClubPages/Ikkatt/ikkat8.jpg"
              ]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>

        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#4169E1]">
            Our Team
          </h2>
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#191970] px-2 md:px-0">
            Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {IkkattMembers.slice(0, 3).map((member) => renderMemberCard(member))}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#191970] px-4 md:px-0">
            Sub Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {IkkattMembers.slice(3).map((member) => renderMemberCard(member))}
          </div>
        </section>
        
        <div className="flex justify-center gap-6 mt-12">
          
          <a
            href="https://www.instagram.com/ikkatt_iitp/"
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
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
  imageUrl?: string;
  email?: string;
  linkedinUrl?: string;
}

const AnimeMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Chandra Shekhar Azad',
    email: 'chandra_2301ec09@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/tejavath-chandrashekarazad-7363ab298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/Coordinators/AnimeClub/CSA.jpg',
  },
  {
    id: 2,
    name: 'Dikshant K.',
    email: 'dikshant_2302st02@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/dikshant-khobragade-1b166727b/',
    imageUrl: '/Coordinators/AnimeClub/dikshantsk01.jpg',
  },
  {
    id: 3,
    name: 'Akshat',
    email: 'akshat_2301ce02@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/akshat-kumar-singh-7400b2178?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/Coordinators/AnimeClub/akshat.jpg',
  },
  {
    id: 4,
    name: 'Tejash Agrawal ',
    email: 'anime_club@iitp.ac.in',
    linkedinUrl: '#',
    imageUrl: '/SubCords/AnimeClub/Tejash.jpg',
  },
  {
    id: 5,
    name: 'Ranveer Gupta',
    email: 'anime_club@iitp.ac.in',
    linkedinUrl: 'www.linkedin.com/in/ranveer-g-7544a4232',
    imageUrl: '/SubCords/AnimeClub/Ranveer.jpeg',
  },
  {
    id: 6,
    name: 'Adil Khan',
    email: 'anime_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/adil-khan-98501a31a/',
    imageUrl: '/SubCords/AnimeClub/AdilKhan.jpg',
  },
  {
    id: 7,
    name: 'Satyam Sinha',
    email: 'anime_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/satyam-sinha-733801325/',
    imageUrl: '/SubCords/AnimeClub/SatyamSinha.jpg',
  },
  {
    id: 8,
    name: 'Raghav',
    email: 'anime_club@iitp.ac.in',
    linkedinUrl: 'www.linkedin.com/in/raghav-singla-885bb0325',
    imageUrl: '/SubCords/AnimeClub/Raghav.png',
  },
  {
    id: 9,
    name: 'Soyam Bais ',
    email: 'anime_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/soyam-bais-58b024329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/AnimeClub/SoyamBais.jpg',
  }
];

export default function AnimePage() {
  const renderMemberCard = (member: ClubMember) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-[320px] h-[520px]">
        <CardBody className="bg-white text-black border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-red-500 bg-white flex items-center justify-center">
              {member.imageUrl ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
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
            <div className="relative">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl shadow-2xl border border-white/[0.1]">
                  <Image
                    src="/ClubLogo/anime.png"
                    alt="Art Society"
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(min-width: 1024px) 24rem, 20rem"
                  />
                </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-400 mb-6"
              style={{ color: "#007C91" }}
            >
              Anime Club
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto lg:mx-0">
              Whether you&apos;re a seasoned otaku or just getting started with your first series, Anime club welcomes all with open arms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="w-full">
            <div className="bg-white border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">
                About Anime Club
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Anime Club is a hub for everyone from veteran weebs to
                budding enthusiasts and provides a unique platform for people to
                get together, engage in active discussions and showcase their
                emotions and creativity about anything related to the animanga
                world
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  What We Do
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Regular watch sessions</li>
                  <li>Animeme showcase</li>
                  <li>Gaming Arcade and Merch stalls</li>
                  <li>Anime Arts</li>
                  <li>Anime themed Quizzes</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  Our Events
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Animecon</li>
                  <li>Hunter x Hunter</li>
                  <li>Dalgona candy challenge</li>
                  <li>Animake </li>
                  <li>Ramen Rangers.in</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <ImageGrid
              images={[
                "/ClubPages/Anime-club/1.jpg",
                "/ClubPages/Anime-club/2.jpg",
                "/ClubPages/Anime-club/3.jpg",
                "/ClubPages/Anime-club/4.jpg",
                "/ClubPages/Anime-club/5.jpg",
                "/ClubPages/Anime-club/6.jpg",
                "/ClubPages/Anime-club/7.jpg",
                "/ClubPages/Anime-club/8.jpg",
                "/ClubPages/Anime-club/9.jpg",
                "/ClubPages/Anime-club/10.jpg",
                "/ClubPages/Anime-club/11.jpg",
                "/ClubPages/Anime-club/12.jpg",
                "/ClubPages/Anime-club/13.jpg",
              ]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>

        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">
            Our Team
          </h2>
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#4169E1] px-2 md:px-0">
            Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {AnimeMembers.slice(0, 3).map((member) => renderMemberCard(member))}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#4169E1] px-4 md:px-0">
            Sub Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {AnimeMembers.slice(3).map((member) => renderMemberCard(member))}
          </div>
        </section>
        <div className="flex justify-center gap-6 mt-12">
        
          <a
            href="https://www.instagram.com/animeclub_iitp/"
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
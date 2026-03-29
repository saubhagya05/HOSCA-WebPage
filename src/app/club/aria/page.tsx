"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaEnvelope } from "react-icons/fa";
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

const AriaMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Aarsh Sanghavi',
    position: 'Coordinator',
    email: 'aarsh_2301cs01@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/aarsh-sanghavi-b61552280/',
    imageUrl: '/Coordinators/Aria/aarsh.jpg',
  },
  {
    id: 2,
    name: 'Rithvik Konidena',
    position: 'Coordinator',
    email: 'rithvik_2302cs09@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/rithvik-konidena-01a637317/',
    imageUrl: '/Coordinators/Aria/Rithvik.jpeg',
  },
  {
    id: 3,
    name: 'Dhairya Garg',
    position: 'Sub-Coordinator',
    email: 'music_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/dhairya-garg-32656024b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Aria/Dhairya.jpg',
  },
  {
    id: 4,
    name: 'Sejal Goel',
    position: 'Sub-Coordinator',
    email: 'music_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/sejal-goel-6ab186314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Aria/Sejal.jpg',
  },
  {
    id: 5,
    name: 'Sankhanil Chakraborty',
    position: 'Sub-Coordinator',
    email: 'music_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/sankhanil-chakraborty-9377a032a/',
    imageUrl: '/SubCords/Aria/Sankhanil.jpg',
  },
  {
    id: 6,
    name: 'Shorya Pratap Singh',
    position: 'Sub-Coordinator',
    email: 'music_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/shorya-pratap-singh-7aa29b320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Aria/SHORYA.jpg',
  },
  {
    id: 7,
    name: 'Abhinav Datta',
    position: 'Sub-Coordinator',
    email: 'music_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/abhinav-datta-54795131a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Aria/AbhinavDatta.jpg',
  },
  {
    id: 8,
    name: 'Joven Sony',
    position: 'Sub-Coordinator',
    email: 'music_club@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/joven-sony-aa0862224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/Aria/Joven.jpg',
  }
];

export default function AriaPage() {
  const renderMemberCard = (member: ClubMember) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-[320px] h-[520px]">
        <CardBody className="bg-sky-300 relative group/card border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white bg-white">
              {member.imageUrl ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="144px"
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
    <div className="relative min-h-screen w-full bg-[url('/club/aria_background.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/[0.6]"></div>
      <BackgroundBeams className="absolute inset-0" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/ClubLogo/aria.jpg"
                alt="Aria Music Society"
                fill
                className="object-cover rounded-2xl shadow-2xl border border-white/[0.1]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 mb-6">
              Aria
            </h1>
            <p className="text-lg md:text-xl text-orange max-w-2xl mx-auto lg:mx-0">
              The Music Society of IIT Patna - Where melodies come alive and
              harmonies create magic.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="w-full">
            <div className="border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">
                About Aria
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
              Aria, standing for &quot;melody&quot; in Italian, is the music society of
              IIT Patna. It aims to foster musical talent and bring people together
              through their love for music. From soulful vocals to electrifying
              instrumentals, Aria creates a symphony that resonates across the campus.
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  What We Do
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Acoustic nights and concerts</li>
                  <li>Music workshops and training</li>
                  <li>Inter-college music competitions</li>
                  <li>Band performances</li>
                  <li>Cultural event performances</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  Our Events
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Acoustic Nights</li>
                  <li>Battle of Bands</li>
                  <li>Music Workshops</li>
                  <li>Cultural Fest Performances</li>
                  <li>Inter-college Music Competitions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <ImageGrid
              images={[
                "/ClubPages/Aria/IMG-20250614-WA0146.jpg",
                "/ClubPages/Aria/IMG-20250614-WA0142.jpg",
                "/ClubPages/Aria/IMG-20250614-WA0140.jpg",
                "/ClubPages/Aria/IMG-20250614-WA0136.jpg",
                "/ClubPages/Aria/IMG-20250614-WA0134.jpg",
                "/ClubPages/Aria/IMG-20250614-WA0125.jpg",
                "/ClubPages/Aria/IMG-20250614-WA0119.jpg",
                "/ClubPages/Aria/IMG-20250614-WA0115.jpg",
                "/ClubPages/Aria/IMG-20250614-WA0114.jpg",
                "/ClubPages/Aria/IMG-20250614-WA0113.jpg",
                "/ClubPages/Aria/IMG-20250614-WA0109.jpg",
                "/ClubPages/Aria/IMG-20250614-WA0108.jpg",
                "/ClubPages/Aria/IMG-20250614-WA0107.jpg",
                "/ClubPages/Aria/IMG-20250210-WA0018.jpg",
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {AriaMembers.slice(0, 2).map((member) => renderMemberCard(member))}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-[#4169E1] px-4 md:px-0">
            Sub Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {AriaMembers.slice(2).map((member) => renderMemberCard(member))}
          </div>
        </section>

        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://www.facebook.com/musicclubiitpatna/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/aria_iitp/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@musicclubiitpatna"
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
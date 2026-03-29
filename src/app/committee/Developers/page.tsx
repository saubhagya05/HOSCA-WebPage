"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import GymkhanaCommitteePage from "../gymkhana/page";
import Link from "next/link";

interface Developer {
  id: number;
  name: string;
  imageUrl?: string;
  email?: string;
  linkedinUrl?: string;
  department?: string;
}

interface Cnd {
  id: number;
  name: string;
  imageUrl?: string;
  email?: string;
  linkedinUrl?: string;
  department?: string;
}

const mainDevelopers: Developer[] = [
  {
    id: 1,
    name: "Chaitanya Saagar",
    email: "culturalaffairs@iitp.ac.in",
    imageUrl: "/HoscaaCoords/ChaitanyaSaagar.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/chaitanya-saagar-476b562a2/",
  },
  {
    id: 2,
    name: "Saubhagya Laxman Mamgain",
    email: "culturalaffairs@iitp.ac.in",
    imageUrl: "/HoscaaCoords/Saubhagya.PNG",
    linkedinUrl: "https://www.linkedin.com/in/saubhagya-laxman-mamgain-14492b27b/",
  },
  {
    id: 3,
    name: "Shaurya Aggarwal",
    email: "culturalaffairs@iitp.ac.in",
    imageUrl: "/HoscaaCoords/shaurya.jpg",
    linkedinUrl: "https://www.linkedin.com/in/shaurya-aggarwal-iitp/",
  },
  {
    id: 4,
    name: "Aarav Shyam",
    email: "culturalaffairs@iitp.ac.in",
    imageUrl: "/HoscaaCoords/Aarav.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/aarav-shyam-21aba2285/",
  },
  {
    id: 5,
    name: "Mihika Saxena",
    email: "culturalaffairs@iitp.ac.in",
    imageUrl: "/HoscaaCoords/Mihika.jpg",
    linkedinUrl: "https://www.linkedin.com/in/mihika-saxena-b5bb8a28b/",
  },
  {
    id: 6,
    name: "Kshitij Vasule",
    email: "culturalaffairs@iitp.ac.in",
    imageUrl: "/HoscaaCoords/Kshitij.JPG",
    linkedinUrl: "https://www.linkedin.com/in/kshitij-vasule-36a19a294/",
  },
  {
    id: 7,
    name: "Abhinandan Pandey",
    email: "culturalaffairs@iitp.ac.in",
    imageUrl: "/HoscaaCoords/Abhinandan.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/abhinandan-pandey-828775298/",
  },
  {
    id: 8,
    name: "Chaitanya Kotipalli",
    email: "culturalaffairs@iitp.ac.in",
    imageUrl: "/HoscaaCoords/Chaitanya.jpg",
    linkedinUrl: "https://www.linkedin.com/in/chaitanya-kotipalli-6234a6317/",
  },
];

const contributors: Developer[] = [
  {
    id: 10,
    name: "Khanak Jain",
    email: "culturalaffairs@iitp.ac.in",
    imageUrl: "/HoscaaSubcoords/khanak.jpg",
    linkedinUrl: "https://www.linkedin.com/in/khanak-jain-4412ba2b8/",
  },
  {
    id: 11,
    name: "Aayan Tejani",
    email: "aayan_2401cs58@iitp.ac.in",
    imageUrl: "/HoscaaSubcoords/Aayan.jpg",
    linkedinUrl: "https://www.linkedin.com/in/aayan-tejani-7022b9240/",
  },
  {
    id: 12,
    name: "Anmol Agrawal",
    email: "culturalaffairs@iitp.ac.in",
    imageUrl: "/HoscaaSubcoords/Anmol.jpg",
    linkedinUrl: "https://www.linkedin.com/in/anmol-agarwal-175503327/",
  },
  {
    id: 13,
    name: "Amar kumar",
    email: "culturalaffairs@iitp.ac.in",
    imageUrl: "/HoscaaSubcoords/Amar.jpg",
    linkedinUrl: "https://www.linkedin.com/in/amar-kumar-860b17312/",
  },
];

const CndCords: Cnd[] = [
  {
    id: 1,
    name: "Ansh Singh",
    email: "culturalaffairs@iitp.ac.in",
    imageUrl: "/CnDCords/Ansh.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/anshnvm",
  }
];

const CndSubcords: Cnd[] = [
  {
    id: 2,
    name: "Saubhagya Ji Jaiswal",
    email: "saubhagya_2401me72@iitp.ac.in",
    imageUrl: "/CndSubcords/SJJ.jpg",
    linkedinUrl: "https://www.linkedin.com/in/saubhagya-ji-jaiswal-33b2a2289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 3,
    name: "Shailja Brijendra Mathuria ",
    email: "culturalaffairs@iitp.ac.in",
    imageUrl: "/CndSubcords/Shailja.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/shailja-mathuria-739834312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 4,
    name: "Sahil",
    email: "culturalaffairs@iitp.ac.in",
    imageUrl: "/CndSubcords/Sahil.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sahil-72019a360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 5,
    name: "Swarnava Ghosh",
    email: "culturalaffairs@iitp.ac.in",
    imageUrl: "/CndSubcords/Swarnava.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/swarnava-ghosh-b074a1326/",
  },
  {
    id: 6,
    name: "D. Sravan Kumar",
    email: "culturalaffairs@iitp.ac.in",
    imageUrl: "/CndSubcords/Sravan.jpg",
    linkedinUrl: "https://www.linkedin.com/in/d-sravan-kumar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  }
];

export default function DevelopersPage() {
  const renderMemberCard = (member: Developer) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-50">
        <CardBody className="flex flex-col items-center bg-gray-50 relative group/card hover:shadow-[0_0_20px_5px_rgba(234,179,8,0.5)] dark:hover:shadow-[0_0_25px_7px_rgba(234,179,8,0.2)] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border transition-all duration-300">
          <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
            <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-3 border-[#768686]">
              {member.imageUrl ? (
                <Image
                  fill
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  sizes="128px"
                  loading="lazy"
                  fetchPriority="low"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-4xl text-gray-400 dark:text-gray-500">
                    {member.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </CardItem>

          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white text-center"
          >
            {member.name}
          </CardItem>
          {member.department && (
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
            >
              {member.department}
            </CardItem>
          )}
          
          <div className="flex justify-center gap-4 mt-4">
            {member.email && (
              <CardItem
                translateZ={20}
                as="a"
                href={`mailto:${member.email}`}
                className="p-2 rounded-full bg-zinc-600 text-zinc-200 border border-zinc-500/50 hover:bg-red-500 hover:text-white hover:border-red-400/50 transition-colors duration-300"
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
                className="p-2 rounded-full bg-zinc-600 text-zinc-200 border border-zinc-500/50 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]/60 transition-colors duration-300"
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
    <div className="relative min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
      <BackgroundBeams className="absolute inset-0" />

      <GymkhanaCommitteePage/>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Web Developers</h1>

        <section className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-300">
            The following individuals have contributed to the development of this website:
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-center text-white mb-8">Coordinators</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {mainDevelopers.slice(0, 2).map(developer => (
              <div key={developer.id}>{renderMemberCard(developer)}</div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainDevelopers.slice(2).map(developer => (
              <div key={developer.id}>{renderMemberCard(developer)}</div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-center text-white mb-8">Sub Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contributors.map(contributor => (
              <div key={contributor.id}>{renderMemberCard(contributor)}</div>
            ))}
          </div>
        </section>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">C&D Team</h1>

        <section className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-300">
            The following individuals have contributed to the Design of this website:
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-center text-white mb-8">Coordinators</h2>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto mb-8">
            {CndCords.map(cnd => (
              <div key={cnd.id}>{renderMemberCard(cnd)}</div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-center text-white mb-8">Sub Coordinators</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {CndSubcords.slice(0, 2).map(cnd => (
              <div key={cnd.id}>{renderMemberCard(cnd)}</div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {CndSubcords.slice(2).map(cnd => (
              <div key={cnd.id}>{renderMemberCard(cnd)}</div>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-white/[0.1]">
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">
            Meet the Minds Behind the Magic of HOSCA
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 mb-4">From captivating performances to immersive workshops, every cultural endeavor at IIT Patna is driven by the enthusiasm and dedication of a dynamic student team. Curious about the people steering these vibrant initiatives?</p>
            <p className="text-gray-300 mb-4"> Get to know the Coordinators and Sub-Coordinators of HOSCA’s diverse clubs — the creative minds and leaders who infuse campus life with passion, innovation, and spirit. </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 opacity-100 transform-none">
            <Link
              href="/club"
              className="group relative px-8 py-2 my-1 rounded-full overflow-hidden bg-gradient-to-r from-red-600 to-red-800 text-white text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10 flex justify-center">Click Me</span>
            </Link>
          </div>
        </section>

        <section className="mt-12 bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-white/[0.1]">
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">
            About Gymkhana
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 mb-4">
              The Gymkhana Committee at IIT Patna is the apex student body that
              oversees and coordinates all student activities, including
              cultural, technical, and sports events. It works in collaboration
              with various clubs and associations to ensure the holistic
              development of students.
            </p>
            <p className="text-gray-300">The committee is responsible for:</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
              <li>Organizing and managing student activities and events</li>
              <li>Coordinating between different clubs and associations</li>
              <li>Managing student welfare and development programs</li>
              <li>
                Facilitating communication between students and administration
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
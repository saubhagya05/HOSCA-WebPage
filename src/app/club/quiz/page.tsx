export const dynamic = 'force-static';

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ImageGrid } from "@/components/ui/image-grid";
import Image from "next/image";
import React, { Suspense } from "react";

interface ClubMember {
  id: number;
  name: string;
  position: string;
  imageUrl?: string;
  email?: string;
  linkedinUrl?: string;
}

const QuizMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Shibanshu Soubhagya Das',
    position: 'Coordinator',
    email: 'shibanshu_2302gt08@iitp.ac.in',
    linkedinUrl: 'https://in.linkedin.com/in/shibanshu-soubhagya-das-46a5342b5',
    imageUrl: '/Coordinators/QuizClub/Shibhanshu.png',
  },
  {
    id: 2,
    name: 'Amal Biju',
    position: 'Coordinator',
    email: 'quizclub@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/amal-biju-5ab486300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/Coordinators/QuizClub/Amal.jpg',
  },
  {
    id: 3,
    name: 'Ashmit Verma',
    position: 'Coordinator',
    email: 'ashmit_2301ph07@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/ashmit-verma-412076299',
    imageUrl: '/Coordinators/QuizClub/Ashmit.jpg',
  },
  {
    id: 4,
    name: 'Leon Joel Shaji',
    position: 'Sub-Coordinator',
    email: 'quizclub@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/leon-joel-shaji-723012324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/QuizClub/leonJoel.jpg',
  },
  {
    id: 5,
    name: 'Sarthak Poddar',
    position: 'Sub-Coordinator',
    email: 'quizclub@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/sarthak-poddar-66038b305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/QuizClub/SarthakPoddar.jpg',
  },
  {
    id: 6,
    name: 'Harshit Singh',
    position: 'Sub-Coordinator',
    email: 'quizclub@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/harshit-singh-1158b1367/',
    imageUrl: '/SubCords/QuizClub/harshit_singh.jpg',
  },
  {
    id: 7,
    name: 'Joven Sony',
    position: 'Sub-Coordinator',
    email: 'quizclub@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/joven-sony-aa0862224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/QuizClub/Joven.jpg',
  },
  {
    id: 8,
    name: 'Abhiram Parupudi',
    position: 'Sub-Coordinator',
    email: 'quizclub@iitp.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/abhiram-p-432a43319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    imageUrl: '/SubCords/QuizClub/abhiramParupudi.jpg',
  },
  {
    id: 9,
    name: 'Heet Joshi',
    position: 'Sub-Coordinator',
    email: 'quizclub@iitp.ac.in',
    linkedinUrl: '#',
    imageUrl: '/SubCords/QuizClub/HeetJoshi.jpeg',
  }
];

export default function QuizPage() {
  const renderMemberCard = (member: ClubMember) => (
    <div key={member.id} className="flex justify-center w-full">
      <CardContainer className="w-[320px] h-[520px]">
        <CardBody className="bg-[#E6A14C] text-black border-white border w-[280px] h-[450px] rounded-xl p-6 flex flex-col justify-between">
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
      <div className="absolute inset-0 bg-white/[0.6]"></div>
      <BackgroundBeams className="absolute inset-0" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 mt-12 lg:mt-24">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/ClubLogo/quiz.jpg"
                alt="Knowledge Society"
                fill
                className="object-cover rounded-2xl shadow-2xl border border-white/[0.1]"
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-600 mb-6">
              Quiz Club
            </h1>
            <p className="text-lg md:text-xl text-black max-w-2xl mx-auto lg:mx-0">
              One doesn&apos;t need to mug up random nerdy facts to attend quizzes,
              all one needs is a keen eye for the things that surround us
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="w-full ">
            <div className="border-white relative group/card shadow-lg w-full h-auto rounded-xl p-8">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">
                About Quiz Club
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                The Quiz Club, IIT Patna believes that the most important thing
                is having fun (and ofc quizzing xd). One doesn&apos;t need to mug up
                random nerdy facts to attend quizzes, all one needs is a keen
                eye for the things that surround us. The club turns everyday
                knowledge into thrilling quiz battles and brainy banter.{" "}
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  What We Do
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Debunk myths about quizzing</li>
                  <li>Regular weekly sets</li>
                  <li>Traditional and Buzzer Quizzes</li>
                  <li>General Quizzes with topics of India and Sports </li>
                  <li>Quizzes on diverse topics including MELA, TLC, and SBT</li>
                 
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">
                  Our Events
                </h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Parakh</li>
                  <li>QC101</li>
                  <li>Celest-ion</li>
                  <li>Knockout</li>
                  <li>Reverb Quizzes(TLC and Bihtawood)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <ImageGrid
              images={[
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.31.08.jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.31.07.jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.31.07 (2).jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.31.06.jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.31.06 (2).jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.18.07.jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.18.06.jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.17.19.jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.17.18.jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.17.17.jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.17.16.jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.17.15.jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.17.14.jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.17.13.jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.17.12.jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.17.11.jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.17.10.jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.08.13.jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.06.01.jpeg",
                "/ClubPages/QC/WhatsApp Image 2025-06-14 at 16.06.00.jpeg",
              ]}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>

        <section className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#E6A14C]">
            Our Team
          </h2>
          <h2 className="text-3xl font-semibold text-center mb-6 text-yellow-400 px-2 md:px-0">
            Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {QuizMembers.slice(0, 3).map((member) => renderMemberCard(member))}
          </div>
          <h2 className="text-3xl font-semibold text-center mt-12 mb-6 text-yellow-400 px-4 md:px-0">
            Sub Coordinators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {QuizMembers.slice(3).map((member) => (
              <Suspense key={member.id} fallback={<div>Loading...</div>}>
                {renderMemberCard(member)}
              </Suspense>
            ))}
          </div>
        </section>
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://www.facebook.com/QCIITP/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/qc_iitp/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/c/QuizClubIITPatna"
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
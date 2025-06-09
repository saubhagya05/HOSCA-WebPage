"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

interface CommitteeMember {
  id: number;
  name: string;
  position: string;
  department: string;
  imageUrl?: string;
  email?: string;
  linkedinUrl?: string;
}

const committeeMembers: CommitteeMember[] = [
  {
    id: 1,
    name: 'Dr. Gymkhana Advisor',
    position: 'Gymkhana Advisor',
    department: 'Student Affairs',
    email: 'gymkhana.advisor@iitp.ac.in',
    imageUrl: '/committee/gymkhana-advisor.jpg', 
    linkedinUrl: 'https://linkedin.com/in/gymkhana-advisor', 
  },
  {
    id: 2,
    name: 'Student General Secretary',
    position: 'General Secretary',
    department: '',
    email: 'gs.gymkhana@iitp.ac.in',
    imageUrl: '/committee/New Folder/ChiragBhardwaj.JPG', 
    linkedinUrl: 'https://linkedin.com/in/gs-gymkhana', 
  },
  {
    id: 3,
    name: 'Cultural Secretary',
    position: 'Cultural Secretary',
    department: 'Civil Engineering',
    email: 'cultural.secretary@iitp.ac.in',
    imageUrl: '/committee/cultural-secretary.jpg', 
    linkedinUrl: 'https://linkedin.com/in/cultural-secretary', 
  },
  {
    id: 4,
    name: 'Technical Secretary',
    position: 'Technical Secretary',
    department: 'Computer Science',
    email: 'technical.secretary@iitp.ac.in',
    imageUrl: '/committee/technical-secretary.jpg',
    linkedinUrl: 'https://linkedin.com/in/technical-secretary',
  },
  {
    id: 5,
    name: 'Sports Secretary',
    position: 'Sports Secretary',
    department: 'Mechanical Engineering',
    email: 'sports.secretary@iitp.ac.in',
    imageUrl: '/committee/sports-secretary.jpg',
    linkedinUrl: 'https://linkedin.com/in/sports-secretary',
  },
  {
    id: 6,
    name: 'Literary Secretary',
    position: 'Literary Secretary',
    department: 'Electrical Engineering',
    email: 'literary.secretary@iitp.ac.in',
    imageUrl: '/committee/literary-secretary.jpg',
    linkedinUrl: 'https://linkedin.com/in/literary-secretary',
  },
  {
    id: 7,
    name: 'Social Secretary',
    position: 'Social Secretary',
    department: 'Chemical Engineering',
    email: 'social.secretary@iitp.ac.in',
    imageUrl: '/committee/social-secretary.jpg',
    linkedinUrl: 'https://linkedin.com/in/social-secretary',
  },
  {
    id: 8,
    name: 'Academic Secretary',
    position: 'Academic Secretary',
    department: 'Mathematics',
    email: 'academic.secretary@iitp.ac.in',
    imageUrl: '/committee/academic-secretary.jpg',
    linkedinUrl: 'https://linkedin.com/in/academic-secretary',
  }
];

export default function GymkhanaCommitteePage() {
  const gymkhanaAdvisor = committeeMembers.find(member => member.position === 'Gymkhana Advisor');
  const generalSecretary = committeeMembers.find(member => member.position === 'General Secretary');
  const otherMembers = committeeMembers.filter(member => 
    member.position !== 'Gymkhana Advisor' && member.position !== 'General Secretary'
  );

  const renderMemberCard = (member: CommitteeMember) => (
    <div key={member.id} className="flex justify-center">
      <CardContainer className="w-full">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-emerald-500">
              {member.imageUrl ? (
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
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
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
          >
            {member.position}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
          >
            {member.department}
          </CardItem>

          <div className="flex justify-center gap-4 mt-4">
            {member.email && (
              <CardItem
                translateZ={20}
                as="a"
                href={`mailto:${member.email}`}
                className="p-2 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-colors duration-300"
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
                className="p-2 rounded-full bg-gray-100 hover:bg-[#0077B5] hover:text-white transition-colors duration-300"
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
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Gymkhana Committee</h1>
      
        <section className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-300">
            The Gymkhana Committee is responsible for managing and coordinating all student activities
            at IIT Patna. It works closely with HOSCA and other cultural clubs to organize various
            events and activities throughout the year.
          </p>
        </section>
        
        <section className="space-y-12">
          {gymkhanaAdvisor && (
            <div className="max-w-md mx-auto">
              {renderMemberCard(gymkhanaAdvisor)}
            </div>
          )}

          {generalSecretary && (
            <div className="max-w-md mx-auto">
              {renderMemberCard(generalSecretary)}
            </div>
          )}

          <div className="space-y-12">
            {Array.from({ length: Math.ceil(otherMembers.length / 2) }).map((_, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {otherMembers.slice(rowIndex * 2, (rowIndex + 1) * 2).map(member => renderMemberCard(member))}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-white/[0.1]">
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">About Gymkhana</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 mb-4">
              The Gymkhana Committee at IIT Patna is the apex student body that oversees and coordinates
              all student activities, including cultural, technical, and sports events. It works in
              collaboration with various clubs and associations to ensure the holistic development
              of students.
            </p>
            <p className="text-gray-300">
              The committee is responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
              <li>Organizing and managing student activities and events</li>
              <li>Coordinating between different clubs and associations</li>
              <li>Managing student welfare and development programs</li>
              <li>Facilitating communication between students and administration</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 
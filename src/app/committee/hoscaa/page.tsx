'use client';

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
  role: string;
}

const committeeMembers: CommitteeMember[] = [
  // Club Coordinators
  {
    id: 1,
    name: "Sukrit Ghosh",
    position: "Vincetroke Coordinator",
    department: "Mechanical Engineering",
    email: "2201me69_sukrit@iitp.ac.in",
    imageUrl: "/committee/Sukrit.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sukrit-ghosh-bab1a1259",
    role: "coordinator"
  },
  {
    id: 2,
    name: "Pranjal Chamaria",
    position: "Vincetroke Coordinator",
    department: "Computer Science",
    email: "2201cs55_pranjal@iitp.ac.in",
    imageUrl: "/committee/Pranjal.jpg",
    linkedinUrl: "https://www.linkedin.com/in/pranjal-chamaria-080108253",
    role: "coordinator"
  },
  {
    id: 3,
    name: "Jenil Savaj",
    position: "Vincetroke Coordinator",
    department: "Metallurgical Engineering",
    email: "2201mc20_jenil@iitp.ac.in",
    imageUrl: "/committee/Jenil.jpg",
    linkedinUrl: "https://www.linkedin.com/in/jenil-savaj-b29a18281",
    role: "coordinator"
  },
  {
    id: 4,
    name: "Ansh Singh",
    position: "Yavanika Coordinator",
    department: "Mechanical Engineering",
    email: "2201me12_ansh@iitp.ac.in",
    imageUrl: "/committee/Ansh.jpg",
    linkedinUrl: "https://in.linkedin.com/in/anshnvm",
    role: "coordinator"
  },
  {
    id: 5,
    name: "Arti Dewangan",
    position: "Yavanika Coordinator",
    department: "Mechanical Engineering",
    email: "2201me14_arti@iitp.ac.in",
    imageUrl: "/committee/Arti.jpg",
    linkedinUrl: "https://www.linkedin.com/in/arti-dewangan-325916259",
    role: "coordinator"
  },
  {
    id: 6,
    name: "Mohit Kumar",
    position: "Yavanika Coordinator",
    department: "Civil Engineering",
    email: "2201ce35_mohit@iitp.ac.in",
    imageUrl: "/committee/Mohit.jpg",
    linkedinUrl: "https://www.linkedin.com/in/mohitkumar35",
    role: "coordinator"
  },

  // Web & Dev Team
  {
    id: 7,
    name: "Srivardhan Rao",
    position: "Web Dev Coordinator",
    department: "Electrical Engineering",
    email: "malraju_2001ee30@iitp.ac.in",
    imageUrl: "/committee/Prev Yr/srivardhan-web.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/srivardhan-rao-978556225",
    role: "web_dev"
  },
  {
    id: 8,
    name: "Rohan Chowke",
    position: "Web Dev Coordinator",
    department: "Mechanical Engineering",
    email: "chowke_2001me18@iitp.ac.in",
    imageUrl: "/committee/Prev Yr/rohan-web.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/rohan-chowke-442b80243",
    role: "web_dev"
  },
  {
    id: 9,
    name: "Tarun Meruga",
    position: "Web Dev Coordinator",
    department: "Computer Science",
    email: "tarun_2001cs45@iitp.ac.in",
    imageUrl: "/committee/New Folder/tarun meruga.jpg",
    linkedinUrl: "https://linkedin.com/in/tarun-meruga",
    role: "web_dev"
  },

  // Website Developers
  {
    id: 10,
    name: "Ashutosh Kumar Singh",
    position: "Web Dev Sub-coordinator",
    department: "Computer Science",
    email: "ashutosh_2101cs12@iitp.ac.in",
    imageUrl: "/committee/Prev Yr/ashutosh1.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ashutosh-kumar-singh-cse-iitpatna",
    role: "developer"
  },
  {
    id: 11,
    name: "Raunak Kumar Gupta",
    position: "Web Dev Sub-coordinator",
    department: "Computer Science",
    email: "raunakmodanwal321@gmail.com",
    imageUrl: "/committee/Prev Yr/raunak (2)1.jpg",
    linkedinUrl: "https://www.linkedin.com/in/raunak-kumar-gupta-075121226",
    role: "developer"
  },
  {
    id: 12,
    name: "Abhash Kumar",
    position: "Web Dev Sub-coordinator",
    department: "Metallurgical Engineering",
    email: "abhash_2101mc01@iitp.ac.in",
    imageUrl: "/committee/Prev Yr/abhash.jpg",
    linkedinUrl: "http://www.linkedin.com/in/abhash-kumar-059191247",
    role: "developer"
  },
  {
    id: 13,
    name: "Avinash Tyagi",
    position: "Web Dev Sub-coordinator",
    department: "Computer Science",
    email: "avinash_2101cs15@iitp.ac.in",
    imageUrl: "/committee/Prev Yr/avinash.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/avinash-t-956342226",
    role: "developer"
  },
  {
    id: 14,
    name: "Bhaskar Mishra",
    position: "Web Dev Sub-coordinator",
    department: "Computer Science",
    email: "mishrabhaskar.3005@gmail.com",
    imageUrl: "/committee/Prev Yr/bhaskar.jpg",
    linkedinUrl: "https://www.linkedin.com/in/bhaskar-mishra-191772223",
    role: "developer"
  },
  {
    id: 15,
    name: "Raj Kamal",
    position: "Web Dev Sub-coordinator",
    department: "Civil Engineering",
    email: "raj_2101ce45@iitp.ac.in",
    imageUrl: "/committee/Prev Yr/kamal1.jpg",
    linkedinUrl: "https://www.linkedin.com/in/raj-kamal-34737922a",
    role: "developer"
  }
];

export default function HOSCAACommitteePage() {
  return (
    <div className="relative min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <BackgroundBeams className="absolute inset-0" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-white mt-24">HOSCAA Committee</h1>

        {/* Introduction */}
        <section className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-300">
            The House of Students Cultural Affairs Association (HOSCAA) is responsible for managing and
            coordinating all cultural activities at IIT Patna. It works with various cultural clubs to
            organize events and promote cultural activities throughout the year.
          </p>
        </section>

        {/* Group members by club/team */}
        <div className="space-y-16">
          {/* Club Coordinators Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-center text-white">HoSCA Club Coordinators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
              {committeeMembers.filter(member => member.role === 'coordinator').map((member) => (
                <div key={member.id} className="flex justify-center">
                  <CardContainer className="w-[500px]">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
                      {/* Photo Section */}
                      <CardItem translateZ="100" className="w-full mt-4">
                        <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-emerald-500">
                          {member.imageUrl ? (
                            <img
                              src={member.imageUrl}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                              <span className="text-5xl text-gray-400 dark:text-gray-500">
                                {member.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                      </CardItem>

                      {/* Info Section */}
                      <CardItem
                        translateZ="50"
                        className="text-2xl font-bold text-neutral-600 dark:text-white text-center"
                      >
                        {member.name}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-lg text-neutral-500 max-w-sm mt-3 dark:text-neutral-300 text-center"
                      >
                        {member.position}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-base text-neutral-500 max-w-sm mt-2 dark:text-neutral-300 text-center"
                      >
                        {member.department}
                      </CardItem>

                      {/* Social Links */}
                      <div className="flex justify-center gap-6 mt-6">
                        {member.email && (
                          <CardItem
                            translateZ={20}
                            as="a"
                            href={`mailto:${member.email}`}
                            className="p-3 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-colors duration-300"
                            aria-label="Email"
                          >
                            <FaEnvelope className="w-5 h-5" />
                          </CardItem>
                        )}
                        {member.linkedinUrl && (
                          <CardItem
                            translateZ={20}
                            as="a"
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-100 hover:bg-[#0077B5] hover:text-white transition-colors duration-300"
                            aria-label="LinkedIn"
                          >
                            <FaLinkedin className="w-5 h-5" />
                          </CardItem>
                        )}
                      </div>
                    </CardBody>
                  </CardContainer>
                </div>
              ))}
            </div>
          </div>

          {/* Web & Dev Team Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-center text-white">Web & Dev Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
              {committeeMembers.filter(member => member.role === 'web_dev').map((member) => (
                <div key={member.id} className="flex justify-center">
                  <CardContainer className="w-[400px]">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
                      {/* Photo Section */}
                      <CardItem translateZ="100" className="w-full mt-4">
                        <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-emerald-500">
                          {member.imageUrl ? (
                            <img
                              src={member.imageUrl}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                              <span className="text-5xl text-gray-400 dark:text-gray-500">
                                {member.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                      </CardItem>

                      {/* Info Section */}
                      <CardItem
                        translateZ="50"
                        className="text-2xl font-bold text-neutral-600 dark:text-white text-center"
                      >
                        {member.name}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-lg text-neutral-500 max-w-sm mt-3 dark:text-neutral-300 text-center"
                      >
                        {member.position}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-base text-neutral-500 max-w-sm mt-2 dark:text-neutral-300 text-center"
                      >
                        {member.department}
                      </CardItem>

                      {/* Social Links */}
                      <div className="flex justify-center gap-6 mt-6">
                        {member.email && (
                          <CardItem
                            translateZ={20}
                            as="a"
                            href={`mailto:${member.email}`}
                            className="p-3 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-colors duration-300"
                            aria-label="Email"
                          >
                            <FaEnvelope className="w-5 h-5" />
                          </CardItem>
                        )}
                        {member.linkedinUrl && (
                          <CardItem
                            translateZ={20}
                            as="a"
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-100 hover:bg-[#0077B5] hover:text-white transition-colors duration-300"
                            aria-label="LinkedIn"
                          >
                            <FaLinkedin className="w-5 h-5" />
                          </CardItem>
                        )}
                      </div>
                    </CardBody>
                  </CardContainer>
                </div>
              ))}
            </div>
          </div>

          {/* Website Developers Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-center text-white">Website Developers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
              {committeeMembers.filter(member => member.role === 'developer').map((member) => (
                <div key={member.id} className="flex justify-center">
                  <CardContainer className="w-[400px]">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
                      {/* Photo Section */}
                      <CardItem translateZ="100" className="w-full mt-4">
                        <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-emerald-500">
                          {member.imageUrl ? (
                            <img
                              src={member.imageUrl}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                              <span className="text-5xl text-gray-400 dark:text-gray-500">
                                {member.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                      </CardItem>

                      {/* Info Section */}
                      <CardItem
                        translateZ="50"
                        className="text-2xl font-bold text-neutral-600 dark:text-white text-center"
                      >
                        {member.name}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-lg text-neutral-500 max-w-sm mt-3 dark:text-neutral-300 text-center"
                      >
                        {member.position}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-base text-neutral-500 max-w-sm mt-2 dark:text-neutral-300 text-center"
                      >
                        {member.department}
                      </CardItem>

                      {/* Social Links */}
                      <div className="flex justify-center gap-6 mt-6">
                        {member.email && (
                          <CardItem
                            translateZ={20}
                            as="a"
                            href={`mailto:${member.email}`}
                            className="p-3 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-colors duration-300"
                            aria-label="Email"
                          >
                            <FaEnvelope className="w-5 h-5" />
                          </CardItem>
                        )}
                        {member.linkedinUrl && (
                          <CardItem
                            translateZ={20}
                            as="a"
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-100 hover:bg-[#0077B5] hover:text-white transition-colors duration-300"
                            aria-label="LinkedIn"
                          >
                            <FaLinkedin className="w-5 h-5" />
                          </CardItem>
                        )}
                      </div>
                    </CardBody>
                  </CardContainer>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <section className="mt-12 bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-white/[0.1]">
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">About HOSCAA</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 mb-4">
              The House of Students Cultural Affairs Association (HOSCAA) at IIT Patna is the primary
              body responsible for managing and promoting cultural activities on campus. It works in
              collaboration with various cultural clubs to ensure a vibrant cultural environment.
            </p>
            <p className="text-gray-300">
              The association is responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
              <li>Organizing and managing cultural events and competitions</li>
              <li>Coordinating between different cultural clubs and societies</li>
              <li>Promoting cultural activities and talent among students</li>
              <li>Facilitating cultural exchange and development programs</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 
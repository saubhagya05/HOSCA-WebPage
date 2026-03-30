"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { StarrySkyBackdrop } from "@/components/StarrySkyBackdrop";

interface CommitteeMember {
  id: number;
  name: string;
  position: string;
  imageUrl?: string;
  email?: string;
  linkedinUrl?: string;
}

const committeeMembers: CommitteeMember[] = [
  {
    id: 1,
    name: "Dr. Ayash Kanto Mukherjee",
    position: "PIC Cultural",
    email: "pic_cultural@iitp.ac.in",
    imageUrl: "/HoscaaCore/Ayash.jpg",
    linkedinUrl: "akm@iitp.ac.in",
  },
  {
    id: 2,
    name: "Kashika Aggarwal",
    position: "General Secretary Cultural",
    email: "kashika_2201cs35@iitp.ac.in",
    imageUrl: "/HoscaaCore/kashika.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/kashika-aggarwal-15b0bb259/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 3,
    name: "Nikhil Pandey",
    position: "Junior Year Secretary",
    email: "nikhil_2301cb30@iitp.ac.in",
    imageUrl: "/HoscaaCore/Nikhil.jpeg",
    linkedinUrl:
      "https://www.linkedin.com/in/nikhil-pandey-319b05368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 4,
    name: "Singu Ashwin Manikanta Chowdary",
    position: "Sophomore Year Secretary",
    email: "singu_2401mm09@iitp.ac.in",
    imageUrl: "/HoscaaCore/ashwin.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/ashwin-chowdary-b5306034a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

export default function GymkhanaCommitteePage() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 px-4 py-12 backdrop-blur-sm sm:px-6 lg:px-10">
      <StarrySkyBackdrop className="absolute inset-0" intensity="subtle" particleQuantity={42} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(148,163,184,0.12),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.10),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.38em] text-slate-400">
            HOSCA Committee
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Leadership
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">
            The leadership team guiding cultural life at IIT Patna, presented in a
            cleaner profile-first layout that fits the site&apos;s starry visual language.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {committeeMembers.map((member) => (
            <article
              key={member.id}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.9)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-300/30 hover:shadow-[0_20px_70px_-30px_rgba(56,189,248,0.45)]"
            >
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-[2rem] border border-white/12 bg-slate-900/80 p-1">
                <div className="relative h-full w-full overflow-hidden rounded-[1.7rem]">
                  {member.imageUrl ? (
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-800 text-4xl text-slate-400">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="mt-2 text-sm italic tracking-wide text-sky-200/75">
                  {member.position}
                </p>
              </div>

              <div className="mt-5 flex justify-center gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {member.email && (
                  <ProfileAction
                    href={`mailto:${member.email}`}
                    label={`Email ${member.name}`}
                  >
                    <FaEnvelope className="h-4 w-4" />
                  </ProfileAction>
                )}
                {member.linkedinUrl && (
                  <ProfileAction
                    href={member.linkedinUrl}
                    label={`LinkedIn ${member.name}`}
                  >
                    <FaLinkedin className="h-4 w-4" />
                  </ProfileAction>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileAction({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const normalizedHref =
    href.startsWith("mailto:") || href.startsWith("http")
      ? href
      : href.includes("@")
        ? `mailto:${href}`
        : href;
  const isEmail = normalizedHref.startsWith("mailto:");

  return (
    <a
      href={normalizedHref}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/25 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300/35 hover:bg-sky-400/15 hover:text-white"
    >
      {children}
    </a>
  );
}

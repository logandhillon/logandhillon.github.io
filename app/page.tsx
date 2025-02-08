"use client";

import siteConfig from "@/config/site";
import { Button } from "@heroui/react";
import { EnvelopeSimple } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Typewriter } from "nextjs-simple-typewriter";

export default function Home() {
  return (
    <>
      <section className="text-center bg-gradient-to-br from-emerald-100 to-purple-100 pt-48 h-screen">
        <div className="mt-48 flex flex-col items-center space-y-5">
          <motion.h2
            initial={{
              y: 48,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-6xl font-bold mx-8"
          >
            Hi, I&apos;m Logan.
          </motion.h2>

          <motion.div
            className="text-lg"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            <Typewriter
              words={siteConfig.hero.words
                .map((value) => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={20}
              deleteSpeed={20}
              delaySpeed={2000}
            />
          </motion.div>

          <motion.div
            initial={{
              y: 192,
              opacity: 0,
            }}
            animate={{
              y: 48,
              opacity: 1,
              transition: {
                delay: 0.75,
                duration: 1.5,
                ease: "anticipate",
              },
            }}
            whileHover={{
              scale: 1.25,
              transition: {
                type: "spring",
                bounce: 0.5,
                duration: 0.5,
              },
            }}
          >
            <Button
              endContent={<EnvelopeSimple weight="fill" size={24} />}
              size="lg"
              color="primary"
              className="w-64 h-16 font-semibold"
              as={Link}
              href={"mailto:" + siteConfig.email}
            >
              Get in touch
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

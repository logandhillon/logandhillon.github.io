"use client";

import { Button, Card, CardFooter, Image } from "@heroui/react";
import { ArrowCircleDown, ArrowCircleUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { FC } from "react";

type ProjectCoverProps = {
  title: string;
  genre: string;
  description: string;
  imgpath: string;
  href: string;
  className?: string;
  imgHeight?: number;
  isDownload?: boolean;
};

const ProjectCover: FC<ProjectCoverProps> = ({
  title,
  genre,
  description,
  imgpath,
  href,
  className,
  imgHeight,
  isDownload,
}) => (
  <div>
    <Card isFooterBlurred className={className}>
      <Image
        removeWrapper
        alt={title + " cover image"}
        src={"/images/proj/" + imgpath}
        isZoomed
        isBlurred
        className="rounded-none object-cover object-top"
        height={imgHeight}
      />
      <CardFooter className="text-white bg-black/30 border-t-1 border-default-600 z-10 justify-between px-6">
        <div className="space-y-1">
          <p className="text-xs uppercase font-bold text-white/50">{genre}</p>
          <h4 className="font-bold text-lg">{title}</h4>
          <p className="text-xs text-white/60">{description}</p>
        </div>
        <Button isIconOnly color="primary" radius="full" as={Link} href={href}>
          {isDownload ? (
            <ArrowCircleDown weight="fill" size={28} />
          ) : (
            <ArrowCircleUpRight weight="fill" size={28} />
          )}
        </Button>
      </CardFooter>
    </Card>
  </div>
);

export default function Page() {
  return (
    <section className="grid grid-cols-3 px-8 py-8 gap-2 min-h-screen bg-gradient-to-br from-purple-800 to-black">
      <ProjectCover
        title="Interactive Periodic Table"
        genre="Web application"
        description="A modern-looking periodic table, right in your browser!"
        imgpath="periodictable.png"
        href="https://logandhillon.github.io/periodic-table/"
        className="bg-gradient-to-tr from-purple-950 to-orange-950"
      />
      <ProjectCover
        title="Internet Communication Exchange (ICX)"
        genre="Desktop application"
        description="IRC: recreated for the 21st century."
        imgpath="icx.png"
        href="https://logandhillon.github.io/icx/"
        className="bg-gradient-to-b from-blue-500 to-green-500"
        imgHeight={384}
        isDownload
      />
    </section>
  );
}

"use client";

import { Button, Card, CardFooter, Image, Skeleton } from "@heroui/react";
import { ArrowCircleUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { FC } from "react";

type ProjectCoverProps = {
  title: string;
  genre: string;
  description: string;
  imgpath: string;
  href: string;
  className?: string;
};

const ProjectCover: FC<ProjectCoverProps> = ({
  title,
  genre,
  description,
  imgpath,
  href,
  className,
}) => (
  <div>
    <Card isFooterBlurred className={className}>
      <Image
        removeWrapper
        alt={title + " cover image"}
        src={"/images/proj/" + imgpath}
        isZoomed
      />
      <CardFooter className="absolute text-white bg-black/30 bottom-0 border-t-1 border-default-600 z-10 justify-between px-6">
        <div className="space-y-1">
          <p className="text-xs uppercase font-bold text-default-400">
            {genre}
          </p>
          <h4 className="font-bold text-lg">{title}</h4>
          <p className="text-xs text-default-400">{description}</p>
        </div>
        <Button isIconOnly color="primary" radius="full" as={Link} href={href}>
          <ArrowCircleUpRight weight="fill" size={28} />
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
        className="bg-black"
      />
    </section>
  );
}

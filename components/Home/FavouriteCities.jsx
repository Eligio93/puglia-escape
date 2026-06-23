import styles from "@/styles/home.module.css";
import bariImg from "@/public/bari.jpg";
import lecceImg from "@/public/lecce.jpg";
import monopoliImg from "@/public/monopoli.jpg";
import polignanoImg from "@/public/polignanoAMare.jpg";
import gallipoliImg from "@/public/gallipoli.jpg";
import ostuniImg from "@/public/ostuni.jpg";
import Image from "next/image";
import Link from "next/link";
import PageSection from "../PageSection";
import PageSectionTitle from "@/components/ui/PageSectionTitle";

export default function FavouriteCities() {
  const favouriteCities = [
    {
      city: "Lecce",
      image: lecceImg,
      alt: "Duomo of Lecce",
      href: "/blog?city=Lecce",
    },
    {
      city: "Monopoli",
      image: monopoliImg,
      alt: "Bay of Monopoli City",
      href: "/blog?city=Monopoli",
    },
    {
      city: "Polignano A Mare",
      image: polignanoImg,
      alt: "High picture of Polignano a Mare",
      href: "/blog?city=Polignano A Mare",
    },
    {
      city: "Gallipoli",
      image: gallipoliImg,
      alt: "Gallipoli",
      href: "/blog?city=Gallipoli",
    },
    {
      city: "Ostuni",
      image: ostuniImg,
      alt: "Ostuni",
      href: "/blog?city=Ostuni",
    },
    {
      city: "Bari",
      image: bariImg,
      alt: "Bari",
      href: "/blog?city=Bari",
    },
  ];
  return (
    <PageSection>
      <div className="flex flex-col items-center gap-3">
        <PageSectionTitle title="Our Favourite Cities" />
        <p className="font-dm-sans text-terracotta text-center text-sm uppercase italic lg:max-w-3/4 lg:text-lg">
          From historic architecture to lively streets and breathtaking views,
          these cities capture the heart of Puglia and offer unique experiences
          that highlight the essence of this remarkable region.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {favouriteCities.map((city) => {
          return (
            <Link
              href={city.href}
              key={city.city}
              className="group relative h-44 overflow-hidden rounded-lg hover:shadow-lg md:h-64"
            >
              <Image
                src={city.image}
                alt={city.alt}
                fill
                className="rounded-lg object-cover transition-transform duration-300 ease-out group-hover:scale-125"
              />
              <p className="font-dm-sans absolute top-4/5 left-0 w-full pl-2 text-sm font-semibold text-white md:text-base">
                {city.city}
              </p>
            </Link>
          );
        })}
      </div>
    </PageSection>
  );
}

import Image from "next/image";
import categoryEatDrinkImage from "@/public/categoryEatDrink.jpg";
import categoryExperienceImage from "@/public/categoryExperience.jpg";
import categoryDiscoverImage from "@/public/categoryDiscover.jpg";
import categoryEventsImage from "@/public/categoryEvents.jpg";
import styles from "@/styles/home.module.css";
import Link from "next/link";
import PageSection from "../PageSection";
import PageSectionTitle from "@/components/ui/PageSectionTitle";

export default function CategoriesContainer() {
  const categories = [
    {
      title: "Eat and Drink",
      image: categoryEatDrinkImage,
      alt: "A dinner table on the beach",
      href: "/blog?category=Eat+And+Drink",
    },
    {
      title: "Experience",
      image: categoryExperienceImage,
      alt: "A person heading to the beach",
      href: "/blog?category=Experience",
    },
    {
      title: "Discover",
      image: categoryDiscoverImage,
      alt: "Trullo at night with stars",
      href: "/blog?category=Discover",
    },
    {
      title: "Events",
      image: categoryEventsImage,
      alt: "Picture of the Polifonic Event in Puglia",
      href: "/blog?category=Events",
    },
  ];
  return (
    <PageSection>
      <div className="flex flex-col items-center gap-3">
       <PageSectionTitle title="  Unveiling the Heart of Puglia" />
        
      
        <p className="font-dm-sans text-terracotta text-center text-sm uppercase italic lg:max-w-3/4 lg:text-lg">
          Discover hidden gems, immerse yourself in unique experiences, and
          explore all that Puglia has to offer. Navigate through authentic
          journeys and unforgettable moments that bring the essence of this
          extraordinary region to life
        </p>
      </div>

      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => {
          return (
            <Link
              href={category.href}
              key={category.title}
              className="relative flex h-80 w-full items-center justify-center overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={category.image}
                alt={category.alt}
                fill
                className="object-cover"
              />
              <p className="text-sand font-source-serif absolute top-7/8 left-0 w-full pl-2 text-xl backdrop-blur-2xl">
                {category.title}
              </p>
            </Link>
          );
        })}
      </div>
    </PageSection>
  );
}

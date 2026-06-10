import Image from "next/image";
import Link from "next/link";
import SearchBar from "./Searchbar";
import pugliaProjectLogo from "@/public/pugliaProjectLogoFull.png";
import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="bg-sand text-dark-blue font-dm-sans sticky top-0 right-0 z-10 flex h-[50px] items-center justify-between md:h-[60px] lg:h-[70px] lg:px-10">
      <Link href="/" className="flex h-full w-auto justify-center p-1">
        <Image
          src={pugliaProjectLogo}
          alt="Logo FromPuglia"
          className="h-full w-auto flex-1"
        />
      </Link>
      <div className="flex items-center gap-20">
        <NavBar variant="desktop" />
        <div className="hidden flex-1 lg:block">
          <SearchBar />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}

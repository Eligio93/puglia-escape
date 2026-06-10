"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SearchBar from "./Searchbar";
import { Menu } from "lucide-react";
import NavBar from "./NavBar";

export default function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuIconRef = useRef();
  const mobileMenuRef = useRef();

  const pathName = usePathname();

  useEffect(() => {
    setOpenMenu(false);
  }, [pathName]);

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (menuIconRef.current.contains(event.target)) {
        return;
      }
      if (openMenu && !mobileMenuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [openMenu]);

  return (
    <div className="h-full lg:hidden">
      <Menu
        onClick={() => setOpenMenu(!openMenu)}
        className="h-full w-auto cursor-pointer p-2 text-dark-blue"
        ref={menuIconRef}
      />
      <NavBar ref={mobileMenuRef} variant="mobile" openMenu={openMenu} />
    </div>
  );
}

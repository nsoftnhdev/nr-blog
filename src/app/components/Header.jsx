"use client";
import { Button, Navbar, TextInput } from "flowbite-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon} from "react-icons/fa";
import React, { useEffect, useState } from "react";

const Header = () => {

  const path = usePathname();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("")
  const searchParams = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlPrarams = new URLSearchParams(searchParams);
    urlPrarams.set("searchTerm", searchTerm)
    const searchQuery = urlPrarams.toString();
    router.push(`/search?${searchQuery}`)
  }

  useEffect(() => {
    const urlPrarams = new URLSearchParams(searchParams);
    const searchTermFromUrl = urlPrarams.get("searchTerm")
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl)
    }
  }, [searchParams])

  return (
    <Navbar className="border-b-2">
      <Link 
        href="/" 
        className="self center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white" 
      >
        <span className="px-2 py-1 bg-gradient-to-r from-teal-500 via-lime-500 to-green-500 rounded-lg text-white">NR&apos;s</span><span className="text-slate-700 font-semibold ml-1">Blog</span>
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput 
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
        <div className="flex gap-2 md:order-2">
          <Button 
            className="w-12 h-12 hidden sm:inline"
            color="gray"
            pill
          >
            <FaMoon />
          </Button>
            <Link href="/sign-in">
              <Button gradientDuoTone="tealToLime" outline>
                Sign In
              </Button>
            </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link href="/">
            <Navbar.Link active={path === "/"} as={"div"}>
              Home
            </Navbar.Link>
          </Link>
          <Link href="/about">
            <Navbar.Link active={path === "/about"} as={"div"}>
              About
            </Navbar.Link>
          </Link>
          <Link href="/projects">
            <Navbar.Link active={path === "/projects"} as={"div"}>
              Projects
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

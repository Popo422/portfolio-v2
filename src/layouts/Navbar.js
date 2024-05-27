"use client";
import { GlobalContext } from "@/context";
import React, { useContext, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BiMenu, BiX } from "react-icons/bi";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page?.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : "text-white"}
  hover:text-yellow transition duration-500
  `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = () => {
  const globalState = useContext(GlobalContext);
  const { selectedPage, setSelectedPage, isTopOfPage } = globalState;
  const [isMenutoggled, setIsMenuToggled] = useState(false);
  const navBarBackground = isTopOfPage ? "" : "bg-red";
  return (
    <nav className={`${navBarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">ZERNIE</h4>
        {/* Desktop Nav */}
        <div className="sm:flex hidden justify-between gap-16 font-opensans text-sm font-semibold">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Skills"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Testimonials"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Contact"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
        <div className="flex sm:hidden">
          <button
            className="rounded-full bg-red p-2 "
            onClick={() => setIsMenuToggled(!isMenutoggled)}
          >
            <BiMenu size={22} />
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenutoggled && (
          <div className="sm:hidden fixed right-0 bottom-0 h-full bg-blue w-[300px] rounded">
            <div className="flex justify-end p-12">
              <button
                className=""
                onClick={() => setIsMenuToggled(!isMenutoggled)}
              >
                <BiX size={22} />
              </button>
            </div>
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

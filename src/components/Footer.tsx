"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaArrowUp,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Footer */}
      <footer id="footer" className="bg-gray-50 py-4 px-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Brand Info */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-black">DevTools</span>
        </Link>
            <p className="text-sm text-gray-800 mt-2 max-w-sm">
              Effortlessly generate SEO-friendly, clean slugs with AI. Supports
              English & Roman Urdu.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-black">
              Quick Links
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="#features" className="hover:text-blue-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-blue-400">
                  Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Social + CTA */}
<div className="text-sm">
  <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white tracking-wide">
    Connect with Us
  </h3>
  <div className="flex space-x-5">
    {/* GitHub */}
    <Link
      href="https://github.com/anila2-1"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30 
                 hover:bg-blue-500 hover:text-white hover:scale-110 hover:shadow-xl 
                 transition-all duration-300 ease-in-out"
      title="GitHub"
    >
      <FaGithub size={22} />
    </Link>

    {/* Twitter */}
    <Link
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30 
                 hover:bg-sky-500 hover:text-white hover:scale-110 hover:shadow-xl 
                 transition-all duration-300 ease-in-out"
      title="Twitter"
    >
      <FaTwitter size={22} />
    </Link>

    {/* LinkedIn */}
    <Link
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30 
                 hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-xl 
                 transition-all duration-300 ease-in-out"
      title="LinkedIn"
    >
      <FaLinkedin size={22} />
    </Link>

    {/* Facebook */}
    <Link
      target="_blank"
      href="https://facebook.com"
      className="p-3 rounded-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30 
                 hover:bg-blue-500 hover:text-white hover:scale-110 hover:shadow-xl 
                 transition-all duration-300 ease-in-out"
      title="Facebook"
    >
      <FaFacebook size={22} />
    </Link>
  </div>
</div>


        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} <Link href="/">DevTools</Link>. Built with
          using Next.js.
        </div>
      </footer>

      {/* Floating Back to Top Button */}
{showButton && (
  <button
    onClick={scrollToTop}
    className="fixed bottom-6 right-6 p-4 rounded-full 
               bg-gradient-to-r from-pink-500 to-purple-600
               text-white shadow-[0_0_15px_#ec4899] 
               hover:shadow-[0_0_0_#7c3aed,0_0_50px_#6366f1] 
               hover:scale-110 transition-all duration-300"
    title="Back to Top"
  >
    <FaArrowUp size={20} className="animate-pulse text-white" />
  </button>
)}




    </>
  );
};

export default Footer;

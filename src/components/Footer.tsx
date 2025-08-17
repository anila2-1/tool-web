"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
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
      <footer className="bg-gray-100 py-12 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-800">

            {/* Brand Info */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  DevTools
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-gray-600 max-w-xs">
                Effortlessly generate SEO-friendly, clean slugs with AI. Supports English & Roman Urdu.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                
                <li>
                  <Link href="/tools" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                    Tools
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social + CTA */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect with Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/anila2-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white shadow-sm hover:shadow-lg 
                               hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-800 
                               hover:text-white transform hover:scale-105 
                               transition-all duration-300 ease-in-out border"
                    title="GitHub"
                  >
                    <FaGithub size={20} />
                  </Link>

                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white shadow-sm hover:shadow-lg 
                               hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-400 
                               hover:text-white transform hover:scale-105 
                               transition-all duration-300 ease-in-out border"
                    title="Twitter"
                  >
                    <FaTwitter size={20} />
                  </Link>

                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white shadow-sm hover:shadow-lg 
                               hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 
                               hover:text-white transform hover:scale-105 
                               transition-all duration-300 ease-in-out border"
                    title="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </Link>

                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white shadow-sm hover:shadow-lg 
                               hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 
                               hover:text-white transform hover:scale-105 
                               transition-all duration-300 ease-in-out border"
                    title="Facebook"
                  >
                    <FaFacebook size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-8 border-gray-200" />

          {/* Copyright */}
          <div className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="font-medium text-gray-800 hover:text-indigo-600 transition">
              DevTools
            </Link>. Built with using Next.js.
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-4 rounded-full 
                     bg-gradient-to-r from-indigo-600 to-purple-600 
                     text-white shadow-lg hover:shadow-2xl 
                     hover:scale-110 active:scale-100 
                     transition-all duration-300 ease-in-out 
                     z-50"
          title="Back to Top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default Footer;
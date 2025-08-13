"use client";

import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaArrowUp,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      id="footer"
      className="bg-white py-4 px-6 sticky top-0 z-50 "
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Brand Info */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-black">DevTool</h2>
          <p className="text-sm text-gray-900 mt-2 max-w-sm">
            Effortlessly generate SEO-friendly, clean slugs with AI. Supports English & Roman Urdu.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2 text-black">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#features" className="hover:text-blue-400">Features</a></li>
            <li><a href="/tools" className="hover:text-blue-400">Tools</a></li>
            {/* <li><a href="#ai-suggestions" className="hover:text-blue-400">AI Tool</a></li> */}
          </ul>
        </div>

        {/* Social + CTA */}
        <div className="text-sm">
          <h3 className="text-lg font-semibold mb-2 text-black">Connect with Us</h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://github.com/anila2-1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800"
              title="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800"
              title="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://facebook.com"
              className="hover:text-gray-800"
              title="Facebook"
            >
              <FaFacebook size={20} />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-900 text-white font-semibold rounded-full transition"
          >
            <FaArrowUp /> Back to Top
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} <Link href="/">DevTools</Link>. Built with using Next.js.
      </div>
    </footer>
  );
};

export default Footer;

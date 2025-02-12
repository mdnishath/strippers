import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#282c33] text-[#ededed] py-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Footer Navigation Links */}
        <div className="mb-6 space-x-8">
          <Link href="/" className="hover:text-red-500">
            Home
          </Link>
          <Link href="/about" className="hover:text-red-500">
            About Us
          </Link>
          <Link href="/faq" className="hover:text-red-500">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-red-500">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:text-red-500">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-red-500">
            Terms of Service
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-6">
          <Link href="https://facebook.com" target="_blank">
            <FaFacebook size={30} className="hover:text-red-500" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <FaInstagram size={30} className="hover:text-red-500" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <FaTwitter size={30} className="hover:text-red-500" />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mb-6">
          <p>Contact us via phone: (555) 123-4567</p>
          <p>Email: support@lastrippers.com</p>
        </div>

        {/* Trust Signals */}
        <div className="text-sm opacity-80">
          <p>
            Secure Booking & Payments | Certified Performers | Customer
            Satisfaction Guaranteed
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

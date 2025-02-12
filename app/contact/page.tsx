"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setSubmitted(true);
  };

  return (
    <section className="bg-[#282c33] text-[#ededed] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side - Contact Form (70%) */}
        <div className="md:col-span-2 bg-[#1f2329] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold mb-6">Get in Touch</h2>
          {submitted ? (
            <p className="text-green-500 text-lg font-semibold">
              ✅ Thank you for your message! We’ll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mt-1 rounded-md bg-[#282c33] border border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 mt-1 rounded-md bg-[#282c33] border border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 mt-1 h-32 rounded-md bg-[#282c33] border border-gray-600 text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Right Side - Contact Info (30%) */}
        <div className="bg-[#1f2329] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold mb-6">Contact Info</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="text-red-500 w-6 h-6" />
              <p className="text-lg">+1 (123) 456-7890</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-red-500 w-6 h-6" />
              <p className="text-lg">contact@yourwebsite.com</p>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-red-500 w-6 h-6" />
              <p className="text-lg">
                123 LA Street,
                <br />
                Los Angeles, CA, 90001
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white transition-colors duration-300">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center bg-gray-100 px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-200 transition-colors"
      >
        <span>{title}</span>
        <FaChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Accordion Content with Smooth Transition */}
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`transition-[max-height] duration-500 ease-in-out overflow-hidden opacity-100`}
      >
        <div className="p-4 bg-white text-gray-700">{children}</div>
      </div>
    </div>
  );
}

import React from "react";

function Footer() {
  return (
    <footer className=" text-center mb-10 text-gray-500 px-3">
      <small className="mb-2 block text-xs">
        &copy; 2024 Nathan All rights reserved.
      </small>
      <p className=" text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}

export default Footer;

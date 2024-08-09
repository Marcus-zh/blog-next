import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "@/interface/common";
import Card from "@/components/Card";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-0 py-4 pointer-events-none">
      <nav>
        <Card className="rounded-3xl bg-zinc-700 opacity-80 px-4 py-0 text-4 shadow-2xl border-1 border-solid border-gray-400 pointer-events-auto">
          <ul className="flex items-center font-semibold text-white list-none">
            {[
              { name: "Home", url: "/" },
              { name: "About", url: "/about" },
              { name: "Contact", url: "/contact" },
            ].map((link) => (
              <NavbarList key={link.url} {...link} />
            ))}
          </ul>
        </Card>
      </nav>
    </header>
  );
}

function NavbarList(link: Link) {
  return (
    <li>
      <a
        className="relative inline-block px-2 py-2 decoration-none color-bluegray"
        href={link.url}
      >
        {link.name}
        <span
          className="absolute left-1 right-1 bottom-[-1px] h-1 bg-blue-500"
          style={{ display: "none" }}
        ></span>
      </a>
    </li>
  );
}

import React from "react";
import { Icon } from "@iconify/react";
import { type LinkProps } from "@/interface/common";
import Card from "@/components/Card";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-0 py-4 pointer-events-none">
      <nav>
        <Card className="rounded-3xl opacity-90 px-4 py-0 text-4 shadow-2xl pointer-events-auto">
          <ul className="flex items-center font-semibold text-zinc-900 dark:text-white list-none">
            {[
              { name: "Home", url: "/" },
              { name: "Friends", url: "/friends" },
              { name: "About", url: "/about" },
            ].map((link) => (
              <NavbarList key={link.url} {...link} />
            ))}
          </ul>
        </Card>
      </nav>
    </header>
  );
}

function NavbarList(link: LinkProps) {
  return (
    <li>
      <Link
        className="relative inline-block p-2"
        href={link.url}
      >
        {link.name}
        <span
          className="absolute left-1 right-1 bottom-[-1px] h-1 bg-blue-500"
          style={{ display: "none" }}
        ></span>
      </Link>
    </li>
  );
}

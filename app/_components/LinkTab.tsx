"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BORDER_RADIUS } from "../_constants/styles";

export const LinkTab = ({ href, title }: { href: string; title: string }) => {
  const pathname = usePathname() || "";
  const className = (
    href === "/" ? pathname === href : pathname.indexOf(href) === 0
  )
    ? "selected"
    : undefined;
  return (
    <>
      <Link
        href={href}
        className={className}
        style={{
          marginRight: "15px",
          padding: `0.5rem`,
          borderRadius: `${BORDER_RADIUS}px`,
        }}
      >
        {title}
      </Link>
    </>
  );
};

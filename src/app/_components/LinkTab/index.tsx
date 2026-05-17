"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";
import { Route } from "next";

export const LinkTab = ({ href, title }: { href: Route; title: string }) => {
  const pathname = usePathname() || "";
  const className = (
    href === "/" ? pathname === href : pathname.indexOf(href) === 0
  )
    ? "selected"
    : undefined;
  return (
    <Link href={href} className={`${styles.wrapper} ${className}`}>
      {title}
    </Link>
  );
};

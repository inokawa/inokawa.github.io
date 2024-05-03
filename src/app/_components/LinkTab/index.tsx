"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";

export const LinkTab = ({ href, title }: { href: string; title: string }) => {
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

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SPACING } from "../constants/styles";

const headerStyle = {
  padding: SPACING,
} as const;

const LinkTab: React.FC<{ href: string; title: string }> = ({
  href,
  title,
}) => {
  const router = useRouter();
  const style = React.useMemo(
    () => ({
      marginRight: 15,
      color: router.pathname === href ? "black" : "gray",
    }),
    [href, router.pathname]
  );
  return (
    <Link href={href}>
      <a style={style}>{title}</a>
    </Link>
  );
};

const Component: React.FC<{}> = () => {
  return (
    <div style={headerStyle}>
      <LinkTab href="/" title="Home" />
      <LinkTab href="/about" title="About" />
      <Link href="https://github.com/n-inokawa">
        <a>
          <img src="/icons/GitHub-Mark-32px.png" alt="GitHub" />
        </a>
      </Link>
    </div>
  );
};

export default Component;

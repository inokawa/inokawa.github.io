import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SPACING } from "../constants/styles";

const headerStyle = {
  display: "flex",
  padding: SPACING,
} as const;

const tabAreaStyle = {
  display: "flex",
  flex: 1,
  alignItems: "center",
} as const;

const iconAreaStyle = {
  display: "flex",
  alignItems: "center",
} as const;

const iconImageStyle = {
  verticalAlign: "middle",
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
      <div style={tabAreaStyle}>
        <LinkTab href="/" title="Home" />
        <LinkTab href="/about" title="About" />
        <LinkTab href="/blog" title="Blog" />
      </div>
      <div style={iconAreaStyle}>
        <Link href="//github.com/n-inokawa">
          <a>
            <img
              style={iconImageStyle}
              src="/icons/GitHub-Mark-32px.png"
              alt="GitHub"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Component;

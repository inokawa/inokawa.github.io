import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { SPACING, BORDER_RADIUS } from "../../constants/styles";

const LinkTab = ({ href, title }: { href: string; title: string }) => {
  const router = useRouter();
  const className = useMemo(
    () =>
      (
        href === "/"
          ? router.pathname === href
          : router.pathname.indexOf(href) === 0
      )
        ? "selected"
        : undefined,
    [href, router.pathname]
  );

  return (
    <>
      <Link
        href={href}
        className={className}
        style={{
          marginRight: "15px",
          padding: `${SPACING / 2}px`,
          borderRadius: `${BORDER_RADIUS}px`,
        }}
      >
        {title}
      </Link>
    </>
  );
};

export default () => {
  return (
    <div className="header">
      <div className="tab-area">
        <LinkTab href="/" title="Home" />
        <LinkTab href="/about" title="About" />
        <LinkTab href="/posts" title="Posts" />
      </div>
      <style jsx>
        {`
          .header {
            position: sticky;
            top: 0px;
            display: flex;
            padding-top: ${SPACING * 2}px;
            padding-bottom: ${SPACING * 2}px;
            background: linear-gradient(
              to top,
              rgba(255, 255, 255, 0),
              #fff 50%
            );
          }
          .tab-area {
            display: flex;
            flex: 1;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SPACING, COLOR, BORDER_RADIUS, TRANSITION } from "../../constants/styles";

const LinkTab: React.FC<{ href: string; title: string }> = ({
  href,
  title,
}) => {
  const router = useRouter();
  const className = React.useMemo(
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
    <Link href={href}>
      <a className={className}>
        {title}
        <style jsx>{`
          a {
            color: ${COLOR.GRAY};
            margin-right: 15px;
            padding: ${SPACING / 2}px;
            border-radius: ${BORDER_RADIUS}px;

            transition: ${TRANSITION};
          }
          a.selected,
          a:hover {
            color: ${COLOR.PRIMARY};
          }
        `}</style>
      </a>
    </Link>
  );
};

const Component: React.FC<{}> = () => {
  return (
    <div className="header">
      <div className="tab-area">
        <LinkTab href="/" title="Home" />
        <LinkTab href="/about" title="About" />
        <LinkTab href="/blog" title="Blog" />
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

export default Component;

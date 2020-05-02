import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SPACING, COLOR } from "../../constants/styles";

const LinkTab: React.FC<{ href: string; title: string }> = ({
  href,
  title,
}) => {
  const router = useRouter();
  const style = React.useMemo(
    () => ({
      marginRight: 15,
      color: router.pathname === href ? COLOR.BLACK : COLOR.GRAY,
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

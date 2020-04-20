import Link from "next/link";
import { SPACING } from "../constants/styles";

const headerStyle = {
  padding: SPACING,
} as const;

const linkStyle = {
  marginRight: 15,
} as const;

const LinkTab: React.FC<{ href: string; title: string }> = ({
  href,
  title,
}) => {
  return (
    <Link href={href}>
      <a style={linkStyle}>{title}</a>
    </Link>
  );
};

const Component: React.FC<{}> = () => {
  return (
    <div style={headerStyle}>
      <LinkTab href="/" title="Home" />
      <LinkTab href="/about" title="About" />
    </div>
  );
};

export default Component;

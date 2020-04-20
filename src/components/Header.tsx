import Link from "next/link";
import { SPACING } from "../constants/styles";

const headerStyle = {
  padding: SPACING,
} as const;

const linkStyle = {
  marginRight: 15,
} as const;

const Component: React.FC<{}> = () => (
  <div style={headerStyle}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Component;

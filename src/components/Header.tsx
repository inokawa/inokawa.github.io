import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Component: React.FC<{}> = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Component;

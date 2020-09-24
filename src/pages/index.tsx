import { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <>
      <div>
        source code is available{" "}
        <Link href={"//github.com/inokawa/inokawa.github.io"}>
          <a>here</a>
        </Link>
        .
      </div>
    </>
  );
};

export default Page;

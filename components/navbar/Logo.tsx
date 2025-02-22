import Link from "next/link";
import { Button } from "../ui/button";
import { VscCode } from "react-icons/vsc";

const Logo = () => {
  return (
    <Button size="icon" className="w-12 h-12" asChild>
      <Link href="/">
        <VscCode style={{ width: "2rem", height: "2rem" }} />
      </Link>
    </Button>
  );
};
export default Logo;

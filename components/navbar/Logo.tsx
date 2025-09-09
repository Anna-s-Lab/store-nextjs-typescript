import { Link } from "lucide-react";
import React from "react";
import { MdLocalGroceryStore } from "react-icons/md";
import { Button } from "../ui/button";
function Logo() {
  return (
    <Button asChild>
      <Link href="/">
        <MdLocalGroceryStore className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;

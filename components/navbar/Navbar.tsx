import { Suspense } from "react";
import Container from "../global/Container";
import CardButton from "./CardButton";
import DarkMode from "./DarkMode";
import LinksDropDown from "./LinksDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";

function Navbar() {
  return (
    <nav className="border-b">
      {" "}
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <CardButton />
          <DarkMode />
          <LinksDropDown />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;

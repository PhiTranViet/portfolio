import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-58/20">
      <div className="container mx-auto justify-betweem items-center">
        {/*Logo*/}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Phi Tran<span className="text-accent">.</span>
          </h1>
        </Link>
        {/*Desktop nav*/}
        <div className="hidden xl:flex item-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/*Mobie nav*/}
        <div className="xl:hiden"></div>
      </div>
    </header>
  );
};

export default Header;

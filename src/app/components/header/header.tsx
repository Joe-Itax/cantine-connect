import Logo from "@/components/logo";
import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";

export default function Header() {
  return (
    <header className="w-full bg-transparent absolute top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <NavDesktop className="hidden sm:flex" />
        <NavMobile className="sm:hidden" />
      </div>
    </header>
  );
}

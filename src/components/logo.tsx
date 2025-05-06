import Link from "next/link";
import { LinkIcon } from "lucide-react";

interface LogoProps {
  className?: string;
  classNameTxt?: string;
}

export default function Logo({ className, classNameTxt }: LogoProps) {
  return (
    <Link
      href="/"
      className={`logo-cantine-connect select-none text-xl font-extrabold flex justify-center items-center gap-1 text-primary ${className}`}
    >
      <LinkIcon className="size-8" />
      <span className={`text-xl font-bold text-white ${classNameTxt}`}>
        Cantine Connect
      </span>
    </Link>
  );
}

import Link from "next/link";
import { PropsNavLink } from "../../../typescript/interface/props.interface";

export default function NavbarLink(props: PropsNavLink) {
  return (
    <Link
      href={`${props.href}`}
      className="hover:text-red-600 cursor-pointer  transition-all hover:duration-500"
    >
      {props.text}{" "}
    </Link>
  );
}

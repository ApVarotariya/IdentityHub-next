import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="font-aeonik text-[16px] leading-[18px] md:text-[18px] md:leading-[20px] lg:text-[20px] lg:leading-[20px] block text-[#CAD1E9] md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;

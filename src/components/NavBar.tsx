import React from "react";
import {
  Navbar,
  Collapse,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

function NavList() {
  const defaultProps = {
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    onResize: () => {},
    onResizeCapture: () => {},
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#journey", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      {navItems.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-colors duration-200"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
  const defaultProps = {
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    onResize: () => {},
    onResizeCapture: () => {},
  };

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      className="mx-auto max-w-full px-6 py-4 bg-ink border-0 border-b border-gray-800 shadow-none rounded-none"
      {...defaultProps}
      placeholder=""
    >
      <div className="flex items-center justify-between">
        <a href="#" className="font-space-grotesk font-bold text-lg text-white tracking-tight hover:text-crimson transition-colors duration-200">
          Kunal Tolani
        </a>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-gray-300 hover:text-white lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          {...defaultProps}
          placeholder=""
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="pt-4 pb-2">
          <NavList />
        </div>
      </Collapse>
    </Navbar>
  );
}

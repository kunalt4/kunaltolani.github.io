import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { HandwrittenHeading } from "./HandwrittenHeading";
 
function NavList() {
  const defaultProps = {
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    onResize: () => {},
    onResizeCapture: () => {},
  };

  const navItems = [
    { href: "#about", label: "About", icon: "person_outline" },
    { href: "#journey", label: "Journey", icon: "timeline" },
    { href: "#contact", label: "Contact", icon: "mail" },
  ];

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item) => (
        <Typography
          key={item.href}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
          {...defaultProps}
          placeholder=""
        >
          <a 
            href={item.href} 
            className="flex items-center gap-2 text-primary-60 hover:text-primary-50 transition-colors duration-300 group"
          >
            <span className="material-icons text-accent-50 text-lg group-hover:rotate-12 transition-transform duration-500">{item.icon}</span>
            <HandwrittenHeading size="small" className="transform hover:rotate-[0.5deg] transition-transform duration-300">
              {item.label}
            </HandwrittenHeading>
          </a>
        </Typography>
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
      className="mx-auto max-w-screen-xl px-6 py-3 bg-surface-container-high/80 backdrop-blur-md border-0 shadow-level2" 
      {...defaultProps}
      placeholder=""
    >
      <div className="flex items-center justify-between text-primary-60">
        <HandwrittenHeading 
          size="medium"
          className="mr-4 cursor-pointer py-1.5 bg-clip-text text-transparent bg-gradient-to-r from-primary-60 via-primary-70 to-primary-80 hover:scale-105 transition-transform duration-300 font-bold"
        >
          Kunal Jagdeep Tolani
        </HandwrittenHeading>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-primary-60 hover:bg-primary-50/10 focus:bg-primary-50/10 active:bg-primary-50/10 lg:hidden"
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
        <NavList />
      </Collapse>
    </Navbar>
  );
}
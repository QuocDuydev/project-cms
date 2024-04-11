import { useContext, useState, useEffect } from "react";
import {
  Navbar, Collapse, Typography, Button,
  MenuItem, Input, IconButton,

} from "@material-tailwind/react";
import {
  Bars2Icon,
} from "@heroicons/react/24/solid";

import Cart from "../cart";
import ProfileMenu from "./profilemenu";


const navListItems = [
  {
    label: "SALE OFF 50%",
  },
  {
    label: "MAN",
  },
  {
    label: "WOMEN",
  },
  {
    label: "CHILDREN",
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label }) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
      <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center mb-auto">
        <div className="relative w-full gap-2 md:w-max">
          <Input
            type="search"
            color="black"
            className="rounded text-xl"
            containerProps={{
              className: "min-w-[250px] ",
            }}
          />
        </div>
        <Button
          size="sm"
          className="mt-1 rounded-lg sm:mt-0 bg-black"
        >
          Search
        </Button>
      </div>
    </ul>
  );
}

export default function Navbars({setOpenPopover, openPopover, triggers, cart, handleQuantityChange, quantities, totalPrice}) {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);


  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  return (
    <Navbar className="sticky top-0 z-10 mx-auto max-w-screen-3xl p-2 rounded-none lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-bold text-red-500"
        >
          E-Commerce
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        <Cart setOpenPopover={setOpenPopover} openPopover={openPopover} triggers={triggers} cart={cart} handleQuantityChange={handleQuantityChange} quantities={quantities} totalPrice={totalPrice} />

        <ProfileMenu />
        
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
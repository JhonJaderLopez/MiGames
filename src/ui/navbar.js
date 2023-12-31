import React from 'react'

import {
Navbar,
Collapse,
Typography,
IconButton,
} from "@material-tailwind/react";
//import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
  
function NavList() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
            
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a href="/" className="flex items-center hover:text-blue-500 transition-colors">
            HOME
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a href="/addProduct" className="flex items-center hover:text-blue-500 transition-colors">
            LISTA
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a href="/login" className="flex items-center hover:text-blue-500 transition-colors">
            LOGIN
          </a>
        </Typography>
      </ul>
    );
  }

const navbar = ()=> {
    return (
        <Navbar className="mx-auto max-w-screen-xl px-6 py-3 sticky top-0 z-50">
        <div className="flex items-center justify-between text-blue-gray-900 ">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
          >
            MIGAMES
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
          >
          </IconButton>
        </div>
        <Collapse>
          <NavList />
        </Collapse>
      </Navbar>
    )
}

export default navbar
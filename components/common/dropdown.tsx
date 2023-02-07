import { Menu, Transition } from "@headlessui/react";
import * as React from "react";
import {
  Fragment,
  useEffect,
  useRef,
  useState,
  MutableRefObject,
  Ref,
} from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type dropdown = {
  title: string;
  links: Array<links>;
  bg_color: string;
  txt_color: string;
};

type links = {
  href: string;
  label: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  color: string;
};

export default function DropDown({
  title,
  links,
  bg_color,
  txt_color,
}: dropdown) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={`inline-flex w-full justify-center rounded-md ${bg_color} bg-opacity-60 px-4 py-2 text-sm font-medium ${txt_color} hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            {title ? title : "Click Me"}
            <ChevronDownIcon
              className={`ml-2 -mr-1 h-5 w-5 ${txt_color} hover:text-violet-100`}
              aria-hidden="true"
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {links.map((link) => (
                <div className="px-1 py-1" key={link.label}>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href={link.href}
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <link.icon
                          className={`h-4 w-4 flex-shrink-0 ${link.color}`}
                          aria-hidden="true"
                        />
                        <span
                          className={`px-2 text-center mb-px ${link.color}`}
                        >
                          {link.label}
                        </span>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

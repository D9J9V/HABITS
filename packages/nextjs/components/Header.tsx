import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ArrowRightOnRectangleIcon,
  AtSymbolIcon,
  Bars3Icon,
  Cog6ToothIcon,
  DocumentMagnifyingGlassIcon,
  PencilSquareIcon,
  TrophyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      passHref
      className={`${
        isActive ? "bg-secondary shadow-md" : ""
      } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
    >
      {children}
    </Link>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );
  const settingsMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    settingsMenuRef,
    useCallback(() => setIsSettingsOpen(false), []),
  );

  const navLinks = (
    <>
      <li>
        <NavLink href="/">
          <PencilSquareIcon className="h-4 w-4" />
          NEW ENTRY
        </NavLink>
      </li>
      <li>
        <NavLink href="/explore">
          <DocumentMagnifyingGlassIcon className="h-4 w-4" />
          EXPLORE
        </NavLink>
      </li>
      <li>
        <NavLink href="/community">
          <AtSymbolIcon className="h-4 w-4" />
          COMMUNITY
        </NavLink>
      </li>
      <li>
        <NavLink href="/trophies">
          <TrophyIcon className="h-4 w-4" />
          TROPHIES
        </NavLink>
      </li>
    </>
  );
  const settingsLinks = (
    <>
      <li>
        <NavLink href="/login">
          <ArrowRightOnRectangleIcon className="h-4 w-4" />
          LOGIN
        </NavLink>
      </li>
      <li>
        <NavLink href="/settings">
          <Cog6ToothIcon className="h-4 w-4" />
          SETTINGS
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              {navLinks}
            </ul>
          )}
        </div>
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex relative w-12 h-10">
            <Image alt="HABITS" src="/logo.png" width={40} height={100} />
          </div>
        </Link>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>
      <div className="navbar-end flex-grow mr-4 relative">
        <div className="dropdown" ref={settingsMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isSettingsOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsSettingsOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <UserIcon className="h-1/2" />
          </label>
          {isSettingsOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content absolute right-0 mt-3 p-2 shadow bg-base-100 rounded-box w-25"
              onClick={() => {
                setIsSettingsOpen(false);
              }}
            >
              {settingsLinks}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

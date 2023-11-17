import { useState } from 'react';
import { Navbar as NavbarNui, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const path = usePathname();

  const pageList = [
    { link: '/film', name: 'Film' },
    { link: '/people', name: 'People' },
    { link: '/planet', name: 'Planet' },
  ];

  return (
    <div>
      <div className="w-screen h-2 bg-gradient-to-r from-yellow-400 to-yellow-200"></div>
      <NavbarNui onMenuOpenChange={setIsMenuOpen} className="bg-black">
        <NavbarContent className="">
          <NavbarBrand>
            <Link href={'/'}>
              <p className={classNames('font-starwars text-2xl', path === '/' && 'text-primary')}>STAR WARS</p>
            </Link>
          </NavbarBrand>
          <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {pageList.map(({ link, name }) => (
            <NavbarItem key={name}>
              <Link href={link} className={classNames(path === link && 'text-primary ', 'font-semibold')}>
                {name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarMenu className="bg-black">
          {pageList.map(({ link, name }) => (
            <NavbarItem key={name}>
              <Link href={link} className={classNames(path === link && 'text-primary ', 'font-semibold')}>
                {name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarMenu>
      </NavbarNui>
    </div>
  );
}

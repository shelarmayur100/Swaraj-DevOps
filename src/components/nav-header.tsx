'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Code2, Github, Linkedin, Menu } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function NavHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline sm:inline-block">
              DevOps Portfolio
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === item.href ? 'text-primary' : 'text-foreground/60'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/swarajsirsat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-foreground/80 hover:text-primary transition-colors" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/swaraj-sirsat-925440205"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-foreground/80 hover:text-primary transition-colors" />
              </Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-6 text-lg font-medium mt-8">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          'transition-colors hover:text-primary',
                          pathname === item.href
                            ? 'text-primary'
                            : 'text-foreground'
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="absolute bottom-6 left-6 flex space-x-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link
                      href="https://github.com/swarajsirsat"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link
                      href="https://linkedin.com/in/swaraj-sirsat-925440205"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

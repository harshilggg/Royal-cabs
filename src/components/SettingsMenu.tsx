
'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Languages, Moon, Settings, Sun } from 'lucide-react';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

export function SettingsMenu() {
  const pathname = usePathname();
  const locale = useLocale();
  const { setTheme } = useTheme();

  const switchLocale = (nextLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    window.location.assign(newPath);
  };
  
  const localeNames: Record<string, string> = {
    en: 'English',
    hi: 'हिंदी',
    mr: 'मराठी',
    gu: 'ગુજરાતી',
    rj: 'राजस्थानी',
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Languages className="mr-2 h-4 w-4" />
            <span>{localeNames[locale] || 'Language'}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem onClick={() => switchLocale('en')}>
              English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => switchLocale('hi')}>
              हिंदी
            </DropdownMenuItem>
             <DropdownMenuItem onClick={() => switchLocale('mr')}>
              मराठी
            </DropdownMenuItem>
             <DropdownMenuItem onClick={() => switchLocale('gu')}>
              ગુજરાતી
            </DropdownMenuItem>
             <DropdownMenuItem onClick={() => switchLocale('rj')}>
              राजस्थानी
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

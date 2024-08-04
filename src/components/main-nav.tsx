'use client';

import React from 'react';

import Link from 'next/link';

import { LogoIcon } from './icons/logo';

export default function MainNav() {
  return (
    <Link href="/" className="font-semibold text-lg gap-2 flex items-center">
      <LogoIcon />
      <span className="flex-row leading-[18px]">
        IndieHacker<span className="text-emerald-500">Story</span>
      </span>
    </Link>
  );
}

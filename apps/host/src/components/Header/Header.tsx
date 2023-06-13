import NextLink from 'next/link';

export function Header() {
  return (
    <header className="header">
      <NextLink href="/"> Host</NextLink>
    </header>
  );
}

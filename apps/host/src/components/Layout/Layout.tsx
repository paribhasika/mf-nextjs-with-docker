import { PropsWithChildren } from 'react';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import { Header } from '../Header';

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Host</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Container maxWidth="1440">{children}</Container>
      </main>
    </>
  );
}

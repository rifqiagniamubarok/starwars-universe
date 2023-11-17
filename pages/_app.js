import '@/styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextNProgress color="#FACC14" height={2} showOnShallow={true} />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

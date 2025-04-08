import React from 'react';
import Head from '@docusaurus/Head';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function TinaAdmin() {
  const isBrowser = useIsBrowser();

  // 只在浏览器环境中加载 TinaCMS
  if (!isBrowser) {
    return null;
  }

  return (
    <>
      <Head>
        <script src="/admin/index.js" defer />
      </Head>
    </>
  );
}
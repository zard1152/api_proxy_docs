import React from 'react';
import Layout from '@theme-original/Layout';
import type {Props} from '@theme/Layout';
import TinaAdmin from '@site/src/components/TinaCMS/TinaAdmin';

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <>
      <Layout {...props} />
      <TinaAdmin />
    </>
  );
}
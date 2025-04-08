import React from 'react';
import clsx from 'clsx';
import {useDocRouteMetadata} from '@docusaurus/theme-common/internal';
import Layout from '@theme-original/DocItem/Layout';
import type {Props} from '@theme/DocItem/Layout';
import EditButton from '@site/src/components/TinaCMS/EditButton';

export default function LayoutWrapper(props: Props): JSX.Element {
  const routeMetadata = useDocRouteMetadata();

  return (
    <>
      <Layout {...props} />
      <div className="edit-button-container" style={{ textAlign: 'right', padding: '20px' }}>
        <EditButton />
      </div>
    </>
  );
}
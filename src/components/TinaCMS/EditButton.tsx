import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';

export default function EditButton() {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  
  // 检查是否启用了 TinaCMS
  const enableTinaCMS = siteConfig.customFields?.enableTinaCMS;
  
  if (!enableTinaCMS) {
    return null;
  }

  // 构建编辑链接
  const currentPath = location.pathname;
  let editUrl = `/admin/#/~/`;
  
  if (currentPath.startsWith('/blog/')) {
    editUrl += `blog/${currentPath.replace('/blog/', '')}`;
  } else {
    // 默认为文档页面
    editUrl += `docs/${currentPath === '/' ? 'intro' : currentPath.replace('/', '')}`;
  }

  return (
    <Link
      className="button button--secondary"
      to={editUrl}
    >
      ✏️ 编辑此页
    </Link>
  );
}
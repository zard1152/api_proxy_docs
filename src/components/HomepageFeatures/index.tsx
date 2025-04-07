// import type {ReactNode} from 'react';
import React, {useEffect} from 'react';
import {useHistory} from '@docusaurus/router';

// import clsx from 'clsx';
// import Heading from '@theme/Heading';
// import styles from './styles.module.css';


export default function Home() {
  const history = useHistory();
  
  useEffect(() => {
    // 重定向到你想要的文档页面
    history.replace('/intro');
  }, [history]);
  
  // 返回空内容，因为页面会立即重定向
  return null;
}

// type FeatureItem = {
//   title: string;
//   Svg: React.ComponentType<React.ComponentProps<'svg'>>;
//   description: ReactNode;
// };

// const FeatureList: FeatureItem[] = [
//   {
//     title: 'Easy to Use',
//     Svg: require('@site/static/img/logo.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: require('@site/static/img/logo.svg').default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: require('@site/static/img/logo.svg').default,
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

// function Feature({title, Svg, description}: FeatureItem) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default function HomepageFeatures(): ReactNode {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

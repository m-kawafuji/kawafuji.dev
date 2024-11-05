import type { MDXRemoteProps } from 'next-mdx-remote/rsc';
import Link from './Link';

const components: MDXRemoteProps['components'] = {
  a: Link,
};

export default components;

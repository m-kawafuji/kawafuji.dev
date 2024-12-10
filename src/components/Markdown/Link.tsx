import NextLink from 'next/link';

export default function Link({
  href,
  ...props
}: React.JSX.IntrinsicElements['a']) {
  if (href?.startsWith('/')) {
    return <NextLink href={href} {...props} />;
  }

  return <a href={href} target="_blank" {...props} />;
}

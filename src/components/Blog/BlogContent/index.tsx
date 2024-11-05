import styles from './index.module.scss';

export default function BlogContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={styles.container}>{children}</section>;
}

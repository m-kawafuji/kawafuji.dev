export default function Container({ children }: { children: JSX.Children }) {
  return <div class="mx-auto px-4 max-w-3xl">{children}</div>;
}

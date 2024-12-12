---
title: Subscribing Media Query Changes in React using useSyncExternalStore
date: 2024-12-12
---

In this post, I walk you through how to subscribe a media query change in React creating a custom hook called `useMediaQuery` hook using `useSyncExternalStore` hook.

## What is useSyncExternalStore

Since React 18, `useSyncExternalStore` is available to subscribe external stores outside React. We can also levaledge this hook to subscribe changes caused by browser APIs.

## Create useMediaQuery hook

Assume that you're using TypeScript. `useMediaQuery` takes a media query string as an argument and returns a `boolean` value whether if a media query string matches and also returns `undefined` if `window` is not available.

```typescript
// useMediaQuery.ts
import { useSyncExternalStore } from 'react';

export default function useMediaQuery(mediaQueryString: string) {
  // The logic goes here.
}
```

`useSyncExternalStore` accepts three arguments.

- The first argument is the `subscribe` function that subscribes the external store changes. It accepts a callback as an argument that will be called when the store changes.
- The second argument is the `getSnapshot` function that gets and returns the value as the `subscribe`'s callback is called.
- The third argument is the `getServerSnapshot` function that returns the initial value to be set during the hydration and can be omitted if the components that use this hook are fully rendered on the client.

For more details, read [the API reference](https://react.dev/reference/react/useSyncExternalStore).

```tsx
import { useCallback, useRef, useSyncExternalStore } from 'react';

export default function useMediaQuery(mediaQueryString: string) {
  const mediaQueryListRef = useRef<MediaQueryList>();

  const subscribe = useCallback(
    (callback: () => void) => {
      mediaQueryListRef.current = window.matchMedia(mediaQueryString);
      mediaQueryListRef.current.addEventListener('change', callback);
      return () => {
        mediaQueryListRef.current?.removeEventListener('change', callback);
      };
    },
    [mediaQueryString],
  );

  return useSyncExternalStore(
    subscribe,
    () => mediaQueryListRef.current && mediaQueryListRef.current.matches,
    () => undefined,
  );
}
```

Note that the `subscribe` function is wrapped by `useCallback` hook to prevent the unnecessary re-subscribing.

## Conclusion

Admittedly, `useMediaQuery` hook can be written without `useSyncExternalStore`. For example we can either write `useMediaQuery` using `useEffect` and `useState` which are familiar with a majority of developers.

However, nowadays we're getting more opportunities to render React component on the server or at the build time such as Next.js, Remix and Astro. Therefore, returning both the client and the server snapshots explicitly from `useSyncExternalStore` is more cleaner IMO.

Here is [the demo repository](https://github.com/m-kawafuji/use-syncexternalstore-demo).

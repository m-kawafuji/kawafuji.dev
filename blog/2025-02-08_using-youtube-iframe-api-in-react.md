---
title: Using YouTube IFrame API in React
---

As you know, videos on YouTube can be embedded on your websites. Furthermore,
you can use IFrame API provided by YouTube to be gained granular controls for
those videos, even in React projects.

## Type Definitions for IFrame API

Before get into the React code, I'd highly recommend to set up TypeScript to
safely use this API. Type Definitions for this API is available on
[npm](https://www.npmjs.com/package/@types/youtube).

```bash
npm install --save-dev @types/youtube
```

After you install this package, the `YT` namespace is globally available on your
TypeScript project and the player object is instantiated with `YT.Player`.

## The Context Provider

To ensure that IFrame API code is loaded before player objects are created, you
need to tell every `<YouTubePlayer>` components the API code is loaded.

There are two state variables called `isMounted` and `isApiReady`.

The `onYouTubeIframeAPIReady` function is called when the IFrame API is ready to
be used. The `isApiReady` is set to `true` inside this function.

The `isMounted` is set to `true` simultaneously with the definition of the
`onYouTubeIframeAPIReady` function, because the API code expects that the
`onYouTubeIframeAPIReady` function is defined in advance.

The `YouTubeContext` can be a provider of itself in React 19.

```tsx
// YouTubeProvider.tsx
"use client";

import { createContext, useEffect, useState } from "react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady(): void;
  }
}

export const YouTubeContext = createContext({
  isApiReady: false,
});

export function YouTubeProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isApiReady, setIsApiReady] = useState(false);

  useEffect(() => {
    window.onYouTubeIframeAPIReady = () => {
      setIsApiReady(true);
    };
    setIsMounted(true);
  }, []);

  return (
    <YouTubeContext value={{ isApiReady }}>
      {isMounted && <script src="https://www.youtube.com/iframe_api" async />}
      {children}
    </YouTubeContext>
  );
}
```

Note that in React 19, the `<script>` can be located everywhere in your app, and
the `<script>` will be shifted inside a `<head>`. React de-duplicates `<script>`
elements if the `src` and the `async={true}` props are passed.

## The Player Component

Let's create the `<YouTubePlayer>` component!

### Exposing Functions regarding a Playback.

To control the playback of videos, the `playVideo` function and the `pauseVideo`
function need to called in parent components of the `<YouTubePlayer>` component.
One of approaches is making these functions are available via the `ref`.

The `useImperativeHandle` hook is used to expose the `playVideo` function and
the `pauseVideo` function outside the component. The `useImperativeHandle` hook
can customize the `ref` object.

The player object is created if the `isApiReady` is set to `true`.

Since React 19, we can pass `ref` as a prop without `forwardRef`, and consume a
context with `use` rather than `useContext` hook.

```tsx
// YouTubePlayer.tsx
import { use, useEffect, useImperativeHandle, useRef } from "react";
import { YouTubeContext } from "@/providers/YouTubeProvider";

interface YouTubePlayer {
  playVideo(): void;
  pauseVideo(): void;
}

export default function YouTubePlayer({
  ref,
  options,
}: {
  ref: React.RefObject<YouTubePlayer | null>;
  options: YT.PlayerOptions;
}) {
  const { isApiReady } = use(YouTubeContext);
  const playerRef = useRef<YT.Player | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isApiReady) return;
    if (!elementRef.current) return;

    playerRef.current = new YT.Player(elementRef.current, options);

    return () => {
      playerRef.current?.destroy();
    };
  }, [isApiReady, options]);

  useImperativeHandle(ref, () => {
    return {
      playVideo() {
        playerRef.current?.playVideo();
      },
      pauseVideo() {
        playerRef.current?.pauseVideo();
      },
    };
  }, []);

  return <div ref={elementRef} />;
}
```

## Using the Player Component.

Finally, you can use `<YouTubePlayer>` component, and control the video playback
via the `ref` object.

```tsx
"use client";

import { useRef } from "react";
import YouTubePlayer from "@/components/YouTubePlayer";

export default function Home() {
  const playerRef = useRef<React.ComponentRef<typeof YouTubePlayer>>(null);

  return (
    <main>
      <h1>YouTube IFrame Player API</h1>
      <YouTubePlayer
        ref={playerRef}
        options={{
          videoId: "T_WSXXPQYeY",
          playerVars: { origin: "http://localhost:3000" },
        }}
      />
      <button type="button" onClick={() => playerRef.current?.playVideo()}>
        Play
      </button>
      <button type="button" onClick={() => playerRef.current?.pauseVideo()}>
        Pause
      </button>
    </main>
  );
}
```

The example code is
[here](https://github.com/m-kawafuji/youtube-iframe-player-api-demo/tree/main).

For more information about IFrame API, please read
[the API reference](https://developers.google.com/youtube/iframe_api_reference).

---
title: "Nextjs Web app for the intersect"
description: "The Nextjs App for the intersect   I'll quickly use a template to create the nextjs app with..."
slug: "nextjs-web-app-for-the-intersect-26d1"
publishedAt: "2021-06-09T21:21:47.889Z"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9e9ndie2gdzgdxe05zin.jpg"
readingTime: 2
canonicalUrl: "https://www.navinkodag.com/blog/nextjs-web-app-for-the-intersect-26d1"
tags:
  - nextjs
  - typescript
  - tailwindcss
---

## The Nextjs App for the intersect

I'll quickly use a template to create the nextjs app with basic setup
with `Typescript`, `Tailwind` support because css is boring.

```
git clone https://github.com/100lvlmaster/nextjs-tailwind-typescript-starter.git
```

```
cd nextjs-tailwind-typescript-starter
```

```
yarn
```

This will give all the required tools already setup. So that we can get the app up and running in no time

- You can use your preferred method for making a Http GET request but I'm using axios in this one.

```typescript
# lib/get_search.ts
import axios, { AxiosRequestConfig } from "axios";

export const getImages = async (searchString: string) => {
  const config: AxiosRequestConfig = {
    params: { q: searchString },
    headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY },
    // Authorization header we set in the server
  };
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/search`,
    config
  );
  return data.data;
};

//
```

- We'll also create a flash-screen component

```typescript
# /components/flash_screen.tsx
import { useEffect, useState } from "react";

const FlashScreen = (props) => {
  const [currImage, setImage] = useState(0);
  //
  const toggleImages = async (index: number, pass: number) => {
    if (index < props.images.length) {
      setImage(index);
      await new Promise((resolve) => setTimeout(resolve, 100));
      return toggleImages(++index, pass);
    }
    if (props.images.length < 70 && pass < 2) {
      return toggleImages(0, ++pass);
    }
    props.onEnd();
    return;
  };
  //
  useEffect(() => {
    toggleImages(0, 1);
  }, []);
  return (
    <div className="h-screen w-full flex-grow flex flex-col justify-items-center items-center bg-black">
      {props.images.map((e: string, index: number) => (
        <img
          className={"w-full object-cover h-full".concat(
            index == currImage ? " " : " hidden"
          )}
          key={index}
          src={e}
        ></img>
      ))}
    </div>
  );
};

export default FlashScreen;

```

- And finally the `index.tsx`

```typescript
# pages/index.tsx
import { useState } from "react";
import { getImages } from "../lib/get_images";
import FlashScreen from "../components/flash_screen";
import NextHead from "next/head";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [showImages, setShowImages] = useState(false);
  let query: string = "";
  //
  const onSubmitButton = async () => {
    setLoading(true);
    const data = await getImages(query);
    setImages(data.data);
    setShowImages(true);
  };

  /// Call on mount
  const handleChangeEvent = (e: any) => (query = e.target.value);
  return (
    <div className="bg-black text-white">
      {showImages ? (
        <FlashScreen
          images={images}
          onEnd={() => {
            setShowImages(false);
            setImages([]);
            setLoading(false);
          }}
        ></FlashScreen>
      ) : (
        <div className="flex flex-col">
          <div className="h-screen w-full flex flex-col justify-items-stretch ">
            <Spacer />
            {loading ? (
              <div className="flex flex-col justify-items-center items-center space-y-10">
                <h1 className="bg-red-600 rounded-lg text-3xl  h-10 p-1 text-center">
                  downloading..
                </h1>
              </div>
            ) : (
              <div className="flex flex-col justify-items-center items-center space-y-10">
                <h1 className="bg-red-600 rounded-lg text-3xl  h-10 p-1 text-center">
                  The Intersect
                </h1>
                <input
                  placeholder="search .."
                  className="text-black bg-gray-200 rounded-lg text-sm p-2"
                  onChange={(e) => handleChangeEvent(e)}
                ></input>
                <button
                  className="bg-red-600 text-white p-3 rounded-lg hover:shadow-lg text-bold"
                  onClick={onSubmitButton}
                >
                  Flash
                </button>
              </div>
            )}
            <Spacer />
          </div>
          <div className="p-10 text-center text-xs text-gray-400">
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
const Spacer = () => <div className="flex-grow"></div>;
```

- Now we can just run our app using

```
yarn dev
```

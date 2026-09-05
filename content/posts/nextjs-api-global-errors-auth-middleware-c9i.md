---
title: "How to: Next.js API Global Errors & Auth Middleware"
description: "This one's going to be quick. no bs. I was working on a Next.js project and needed a way to handle..."
slug: "nextjs-api-global-errors-auth-middleware-c9i"
publishedAt: "2023-12-31T00:16:10.718Z"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fldpd3jqghkd7vr3eh11f.png"
readingTime: 2
canonicalUrl: "https://www.navinkodag.com/blog/nextjs-api-global-errors-auth-middleware-c9i"
tags:
  - nextjs
  - typescript
  - errors
  - authentication
---


This one's going to be quick. no bs. I was working on a Next.js project and needed a way to handle API Route Errors Globally. Similar to Express in Node.js.
This is what I've come up with and it works wonders for my setup.

- We create a handler function that will take multiple handlers and run them one by one. 
```typescript
import { ApiError } from "next/dist/server/api-utils";
import { NextResponse, NextRequest } from "next/server";

export const custom_middleware =
  (...handlers: Function[]) =>
  async (req: NextRequest, res: NextResponse) => {
    try {
      for (const handler of handlers) {
        await handler(req, res);
      }
    } catch (error) {
      if (error instanceof ApiError) {
        return NextResponse.json(
          { message: error.message },
          { status: error.statusCode }
        );
      } else {
        /// Log server errors using winston or your preferred logger
        console.log(error);
        return NextResponse.json(
          { message: "Server died for some reason" },
          { status: 500 }
        );
      }
    }
  };
```

- Now we can add it to a route
```typescript
/// app/api/ping/route.ts

import { custom_middleware } from "@/app/lib/server/middleware";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

const main_handler = (req: NextRequest, res: NextResponse) => {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return NextResponse.json({ success: true });
  }

  throw new ApiError(400, "Some error");
};

export const GET = custom_middleware(main_handler);
```

- We can see the fruits of our labour in the browser itself.
![image-description.png](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qc1mhdd4ilhijp5sh0qq.png)

- We can add our own custom authentication logic here too.
```typescript
export const auth_middleware = async (req: NextRequest, res: NextResponse) => {
  /// Your auth logic
  const isAuthenticated = false;
  if (!isAuthenticated) {
    throw new ApiError(401, "Unauthorized");
  }
};
```

- Call it in our middleware_handler
```typescript
export const custom_middleware =
  (...handlers: Function[]) =>
  async (req: NextRequest, res: NextResponse) => {
    try {
      ///
      /// Auth middleware
      await auth_middleware(req, res);

      for (const handler of handlers) {
        await handler(req, res);
      }
    } catch (error) {
      if (error instanceof ApiError) {
        return NextResponse.json(
          { message: error.message },
          { status: error.statusCode }
        );
      } else {
        /// Log server errors using winston or your preferred logger
        console.log(error);
        return NextResponse.json(
          { message: "Server died for some reason" },
          { status: 500 }
        );
      }
    }
  };

```

- Test the Auth middleware once
![image2.png](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e4e285ebbmrzurcrtyll.png)

- Profit 💰
![profiting.gif](https://tenor.com/en-GB/view/throwing-money-eric-cartman-tweek-tweak-stan-marsh-south-park-gif-21961230.gif)

literally me profiting

---

You can look at the code here: [Github](https://github.com/100lvlmaster/next-custom-middleware-example)
Follow me everywhere. [OG Blog](https://www.navinkodag.com)

---
title: "Seeding NestJs with Prisma And Faker"
description: "Seeding NestJs with Prisma And Faker   I've been working on this college project and I chose NestJs..."
slug: "seeding-nestjs-with-prisma-and-faker-2fgn"
publishedAt: "2021-08-01T16:47:13.237Z"
coverImage: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9g3udn7z341ltch04diy.png"
readingTime: 2
canonicalUrl: "https://www.navinkodag.com/blog/seeding-nestjs-with-prisma-and-faker-2fgn"
tags:
  - nestjs
  - prisma
  - faker
  - typescript
---

- Seeding NestJs with Prisma And Faker

I've been working on this college project and I chose [NestJs](https://nestjs.com/) for the backend. You could just [Hasura](https://hasura.io/) or other BaaS platforms for small projects. But I wanted to learn NestJs.

_Note: Usage with other ORMs might differ but will be almost the same because we'll be using a script._


## What you'll need:
 -  NestJs template for existing project setup with prisma as the default ORM
 As someone once said.
> _ez commands got brrrr_.

- For NestJs
```bash
git clone https://github.com/nestjs/typescript-starter.git project
cd project
yarn 
yarn add -D prisma
npx prisma init
```

```prisma
// prisma/scheme.prisma

datasource db {
provider = "postgresql"
url = env("DATABASE_URL")
}

generator client {
provider = "prisma-client-js"
}

model User {
id Int @id @default(autoincrement())
name String
email String @unique
password String
}
```
- env("DATABASE_URL") is set in .env file

After that run :
```bash
yarn prisma generate
yarn prisma migate dev init
```
![Migrate.png](https://imgur.com/Ns1ne5A.png)
Now:
onto the actual seeder using [faker](https://github.com/Marak/Faker.js) for generating random data and [dotenv](https://www.npmjs.com/package/dotenv) to initialize environment variables :
```bash
yarn add -D faker dotenv
```

Now create the script:
```typescript
// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import * as faker from 'faker';
import * as dotenv from 'dotenv';

const prisma  = new PrismaClient();

const fakerUser = (): any => ({
name: faker.name.firstName() + faker.name.lastName(),
email: faker.internet.email(),
password: faker.internet.password(),
});

async function main() {
const fakerRounds = 10;
dotenv.config();
console.log('Seeding...');
/// --------- Users ---------------
for (let i = 0; i < fakerRounds; i++) {
await prisma.user.create({ data: fakerUser() });
}
};

  

main()
.catch((e) => console.error(e))
.finally(async () => {
await prisma.$disconnect();
});

```
- Add the seeder to our `package.json` for ease of use:
```json
{
...
"scripts":{
...
"seed": "ts-node prisma/seed.ts"
}
...
}
```
- And then we run the seeder:
```bash
yarn seed
```
![seed.png](https://imgur.com/BXONdpJ.png)

✨ That's it ✨
The preview of the database:
![db-preview.png](https://imgur.com/pT77pr7.png)

- Source code :  https://github.com/100lvlmaster/nestjs-prisma-seeder-template

> (If you're a beginner) don't be alarmed at the number of packages because devDependencies aren't bundled in the production build :]

You can find me at:
https://www.navinkodag.com

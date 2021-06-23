import { Container } from "../container";
import dateformat from "dateformat";

const BlogLayout = ({ children, frontMatter }) => {
  return (
    <Container>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <div className="flex items-center">
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {"Navin Kodag"}
              {` • `}
              {dateformat(frontMatter.publishedAt, "mmm d yyyy")}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
            {` • `}
            {/* <ViewCounter slug={frontMatter.slug} /> */}
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
      </article>
    </Container>
  );
};

export default BlogLayout;

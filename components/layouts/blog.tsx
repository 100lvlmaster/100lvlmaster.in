import { FrontMatter } from "lib/types";
import { Container } from "./container";
import dateformat from "dateformat";
const BlogLayout = ({ children, frontMatter }) => {
  frontMatter = frontMatter as FrontMatter;
  return (
    <Container metaData={frontMatter} className={`prose`}>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        {frontMatter.title}
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
        <div className="flex items-center">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {"Navin Kodag"}
            {` • `}
            {`${frontMatter.readingTime} mins`}
          </p>
        </div>
        <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
          {dateformat(frontMatter.publishedAt, `dd mmm yyyy`)}
        </p>
      </div>
      <div className="prose dark:prose-dark w-full">{children}</div>
    </Container>
  );
};

export default BlogLayout;

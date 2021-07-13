import { Container, Spacer } from "../components/layouts/container";
export default function Home() {
  return (
    <div>
      <Container id="home" className=" ">
        <span className="pt-28">
          <span className="text-3xl font-bold pb-20">{`Hi, I'm Navin Kodag,`}</span>
          <br />
          <Spacer />

          <span className="dark:text-gray-400 text-gray-600">
            {` I'm a developer.`}
            <br />
            {`I design, create and optimize.`}
          </span>
          <br />
          <br />
          <p className="text-sm dark:text-gray-400 text-gray-600 pr-10">
            {`I see, you've stumbled upon my small kingdom on the internet.`}
            <br />
            {`I write, read, listen and everything in between.`}
            <br />
            <span>{`Feel free to contact me for projects`}</span>
          </p>
        </span>
        <Spacer />
        <div className="p-16 flex flex-row align-items-baseline">
          <Spacer />
        </div>
      </Container>
    </div>
  );
}

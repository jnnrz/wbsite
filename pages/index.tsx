import { NextPage } from "next";
import { Container, Hero, Navbar } from "@components/index";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Container></Container>
    </div>
  );
};

export default Home;

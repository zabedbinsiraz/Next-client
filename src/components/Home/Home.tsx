import Accompany from "./Accompany";
import Discover from "./Discover";
import Hero from "./Hero";
import Properties from "./Properties";
import Search from "./Search";

const HomeComponent = () => {
  return (
    <>
      <Hero />
      <Search />
      <Properties />
      <Accompany />
      <Discover />
    </>
  );
};
export default HomeComponent;

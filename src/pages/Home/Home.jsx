import Articles from "../../components/Home/Articles";
import Explore from "../../components/Home/Explore";
import HeroSection from "../../components/Home/HeroSection";
import JoinUs from "../../components/Home/JoinUs";
import Latest from "../../components/Home/Latest";
import Data from "../../data/posts.json";


export default function Home() {
  return <>
  <HeroSection />
  <Articles Data={Data}/>
  <Explore />
  <Latest Data={Data}/>
  <JoinUs />
  </>
}

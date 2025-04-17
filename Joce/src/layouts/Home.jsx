import Card from "../components/Card";
import Heart from "../components/Heart";
import SkyStars from "../components/SkyStars";
import flecha from "/flecha.webp";
import { Link as Anchor } from "react-router-dom";


export default function Home() {
    return (
        <div className="w-full flex">
          <SkyStars/>
          <Card /> 
          <Anchor to={"/mes"} className="absolute inset-0 flex justify-self-end self-end  w-24 h-20 justify-center mr-4 mb-5">
          <img src={flecha} className="w-full animate-beat rotate-45 cursor-heart" alt="" />
          </Anchor >
        </div>
      );
}

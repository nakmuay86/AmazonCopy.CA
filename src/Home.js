import React from "react";
import "./Home.css";
import Cars from "./Cars";
import Wrapper from "./Wrapper";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://sun9-36.userapi.com/impg/fYopRUzy9mL27YEx0UbwBxo8obBo82Hutc6bfA/Hs72MQdr0AA.jpg?size=1280x853&quality=95&sign=8062b74c094efeeef3d125e025fb033b&type=album"
          alt="imghome"
        />
        <div className="home_row">
          <Cars
            title="ASUS Rog Strix GTX 1080"
            price={1299}
            image="https://www.asusmarket.ru/img/1465383274_asus-computex-008.png"
            rating={4}
          />
          <Cars
            title="Samsung Galaxy Note 8"
            price={1345.5}
            image="https://remontgalaxy.ru/wp-content/uploads/2020/10/GalaxyNote8.png"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Cars
            title="Car Diagram & Porsсhe 911 Turbo"
            price={450}
            image="https://auto.vercity.ru/gallery/img/automobiles/Porsche/1995%20Porsche%20911%20Carrera%204S%203.6%20Coupe/900x/1995%20Porsche%20911%20Carrera%204S%203.6%20Coupe%20003.jpg"
            rating={3}
          />
          <Cars
            title=" Elgato & Stream Deck"
            price={776}
            image="https://4frag.ru/image/cache/data/Stream/Kontrollery/elgato-stream-deck-2-1000x1000.jpg"
            rating={4}
          />
          <Cars
            title="PlayStation 4 1TB CUH 1216B"
            price={400}
            image="https://i.pinimg.com/originals/4b/2d/1b/4b2d1bd95779017048fb035a54db6941.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Cars
            title="Microwave Samsung & MG23H3115QK"
            price={230}
            image="https://images.samsung.com/is/image/samsung/ru-microwave-oven-grill-mg23h3115nw-mg23h3115nw-bw-001-front-white"
            rating={4}
          />
        </div>
        <Wrapper />
      </div>
    </div>
  );
}

export default Home;

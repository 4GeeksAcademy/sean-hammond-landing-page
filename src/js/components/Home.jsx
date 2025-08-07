import React from "react";
import Nav from "./Nav";
import PageTitle from "./PageTitle";
import Cards from "./Cards";

const cardTitles = ["Card1", "Card2", "Card3", "Card4"]; // might be unused
const cardTitlesPro = [
  {
    title: cardTitles[0],
    description: cardTitles[0] + " description",
    img: "https://picsum.photos/200/300?random=1",
    buttonText: "card1 Button",
    buttonAddress: "url",
  },
  {
    title: cardTitles[1],
    description: cardTitles[1] + " description",
    img: "https://picsum.photos/200/300?random=2",
    buttonText: "card2 Button",
    buttonAddress: "url",
  },
  {
    title: cardTitles[2],
    description: cardTitles[2] + " description",
    img: "https://picsum.photos/200/300?random=3",
    buttonText: "card3 Button",
    buttonAddress: "url",
  },
  {
    title: cardTitles[3],
    description: cardTitles[3] + " description",
    img: "https://picsum.photos/200/300?random=4",
    buttonText: "card4 Button",
    buttonAddress: "url",
  },
];

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div>
      <Nav />
      <PageTitle />

      <div className="d-flex flex-wrap">
        {cardTitlesPro.map((cards, i) => {
          return (
            // Will display as many cards as are in the CardTitlesPro array
            <Cards
              key={i}
              title={cards.title}
              description={cards.description}
              img={cards.img}
              buttonText={cards.buttonText}
              buttonAddress={cards.buttonAddress}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

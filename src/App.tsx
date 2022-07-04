import React, { Fragment } from "react";
import { Footer, Navbar, Overlay, WrapChild } from "./Components";
import { Item } from "./Interfaces";

const App = () => {
  const items: Item[] = [
    {
      title: "Watch anywhere",
      description:
        "Enjoy from the web or with the Prime Video app on your phone, tablet, or select Smart TVs — on up to 3 devices at once.",
      image: "./assets/img1.png",
    },
    {
      title: "Download and go",
      description:
        "Watch offline on the Prime Video app when you download titles to your iPhone, iPad, Tablet, or Android device.",
      image: "./assets/img2.png",
    },
    {
      title: "Data saver",
      description:
        "Control data usage while downloading and watching videos on select phones or tablets.",
      image: "./assets/img3.png",
    },
  ];

  return (
    <Fragment>
      <Navbar />
      <Overlay />
      <section className="container-wrap">
        {items.map((item, index) => (
          <WrapChild
            description={item.description}
            title={item.title}
            image={item.image}
            key={index}
          />
        ))}
      </section>
      <Footer />
    </Fragment>
  );
};

export default App;

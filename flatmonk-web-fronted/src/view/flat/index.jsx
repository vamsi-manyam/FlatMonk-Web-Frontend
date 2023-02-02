import React from "react";
import Signature from "../../components/holder/Signature";
import Box from "../../components/holder/Box";
import image from "../../static/download.png";

function Flat() {
  return (
    <>
      <div className="p-4 m-0 container">
        <header>
          <h3 className="text-2xl">A digital prescription for the pharma industry</h3>
          <div className="flex flex-row space-x-5">
            <p>Unnamed road, San Francisco, CA 94102</p>
            <p>3 Beds</p>
            <p>4 Baths</p>
            <p>1258 sqrft</p>
          </div>
        </header>
        <div className="flex">
          <main className="w-3/4 my-2">
            <div className="w-full">
              <img className="w-full" src={image} alt="house" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              quibusdam amet sed, esse vero laborum deserunt eligendi temporibus
              omnis pariatur assumenda, tempore sint? Et totam illo ipsa autem?
              Labore reiciendis dignissimos pariatur sequi esse ipsum, in ad!
              Quos harum voluptatum molestias ut inventore dignissimos debitis,
              quibusdam illum et obcaecati doloremque.
            </p>
            <Box
              title="Details"
              text="s pariatur assumenda, tempore sint? Et totam illo ipsa autem?
              Labore reiciendis dignissimos pariatur"
              component={<Signature />}
            />
            <Box
              title="similar"
              text="s pariatur assumenda, tempore sint? Et totam illo ipsa autem?
              Labore reiciendis dignissimos pariatur"
            />
            <Box
              title="Location"
              text="s pariatur assumenda, tempore sint? Et totam illo ipsa autem?
              Labore reiciendis dignissimos pariatur"
            />
          </main>
          <aside className="w-1/4 m-2">
            <Box
              title="SOME WORD"
              text="s pariatur assumenda, tempore sint? Et totam illo ipsa autem?
              Labore reiciendis dignissimos pariatur"
            />
          </aside>
        </div>
      </div>
    </>
  );
}

export default Flat;

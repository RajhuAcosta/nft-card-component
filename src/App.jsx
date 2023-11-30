import { useState } from "react";
import "./App.css";
function App() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <main className='min-h-screen grid place-content-center font-["Outfit"] bg-[hsl(217,54%,11%)] px-6'>
      <article className="bg-[hsl(216,50%,16%)] px-6 py-6 rounded-xl overflow-auto">
        <section>
          <picture
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <img
              className="rounded-lg overflow-auto block mx-auto w-[75vw] max-w-[400px]"
              src="/image-equilibrium.jpg"
              alt=""
            />
            <div
              className="w-[75vw] max-w-[400px] h-[75vw] max-h-[400px] absolute top-0 bg-[hsla(178,100%,50%,0.5)] hover:cursor-pointer items-center justify-center"
              style={{ display: isHovered ? "flex" : "none" }}
            >
              <img className="w-14 h-14" src="/icon-view.svg" alt="" />
            </div>
          </picture>
        </section>
        <section>
          <h3
            className="text-[hsl(0,0%,100%)] font-semibold text-2xl hover:text-[#00fff7] hover:cursor-pointer mt-6 mb-3
          "
          >
            Equilibrium #3429
          </h3>
          <p
            className="text-[hsla(215,51%,70%,0.7)] font-light leading-7 mb-4"
            style={{ fontSize: "16.5px" }}
          >
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="flex justify-between">
            <h4 className="text-[hsl(178,100%,50%)] flex gap-2 items-center">
              <img src="/icon-ethereum.svg" alt="" />
              0.041 ETH
            </h4>
            <h5 className="text-[hsla(215,51%,70%,0.7)] flex gap-2 items-center">
              <img src="/icon-clock.svg" alt="" />3 days left
            </h5>
          </div>
          {/* <p className="text-[hsl(215,51%,70%)]">A</p> */}
          {/* <p className="text-[hsl(215,32%,27%)]">A</p> */}
        </section>
        <div className="h-0.5 bg-[hsl(215,32%,27%)] mt-4 mb-5"></div>
        <footer className="flex items-center gap-4">
          <picture className="w-8 border rounded-full">
            <img className="w-8" src="/image-avatar.png" alt="" />
          </picture>
          <h6 className="text-[hsla(215,51%,70%,0.7)] font-light text-sm xs:text-base">
            Creation of{" "}
            <span className="text-[hsl(0,0%,100%)] hover:text-[hsl(178,100%,50%)] hover:cursor-pointer">
              Jules Wyvern
            </span>
          </h6>
        </footer>
      </article>
    </main>
  );
}

export default App;

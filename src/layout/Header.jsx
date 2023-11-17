import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";

const Header = () => {
  return (
    <div className="w-[400px] md:h-[450px] md:w-[1300px]">
      <Flicking
        align="prev"
        circular={true}
        onMoveEnd={(e) => {
          console.log(e);
        }}
      >
        <div className="panel">
          <img
            className="h-[250px] md:h-[450px] w-[400px] md:w-[1300px]"
            src="./../../public/home/01.jpg"
            alt=""
          />
        </div>
        <div className="panel">
          <img
            className="h-[250px] md:h-[450px] w-[400px] md:w-[1300px]"
            src="./../../public/home/02.jpg"
            alt=""
          />
        </div>
        <div className="panel">
          <img
            className="h-[250px] md:h-[450px] w-[400px] md:w-[1300px]"
            src="./../../public/home/03.png"
            alt=""
          />
        </div>
        <div className="panel">
          <img
            className="h-[250px] md:h-[450px] w-[400px] md:w-[1300px]"
            src="./../../public/home/04.jpg"
            alt=""
          />
        </div>
        {/* <div className="panel">2</div>
        <div className="panel">3</div> */}
      </Flicking>
    </div>
  );
};

export default Header;

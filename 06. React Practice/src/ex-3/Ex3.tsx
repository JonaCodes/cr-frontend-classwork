import { useState } from "react";
import "./ex3.css";
import RaveBox from "./RaveBox";

export default function Ex3() {
  const colors = [
    "#fa5252",
    "#e64980",
    "#be4bdb",
    "#7950f2",
    "#4c6ef5",
    "#228be6",
    "#15aabf",
    "#12b886",
    "#40c057",
    "#82c91e",
    "#fab005",
    "#fd7e14",
  ];

  const [selectedBox, setSelectedBox] = useState<number | null>(null);

  const getRandomNumber = () => Math.floor(Math.random() * 12);

  const rave = () => {
    const originalNumber = getRandomNumber();
    setSelectedBox(originalNumber);
  };

  return (
    <>
      <div className="boxes-grid">
        {colors.map((color, index) => {
          return (
            <RaveBox
              key={color}
              selectedBox={selectedBox}
              boxNumber={index}
              color={color}
            />
          );
        })}
      </div>

      <button className="rave-button" onClick={rave}>
        Rave
      </button>
    </>
  );
}

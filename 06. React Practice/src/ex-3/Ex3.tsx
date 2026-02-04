import "./ex3.css";

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

  /**
   * Use `useState` to manage which box is currently selected (default null)
   * Loop through the `colors` array and render a `RaveBox` component for each color
   * Each RaveBox should receive (as props) the currently selectedBox, its own boxNumber, and which color it is

   * In the `RaveBox` component, you should render a `div` that has two classes:
   *    - "box" - always
   *    - "on" - conditionally, based on whether *this* box matches the selected box
   * The background color of each box should be set separately, using `style={{ background: color }}`

   * Pressing the "Rave" button should set a random box as the selectedBox - use the `getRandomNumber` function
   */

  const getRandomNumber = () => Math.floor(Math.random() * 12);

  return (
    <>
      <div className="boxes-grid">
        {/* Loop through the colors and render RaveBox components here */}
      </div>

      <button className="rave-button">Rave</button>
    </>
  );
}

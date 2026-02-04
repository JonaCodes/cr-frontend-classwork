import "./ex2.css";

export default function Ex2() {
  const people = [
    { name: "Nilli", satisfaction: 8.2, mlProfficiency: 71 },
    { name: "Arthur", satisfaction: 9.2, mlProfficiency: 81 },
    { name: "Eliza", satisfaction: 0.4, mlProfficiency: 21 },
    { name: "Joe", satisfaction: 6.8, mlProfficiency: 81 },
    { name: "Dan", satisfaction: 1.2, mlProfficiency: 91 },
  ];

  console.log("Show the people in the UI!", people);

  /**
   * Loop through the people array and render each person (use the `.map` function)
   * Render the person's name as a simple `p` element
   * Create a Satisfaction component to render an emoji based off the person's satisfaction score
   * Use the *existing* Battery component to render the person's ML proficiency
   
   * Note the css classes in `ex2.css` to help you build it "prettily"
   */

  return (
    <div className="people-container">
      Render the people - they need to be seen!
    </div>
  );
}

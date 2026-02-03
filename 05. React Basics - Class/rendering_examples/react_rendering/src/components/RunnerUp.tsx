import "./runner-up.css";

interface RunnerUpProps {
  name: string;
}

function RunnerUp(props: RunnerUpProps) {
  return (
    <div className="runner-up">
      <p>{props.name}</p>
      <p className="runner-up-subtext">Runner Up</p>
    </div>
  );
}

export default RunnerUp;

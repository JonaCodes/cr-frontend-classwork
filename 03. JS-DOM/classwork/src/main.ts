// hoist
function writeLog(age: number, height: number): void {
  console.log(`Hello ${age}, you awesome human`, height, "asd");
}

// const name = "Lena";

interface Person {
  name: string;
  age: number;
  isMonsterBeketaTov: boolean;
}

const person: Person = {
  name: "Lena",
  age: 25,
  isMonsterBeketaTov: true,
};
writeSecondLog();

function writeSecondLog(): void {
  console.log("Hello 3");
}

const writeThirdLog = function (): void {
  console.log("Hello 4");
};

const obj = {
  name: "lena",
  fn: writeThirdLog,
};

const button = document.getElementById("button");
button?.addEventListener("click", handleClick);

function handleClick() {
  const content = document?.getElementById("input")?.value;
  console.log(content);

  const newPost = document.createElement("p");
  newPost.classList.add("post");
  newPost.textContent = content;

  console.log(newPost);

  document.body.appendChild(newPost);
}

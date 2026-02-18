import { app } from "./app";

const port = 4000;

app.listen(port, () => {
  console.log(`Auth server running on http://localhost:${port}`);
});

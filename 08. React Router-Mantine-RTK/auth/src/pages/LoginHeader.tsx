export default function LoginHeader() {
  return (
    <>
      <h1 style={{ marginBottom: 0 }}>Login</h1>
      <p style={{ color: "gray", marginBottom: "24px", fontSize: 14 }}>
        Test users:
        <br /> <span style={{ marginLeft: "10px" }}>U:</span>{" "}
        <strong>user</strong> <span>P: </span>
        <strong>user123</strong>
        <br /> <span style={{ marginLeft: "10px" }}>U:</span>{" "}
        <strong>dina</strong> <span>P: </span>
        <strong>dina123</strong>
      </p>
    </>
  );
}

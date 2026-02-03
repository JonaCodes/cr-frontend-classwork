export default function FooterContent() {
  const shouldHaveMazgan = true;

  return <div>{shouldHaveMazgan && <div>Mazgan</div>}</div>;
}

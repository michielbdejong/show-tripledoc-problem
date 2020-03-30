import { createDocumentInContainer } from "tripledoc";

async function test(): Promise<void> {
  const doc = createDocumentInContainer(
    "https://michielbdejong.inrupt.net/inboex/"
  );
  const sub = doc.addSubject("#hi");
  sub.addString("https://example.com/#hello", "world");
  await doc.save();
}

export function HelloWorld(): string {
  return "hello, world";
}

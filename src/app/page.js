import Image from "next/image";
import Form from "./components/Form";

export default function Home() {
  return (
    <main className="bg-brand-beige-10 grid place-items-center">
      <h1 className="text-orange-700 text-4xl font-bold mb-4">Hello World</h1>
      <p className="text-orange-700 mb-4">blabalbalablabalbalablabalbalbalabl</p>
      <Form />
    </main>
  );
}

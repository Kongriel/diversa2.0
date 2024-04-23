import Form from "./components/Form";

export const revalidate = 1800;

const params = new URLSearchParams({
  url: "https://www.charlietango.dk",
  tags: ["wcag2a", "wcag2aa", "ACT"],
});
const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
const data = await response.json();
console.log(data);
export default function Page() {
  return (
    <main className="bg-brand-beige-10 grid place-items-center">
      <h1 className="text-orange-700 text-4xl font-bold mb-4">Hello World</h1>
      <p className="text-orange-700 mb-4">blabalbalablabalbalablabalbalbalabl</p>
      <Form />
    </main>
  );
}

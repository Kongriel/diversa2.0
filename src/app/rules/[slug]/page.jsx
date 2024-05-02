import rules from "../json/rules.json";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = params;
  console.log("Slug:", slug);

  const data = rules[slug];
  console.log("Data:", data);

  if (!data) {
    console.error("Rule not found for slug:", slug);
  }

  return {
    headline: data ? data.headline : "",
    explanation: data ? data.explanation : "",
    notes: data ? data.notes : "",
  };
}

export default function RulePage({ params }) {
  const { slug } = params;
  console.log("Slug:", slug);

  const oneRule = rules[slug];
  console.log("Rule Data:", oneRule);

  if (!oneRule) {
    console.error("Rule not found for slug:", slug);
    return <div>Rule not found</div>;
  }

  const { headline, explanation, notes } = oneRule;

  return (
    <main className="">
      <div>
        <div className="mx-4 my-2 p-8 w-10/12 h-screen">
          <h1 className="text-4xl my-4 ">{headline}</h1>
          <h4 className="text-3xl my-2 ">Explanation</h4>
          <p className="my-1 text-xl font-poppins">{explanation}</p>
          <h4 className="text-3xl my-2 ">Rule Description</h4>
          <p className="my-1 text-xl font-poppins"> {notes}</p>
          <div className="flex gap-5">
            <Link href="./" className="text-1xl my-5 underline font-poppins">
              See all rules
            </Link>

            <button className="text-1xl my-5 underline font-poppins">
              <Link href="/">Home</Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

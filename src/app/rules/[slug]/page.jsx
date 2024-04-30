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
    <main>
      <div>
        <div className="mx-4 ">
          <h1 className="text-4xl my-4 font-libreBaskerville">{headline}</h1>
          <h4 className="text-2xl my-2 font-libreBaskerville">Explanation</h4>
          <p className="my-1 font-poppins">{explanation}</p>
          <h4 className="text-2xl my-2 font-libreBaskerville ">Rule Description</h4>
          <p className="my-1 font-poppins"> {notes}</p>
          <Link href="./" className="text-1xl my-5 underline font-poppins">
            ....Tilbage til regler
          </Link>
        </div>
      </div>
    </main>
  );
}

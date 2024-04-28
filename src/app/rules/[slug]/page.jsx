import rules from "../json/rules.json";

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
        <div>
          <h1 className="text-3xl">{headline}</h1>

          <h4>Forklaring: </h4>
          <p>{explanation}</p>
          <h4>Noter: </h4>
          <p> {notes}</p>

          <a href="./">Tilbage til regler</a>
        </div>
      </div>
    </main>
  );
}

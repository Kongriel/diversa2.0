import React from "react";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 1200;

export default async function ResultPage({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();
  console.log(response);
  return (
    <main>
      <div>
        <div>
          <h1>REGLER</h1>
          <h3>Her er hvad vi tester:</h3>
          <h4>Region</h4>
          <p>Det er bedste praksis at indeholde al indhold undtagen overspringelseslinks inden for forskellige regioner såsom header, navigationsmenu, hovedindhold og sidefod.</p>

          <h4>Noter</h4>
          <p>{"Det er bedste praksis at indeholde al indhold undtagen overspringelseslinks inden for forskellige regioner såsom header, navigationsmenu, hovedindhold og sidefod."}</p>
          <a href="https://dequeuniversity.com/rules/axe/4.9/region?application=axe-puppeteer" target="_blank">
            Læs mere
          </a>
          <h4>Tab Index</h4>
          <p>En tabindex-attribut må aldrig have en værdi større end 0 for at forhindre en uventet tabulering, der kan få det til at se ud som om, at visse elementer helt springes over.</p>
          <h4>Noter</h4>
          <p>{"En tabindex-attribut må aldrig have en værdi større end 0 for at forhindre en uventet tabulering, der kan få det til at se ud som om, at visse elementer helt springes over."}</p>
          <a href="https://dequeuniversity.com/rules/axe/4.9/tabindex?application=axe-puppeteer" target="_blank">
            Læs mere
          </a>
          <h4>Landmark One Main</h4>
          <p>Det er bedste praksis at sikre, at der kun er én hovedlandmark for at navigere til primært indhold på siden, og at hvis siden indeholder iframe-elementer, bør hver af disse enten ikke indeholde nogen landmærker eller kun et enkelt landmærke.</p>
          <h4>Noter</h4>
          <p>{"Det er bedste praksis at sikre, at der kun er én hovedlandmark for at navigere til primært indhold på siden, og at hvis siden indeholder iframe-elementer, bør hver af disse enten ikke indeholde nogen landmærker eller kun et enkelt landmærke."}</p>
          <a href="https://dequeuniversity.com/rules/axe/4.9/landmark-one-main?application=axe-puppeteer" target="_blank">
            Læs mere
          </a>

          <button>
            <Link href="/">Søg her</Link>
          </button>
        </div>
      </div>
    </main>
  );
}

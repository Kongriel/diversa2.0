import Image from "next/image";

// Revalidate route every 30 minutes
export const revalidate = 1800;

export default async function Page({ searchParams }) {
  try {
    const params = new URLSearchParams(searchParams);
    const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    return (
      <main>
        <h1>Report for {data.url}</h1>
        <p>Found {data.violations.length} accessibility issues</p>
        <Image alt={`Screenshot of ${data.url}`} src={data.screenshot.url} width={data.screenshot.width} height={data.screenshot.height} />
      </main>
    );
  } catch (error) {
    console.error("Error:", error);
    return (
      <main>
        <h1>Error</h1>
        <p>Failed to fetch accessibility data. Please try again later.</p>
      </main>
    );
  }
}

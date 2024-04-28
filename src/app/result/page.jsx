import React from "react";
import Link from "next/link";
import Image from "next/image";

// Adjusted to 180 degrees

const CircleProgressBar = ({ percentage }) => {
  const fillDegree = (percentage / 100) * 180; // Adjusted to 180 degrees
  let color;
  if (percentage >= 89) {
    color = "#00FF00"; // Green color for high scores (75% and above)
  } else if (percentage >= 50) {
    color = "orange";
  } else {
    color = "red";
  }
  const fillStyles = `
    .circle-wrap {
      margin: 150px auto;
      width: 150px;
      height: 150px;
      background: transparent;
      border-radius: 50%;
    }

    .circle-wrap .circle .mask,
    .circle-wrap .circle .fill {
      width: 150px;
      height: 150px;
      position: absolute;
      border-radius: 50%;
    }

    .circle-wrap .circle .mask {
      clip: rect(0px, 150px, 150px, 75px);
    }

    .circle-wrap .inside-circle {
      width: 122px;
      height: 122px;
      border-radius: 50%;
      background: #f7f6e8;
      line-height: 120px;
      text-align: center;
      margin-top: 14px;
      margin-left: 14px;
      color: ${color};
      position: absolute;
      z-index: 100;
      font-weight: 700;
      font-size: 2em;
    }

    /* color animation */
    /* 3rd progress bar */
    .mask .fill {
      clip: rect(0px, 75px, 150px, 0px);
      background-color: ${color};
    }

    .mask.full,
    .circle .fill {
      animation: fill ease-in-out 1s;
      transform: rotate(${fillDegree}deg);
    }

    @keyframes fill {
      0% {
        transform: rotate(0deg);
      }
  
      100% {
        transform: rotate(${fillDegree}deg);
      }
    }
  `;

  return (
    <>
      <style>{fillStyles}</style>
      <div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill"></div>
          </div>
          <div className="mask half">
            <div className="fill"></div>
          </div>
          <div className="inside-circle">{percentage}%</div>
        </div>
      </div>
    </>
  );
};

export const revalidate = 1200;

export default async function ResultPage({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();
  console.log(response);

  const violations = data.violations;
  const violationsCount = violations.length;
  const incompleteCount = data.incomplete.length;

  let score = 100;
  violations.forEach((violation) => {
    switch (violation.impact) {
      case "critical":
        score -= 20;
        break;
      case "serious":
        score -= 15;
        break;
      case "moderate":
        score -= 10;
        break;
      default:
        score -= 5;
    }
  });

  score = Math.min(score, 100);
  score = Math.max(score, 0);

  return (
    <main className="bg-brand-beige-10 flex flex-col items-center justify-center ">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-brand-orange-70">Accessibility Report for {data.url}</h1>
            <p className="text-brand-orange-70">{data.description}</p>
            <p className="text-brand-orange-70">Accessibility Breaches: {violationsCount}</p>
            <p className="text-brand-orange-70">Incomplete Items Detected: {incompleteCount}</p>
            <p className="text-brand-orange-70">Assessed Tags: {data.tags.join(", ")}</p>
          </div>
          <CircleProgressBar percentage={score} />
        </div>
        {violations.map((violation, index) => (
          <div key={index} className="text-left border border-gray-300 p-4 my-4 rounded-md">
            <h2 className="text-xl font-semibold text-gray-800">{violation.id}</h2>
            <p className="text-gray-600">{violation.description}</p>
            <p className="text-gray-600">Impact: {violation.impact}</p>
            <p className="text-gray-600">Tags: {violation.tags.join(", ")}</p>
            <p className="text-gray-600"> </p>
            <a className="inline-block px-4 py-1 bg-orange-500 text-white rounded-md hover:bg-orange-600" href={`/rules/${violation.id}`}>
              Read More
            </a>
          </div>
        ))}
      </div>

      <Image
        alt={data.url}
        src={data.screenshot.url}
        width={data.screenshot.width}
        height={data.screenshot.height}
        className="w-full md:w-1/2 xl:w-[600px]"
        sizes="(max-width: 768px) 100vw,
         (max-width: 1280px) 50vw,
         600px"
      />
    </main>
  );
}

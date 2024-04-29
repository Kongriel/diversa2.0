import React from "react";
import Link from "next/link";
import Image from "next/image";

const CircleProgressBar = ({ percentage }) => {
  const fillDegree = (percentage / 100) * 180;
  let color;
  if (percentage >= 89) {
    color = "#00FF00";
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
        score -= 12;
        break;
      case "moderate":
        score -= 8;
        break;
      default:
        score -= 4;
    }
  });

  score = Math.min(score, 100);
  score = Math.max(score, 0);

  return (
    <main className="bg-brand-beige-10  items-center justify-center my-6 ">
      <form action="" className=" flex justify-center my-6">
        <input
          type="url"
          name="url"
          id="url"
          placeholder={data.url}
          className="border border-gray-300 rounded-3xl  px-3 py-2 w-64 text-brand-orange-70 placeholder-orange-70 focus:outline-none focus:border-orange-500 pl-8"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M11.445 0.055l-8.945 8.945-2.5 7 6.995-2.5 8.95-8.945c0.5-2-2.5-5-4.5-4.5zM4.5 11l-1-1 8.5-8.5 1 1-8.5 8.5z"></path></svg>')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 8px center",
            backgroundSize: "16px",
            paddingLeft: "30px",
            width: "345px",
          }}
        />
      </form>

      <h1 className="text-brand-orange-70 font-libreBaskerville text-2xl text-center">Accessibility Report for {data.url}</h1>

      <div className="flex py-0 mb-3 bg-orange-200 rounded-3xl items-center mx-8 flex-wrap justify-center p-8">
        <Image alt={data.url} src={data.screenshot.url} width={data.screenshot.width} height={data.screenshot.height} className="w-full md:w-1/2 xl:w-[420px]" sizes="" />
        <CircleProgressBar percentage={score} />
        <div className="place-self-center">
          <p className="text-brand-orange-70 font-poppins">{data.description}</p>
          <p className="text-brand-orange-70 font-poppins">Accessibility Breaches: {violationsCount}</p>
          <p className="text-brand-orange-70 font-poppins">Incomplete Items Detected: {incompleteCount}</p>
          <p className="text-brand-orange-70 font-poppins">Assessed Tags: {data.tags.join(", ")}</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        {violations.map((violation, index) => (
          <div key={index} className="border border-gray-300 p-4 my-4 rounded-md w-10/12">
            <h2 className="text-xl font-semibold text-gray-800">{violation.id}</h2>
            <p className="text-gray-600">{violation.description}</p>

            <p className="text-gray-600">Impact: {violation.impact}</p>
            <p className="text-gray-600">Tags: {violation.tags.join(", ")}</p>

            <div className="mt-2">
              <Link className="inline-block px-4 py-1 bg-orange-500 text-white rounded-md hover:bg-orange-600" href={`/rules/${violation.id}`}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

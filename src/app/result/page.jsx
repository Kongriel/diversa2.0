import React from "react";
import Link from "next/link";
import Image from "next/image";

const getColorByImpact = (impact) => {
  switch (impact) {
    case "minor":
      return "green";
    case "moderate":
      return "#FA9F42";
    case "serious":
      return "#F3533A";
    case "critical":
      return "#8B0000";
    default:
      return "#000000";
  }
};

const CircleProgressBar = ({ percentage }) => {
  const fillDegree = (percentage / 100) * 180;
  let color;
  if (percentage >= 89) {
    color = "#8AD879";
  } else if (percentage >= 50) {
    color = "#FA9F42";
  } else {
    color = "#F3533A";
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
  background: #f9f8fc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
    <main className="  items-center justify-center my-6 ">
      <form action="" className=" gap-2 flex justify-center my-6">
        <input
          type="url"
          name="url"
          id="url"
          placeholder={data.url}
          className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 transition-colors border  border-blue-200 rounded-2xl shadow-sm disabled:bg-gray-200 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-600"
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

      <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-center">Accessibility Report for {data.url}</h1>

      <div className="flex shadow-glass-1 bg-white bg-opacity-60 rounded-3xl items-center mx-12 flex-wrap sm:gap-20 justify-between p-8">
        <Image alt={data.url} src={data.screenshot.url} width={data.screenshot.width} height={data.screenshot.height} className="w-full md:w-1/2 xl:w-[420px] md:mt-0 mt-5" sizes="" />
        <div className="flex flex-col justify-between md:mt-0 mt-10 md:mb-0 -mb-20">
          <p className="mb-1 text-xl font-bold leading-none tracking-tight text-center font-poppins">{data.description}</p>
          <p className="mb-1 text-xl font-bold leading-none tracking-tight text-center font-poppins">{data.description}</p>
          <p className="mb-1 text-xl font-bold leading-none tracking-tight font-poppins">Accessibility breaches: {violationsCount}</p>
          <p className="mb-1 text-xl font-bold leading-none tracking-tight font-poppins">Incomplete items detected: {incompleteCount}</p>
          <p className="mb-1 text-xl font-bold leading-none tracking-tight font-poppins">Assessed tags: {data.tags.join(", ")}</p>
        </div>

        <CircleProgressBar percentage={score} />
      </div>
      <h2 className="my-10 text-5xl font-extrabold leading-none text-center ">Check out how bad your site!</h2>
      <div className="flex flex-wrap justify-center gap-6 mx-4 sm:mx-12">
        {violations.map((violation, index) => (
          <div key={index} className="w-8/12 sm:w-[calc(50% - 16px)] md:w-[calc(33.33% - 16px)] lg:w-[calc(25% - 16px)]">
            <div className="p-8 bg-white shadow-glass-1 rounded-2xl">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 rounded-2xl p-3" viewBox="0 0 24 24" stroke={getColorByImpact(violation.impact)} fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="flex flex-col">
                  <h2 className="mb-2 text-2xl font-extrabold leading-none ">{violation.id}</h2>
                  <p className="text-xl font-normal leading-7 font-poppins" style={{ maxWidth: "30rem" }}>
                    {violation.description}
                  </p>
                  <p className="text-xl font-normal leading-7 font-poppins">Impact: {violation.impact}</p>
                </div>

                <button className="mt-4 sm:mt-0 sm:ml-6 px-5 py-3 text-base font-medium text-white transition-colors bg-blue-500 border border-transparent rounded-md shadow disabled:bg-blue-400 sm:w-auto sm:px-10">
                  <Link href={`/rules/${violation.id}`}>Read More</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

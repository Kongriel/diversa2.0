import React from "react";
import Link from "next/link";
import Image from "next/image";

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

      <h1 className="mb-6 text-2xl font-extrabold leading-none tracking-tight text-center">Accessibility Report for {data.url}</h1>

      <div className="flex py-0 mb-4 shadow-glass-1 bg-white bg-opacity-30 rounded-3xl items-center mx-12 flex-wrap justify-center p-8">
        <Image alt={data.url} src={data.screenshot.url} width={data.screenshot.width} height={data.screenshot.height} className="w-full md:w-1/2 xl:w-[420px]" sizes="" />
        <CircleProgressBar percentage={score} />
        <div className="place-self-center">
          <p className="mb-1 text-xl font-bold leading-none tracking-tight text-center font-poppins">{data.description}</p>
          <p className="mb-1 text-xl font-bold leading-none tracking-tight text-center font-poppins">{data.description}</p>
          <p className="mb-1 text-xl font-bold leading-none tracking-tight font-poppins">Accessibility breaches: {violationsCount}</p>
          <p className="mb-1 text-xl font-bold leading-none tracking-tight font-poppins">Incomplete items detected: {incompleteCount}</p>
          <p className="mb-1 text-xl font-bold leading-none tracking-tight font-poppins">Assessed tags: {data.tags.join(", ")}</p>
        </div>
      </div>
      <h2 className="my-10 text-5xl font-extrabold leading-none text-center ">Learn more</h2>
      <div className="flex flex-row gap-3 flex-wrap justify-center items-center">
        {violations.map((violation, index) => (
          <div key={index} className="shadow-glass-1   p-4 my-4 rounded-md xl:w-2/5 bg-white bg-opacity-20">
            <h2 className="mb-2 text-3xl font-extrabold leading-none ">{violation.id}</h2>
            <p className=" mx-auto text-xl font-normal leading-7 font-poppins">{violation.description}</p>

            <p className="mx-auto text-xl font-normal leading-7 font-poppins">Impact: {violation.impact}</p>
            <p className="mx-auto text-xl font-normal leading-7 font-poppins">Tags: {violation.tags.join(", ")}</p>

            <div className="my-2 mt-4">
              <Link className="w-full px-5 py-3 text-base font-medium text-white transition-colors bg-blue-500 border border-transparent rounded-md shadow disabled:bg-blue-400 sm:w-48 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 sm:px-10" href={`/rules/${violation.id}`}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

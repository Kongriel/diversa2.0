import React from "react";
import Link from "next/link";
import Image from "next/image";

const CircleProgressBar = ({ percentage }) => {
  const fillDegree = (percentage / 100) * 180; // Adjusted to 180 degrees

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
      color: #69e3fc;
      position: absolute;
      z-index: 100;
      font-weight: 700;
      font-size: 2em;
    }

    /* color animation */
    /* 3rd progress bar */
    .mask .fill {
      clip: rect(0px, 75px, 150px, 0px);
      background-color: #69e3fc;
    }

    .mask.full,
    .circle .fill {
      animation: fill ease-in-out 1s;
      transform: rotate(${fillDegree}deg); /* Apply the transform here */
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

  const violationsCount = data.violations.length;
  const incompleteCount = data.incomplete.length;

  let score = 100 - violationsCount * 10;

  score = Math.min(score, 97);

  score = Math.max(score, 0);

  return (
    <main className="bg-brand-beige-10 flex flex-col items-center justify-center h-screen">
      <h1 className="text-brand-orange-70">Report for {data.url}</h1>
      <p className="text-brand-orange-70">{data.description}</p>
      <p className="text-brand-orange-70">Found {violationsCount} issues</p>
      <p className="text-brand-orange-70">Found {incompleteCount} incomplete issues</p>
      <p className="text-brand-orange-70">Found {data.tags}</p>
      <CircleProgressBar percentage={score} />
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

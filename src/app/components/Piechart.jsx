import React, { useEffect } from "react";

const ProgressPieChart = ({ percent }) => {
  useEffect(() => {
    const $ppc = document.querySelector(".progress-pie-chart");
    const deg = (360 * percent) / 100;
    if (percent > 50) {
      $ppc.classList.add("gt-50");
    }
    document.querySelector(".ppc-progress-fill").style.transform = `rotate(${deg}deg)`;
    document.querySelector(".ppc-percents span").innerHTML = `${percent}%`;
  }, [percent]);

  return (
    <div className="progress-pie-chart w-200 h-200 rounded-full bg-gray-300 relative">
      <div className="ppc-progress absolute rounded-full" style={{ clip: "rect(0, 200px, 200px, 100px)" }}>
        <div className="ppc-progress-fill absolute rounded-full" style={{ clip: "rect(0, 100px, 200px, 0)", background: "#81CE97", transform: `rotate(${(360 * percent) / 100}deg)` }}></div>
      </div>
      <div className="ppc-percents absolute rounded-full bg-white text-center">
        <div className="pcc-percents-wrapper table-cell align-middle">
          <span className="block text-6xl font-bold text-green-500">{percent}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressPieChart;

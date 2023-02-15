import React from "react";
import WorkItems from "./workItems";

const data = [
  {
    years: 2018,
    title: "Nasimas Co",
    Duration: "4 years",
    Details:
      "As mid-senior in front-end team development.we work on many projects like app website big scale data frontend and backend",
  },
  {
    years: 2020,
    title: "Nasimas Co",
    Duration: "4 years",
    Details:
    "As mid-senior in front-end team development.we work on many projects like app website big scale data frontend and backend",
  },
  {
    years: 2020,
    title: "Nasimas Co",
    Duration: "4 years",
    Details:
    "As mid-senior in front-end team development.we work on many projects like app website big scale data frontend and backend",
  },
  {
    years: 2020,
    title: "Nasimas Co",
    Duration: "4 years",
    Details:
    "As mid-senior in front-end team development.we work on many projects like app website big scale data frontend and backend",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[780px] mx-auto sm:pl-20 px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center text-[#001b5e]">Work</h1>
      {data.map((item, i) => (
        <WorkItems
          key={i} 
          years={item.years}
          title={item.title}
          duration={item.Duration}
          details={item.Details}
        />
      ))}
    </div>
  );
};

export default Work;

import React from "react";

const colorMap = {
  Reactjs: "bg-violet-400/20",
  Nextjs: "bg-gray-400/20",
  Firebase: "bg-yellow-400/20",
  TypeScript: "bg-blue-400/20",
  TailwindCSS: "bg-green-400/20",
  Laravel: "bg-green-500/80/20",
  SQL: "bg-gray-400/20",
  HTML: "bg-yellow-400/20",
  CSS: "bg-blue-400/20",
};

const TechBadge = ({ name }) => {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full ${
        colorMap[name] || "bg-gray-400/20"
      } px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20`}
    >
      {name}
    </span>
  );
};

export default TechBadge;

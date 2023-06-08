import React from "react";

export default function ListLoading() {
  return (
    <div className="animate-pulse w-full">
      <div className="h-24 bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-4"></div>
      <div className="h-24 bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-4"></div>
      <div className="h-24 bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-4"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

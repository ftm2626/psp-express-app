import React from "react";
import { postApiResT } from "src/types/apis";

export default function ListItem({
  list: { id, body, title },
}: {
  list: postApiResT;
}) {
  return (
    <div
      key={id}
      className="p-4 rounded-md border-gray-900 bg-slate-300 mb-4 hover:bg-slate-200"
    >
      <h5 className="text-xl text-gray-600 mb-2">{title}</h5>
      <p className="text-sm">{body}</p>
    </div>
  );
}

import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <div className="text-center text-red-600 py-4">
      {message}
    </div>
  );
}

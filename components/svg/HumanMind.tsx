import React from "react";
import { SVGProps } from "./Type";

function HumanMind(propsIcon: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      {...propsIcon}
    >
      <path
        fill="#7DAEA0"
        d="M31.766 28.636c-.564-2.105-.298-4.365.816-6.238a12.911 12.911 0 001.803-7.145c-.27-6.79-5.845-12.272-12.64-12.437A12.97 12.97 0 008.456 15.74h-.001v.045l-2.74 6.29a1.311 1.311 0 00.584 1.679l2.156 1.152v5.327a2.775 2.775 0 002.775 2.775h5.08l.81 3.03a1.554 1.554 0 001.902 1.097l12.517-3.354a1.552 1.552 0 001.097-1.9l-.869-3.244zm-3.92-11.62l-.48.48-.009.009-5.98 5.98-5.987-5.988-.49-.49a4.234 4.234 0 115.988-5.987l.49.49.48-.482a4.236 4.236 0 016.906 1.374 4.234 4.234 0 01-.918 4.614z"
      ></path>
    </svg>
  );
}

export default HumanMind;
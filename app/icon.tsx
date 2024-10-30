import { Hospital } from "lucide-react";
import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          borderRadius: "100%",
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#629D8C"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="lucide lucide-hospital"
          viewBox="0 0 24 24"
        >
          <path d="M12 6v4M14 14h-4M14 18h-4M14 8h-4M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path>
          <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"></path>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}

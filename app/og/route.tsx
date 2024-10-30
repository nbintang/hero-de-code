// Import required modules and constants
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

// Route segment config
export const runtime = "edge";

// Define a function to handle GET requests
export async function GET(req: NextRequest) {
  // Extract title from query parameters
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title") || "HeartCare"; // Provide a default title if none is provided

  // Fetch the Outfit font from Google Fonts
  const fontUrl =
    "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap";
  const fontResponse = await fetch(fontUrl);
  const fontCss = await fontResponse.text();

  // Parse the font-face declaration to extract the font data
  const fontFaceRegex = /url\((.*?)\)/;
  const match = fontCss.match(fontFaceRegex);
  const fontFileUrl = match ? match[1].replace(/['"]/g, "") : "";

  // Fetch the font data
  const fontData = await fetch(fontFileUrl).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffff",
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            fontSize: 120,
            fontFamily: "Outfit, sans-serif", // Use the fetched font
            letterSpacing: "-0.05em",
            display: "flex",
            fontStyle: "normal",
            color: "#629D8C",
            lineHeight: "120px",
            alignItems: "flex-end",
            whiteSpace: "pre-wrap",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width={200}
            height={200}
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
          {postTitle}
          <div></div>
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: "Outfit",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}

export async function fetchPhoto(endpoint: string) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/${endpoint}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
        method: "GET",
        cache: "force-cache",
      }
    );
    const data = await response.json();

    return data.urls.raw;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return null;
  }
}

import axios from 'axios';

export async function fetchPhoto(endpoint: string) {
  try {
    const response = await axios.get(`https://api.unsplash.com/photos/${endpoint}`, {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    if(error instanceof Error) {
      console.error(error.message);
    }
    return null;
  }
}
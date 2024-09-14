export async function getWeatherData(city, apiKEY) {
  try {
    const baseURL = `https://api.weatherapi.com/v1/current.json?key=${apiKEY}&q=${city}&aqi=no`;

    const response = await fetch(baseURL);

    // Checking response status
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    // Response conversion
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function load() {
  try {
    const response = await fetch("/data.json")
    console.log(response);
    if (!response.ok) {
      console.log(response.ok);
      return { error: response.status }
    }

    let data = await response.json()
    return data;

  } catch (err) {
    return { error: err }
  }
}
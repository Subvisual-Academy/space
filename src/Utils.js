export async function post(url, body) {
  const response = await fetch(process.env.REACT_APP_API_URL + url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const json = await response.json();
  return json;
}

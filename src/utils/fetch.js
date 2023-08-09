export async function GET(url) {
  const response = await fetch(process.env.REACT_APP_API_URL + url, {
    credentials: "same-origin",
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  const json = await response.json();
  return json;
}

export async function POST(url, body) {
  const response = await fetch(process.env.REACT_APP_API_URL + url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const json = await response.json();
  return json;
}

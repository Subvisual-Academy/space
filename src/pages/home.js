function Home() {
  const CURRENT_USER_URL = "http://localhost:3000/users/1";

  async function getAPIData() {
    const response = await fetch(CURRENT_USER_URL, {
      credentials: "same-origin",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const json = await response.json();
    return json;
  }

  const user = async () => {
    console.log(await getAPIData().then((response) => response["id"]));
  };

  user();

  return (
    <div className="bg-cod-gray w-full h-full">
      <h1 className="text-center text-white"> Weekly Task</h1>
    </div>
  );
}

export default Home;

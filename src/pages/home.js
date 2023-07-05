function Home() {

    const CURRENT_USER_URL = "http://localhost:3000/users/1";

    async function getAPIData(){
        const response = await fetch(CURRENT_USER_URL,{
          credentials: "same-origin",
          headers: {"Authorization" : `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE2ODg2NTM3Mzh9.voJVDAp3G4u4bb8qm8et2_TuISW8fuqUXkDPUAqB2cY"}`}
        });
        const json = await response.json();
        return json
      }
    
    const user = async () => {
        return await getAPIData().then((response) => response['id']);
    };

    return (
        <h1> I'm HOME {user}</h1>
    );
}

export default Home;
import Avatar from "../assets/avatar-profile.png";
import NavBar from "../components/navBar";
import Pencil from "../assets/pencil-icon.png"

const hobbies = [
    'Frontend dev','Java','Web Dev','Python',
    'Backend dev','React','Ruby','CSS','HTML',
    'JavaScript','TypeScript','Git/Github','Node.js',
    'Branding','Creative Coding','NextJS','Interface Design',
    'Graphic Design','Database','Usability testing','Figma',
    'Blender','Elixir','User research','Phoenix','Adobe Creative Cloud'
]

function Profile(){
    return(
        <div>
            <NavBar />
            <div className="flex">
                <div className="w-2/5 flex flex-col ml-32">
                    <img
                        className="mt-16 h-[243px] w-[243px]"
                        src={Avatar}
                        alt="AvatarProfile"
                    />

                    <div className="text-white text-xl mt-[34px]"> Company </div>

                    <div className="text-white text-xl mt-4">  Role </div>

                    <div className="text-white text-xl mt-4">  Email </div>

                    <div className="text-white text-xl mt-4">  Discord </div>

                    <div className="text-white text-xl mt-4">  Location </div>

                    <div className="text-white text-base mt-8 w-[245px]">  
                        Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio
                    </div>

                    <button className="mt-10 w-[157px] h-[36px] bg-cerulean text-white text-base rounded-[6px]">
                        Edit Profile
                    </button>

                </div>

                <div className="mt-16 w-3/5 flex-shrink-0 items-center">
                    <div className="w-3/5 flex flex-col p-8 bg-lilac rounded-[20px]">
                        <div className="flex text-white text-xl"> 
                            Skills 
                        </div>

                        {/*<div className="flex mr-96 items-center"> 
                            <div className= "text-white text-base"> Edit </div>
                            <button>
                                <img
                                    className="mr-6"
                                    src={Pencil}
                                    alt="Pencil icon"
                                />
                            </button>
    </div>*/}

                        <div className="mt-6">
                            {hobbies.map((hobby) => (
                                <div
                                    key={hobby}
                                    className="bg-lilac text-white text-base inline-block py-2 px-4 ml-4 mt-4 border-2 border-white rounded-[20px]"
                                >
                                    {hobby}
                                </div>
                            ))} 
                        </div>

                                

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
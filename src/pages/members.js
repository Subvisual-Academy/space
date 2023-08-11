import NavBar from "../components/navBar";
import Avatar from "../assets/Avatar profile.png"

const users = [
    {
      "name": "Jess",
      "role": "Developer",
      "company": "Subvisual Academy"
    },
    {
      "name": "Tiago",
      "role": "Developer",
      "company": "Subvisual Academy"
    },
    {
      "name": "Natalia",
      "role": "Designer",
      "company": "Subvisual Academy"
    },
    {
      "name": "Masha",
      "role": "Product Manager",
      "company": "Subvisual Academy"
    },
    {
        "name": "Jess",
        "role": "Developer",
        "company": "Subvisual Academy"
      },
      {
        "name": "Tiago",
        "role": "Developer",
        "company": "Subvisual Academy"
      },
      {
        "name": "Natalia",
        "role": "Designer",
        "company": "Subvisual Academy"
      },
      {
        "name": "Masha",
        "role": "Product Manager",
        "company": "Subvisual Academy"
      },
      {
        "name": "Jess",
        "role": "Developer",
        "company": "Subvisual Academy"
      },
      {
        "name": "Tiago",
        "role": "Developer",
        "company": "Subvisual Academy"
      },
      {
        "name": "Natalia",
        "role": "Designer",
        "company": "Subvisual Academy"
      },
      {
        "name": "Masha",
        "role": "Product Manager",
        "company": "Subvisual Academy"
      }
]



function Members() {
    return(
        <div>
            <NavBar />
            <div className="flex">
                <div className="flex-none w-1/3">

                </div>
                <div className="flex-grow flex-col w-2/3">
                    <div className="flex">
                        <div className="flex-none w-3/5">
                            <input
                                id="email"
                                name="email"
                                type="text"
                                className="mt-16 w-full h-9 bg-dark-gray text-base text-navbar-components-gray rounded-md hover:border-2 hover:border-white active:border-2 active:border-blue-login p-3"
                                placeholder="Search for a member of the Space Center"
                            />
                        </div>
                    </div>
                
                    <div className="mt-8">
                        <div className="text-white text-xl font-bold">
                            Members
                        </div>
                        <div className="mt-10 grid grid-cols-3 gap-y-10">
                            {users.map((user, index) => (
                                <div key={index} className="w-64 h-72 bg-dark-cyan text-white rounded-lg flex flex-col justify-center items-center">
                                    <img
                                        className="w-32 h-32"
                                        src={Avatar}
                                        alt= "Profile pic place holder"
                                    />
                                    <p className="mt-6 text-xl"> {user.name} </p>
                                    <p className="mt-2 text-base">{user.role} </p>
                                    <div className="mt-2 text-base"> {user.company} </div>
                                </div>                                  
                           ))}
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default Members;
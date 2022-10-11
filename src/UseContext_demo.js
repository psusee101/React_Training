// import { useContext,createContext } from "react";
// import {useState} from 'react'

// const UserContext = createContext();


// function Component1()
// {
//     const [user,setUser] = useState("Sachin");

//     return(
//         <UserContext.Provider value={user}>
//         <h1>{`Hello ${user}!`}</h1>
//         <Component2 user={user}/>
//         </UserContext.Provider>
//     );
// }

// function Component2()
// {
//     return(
//         <>
//         <h1>Component2</h1>
//         <Component3 />
//         </>
//     );
// }

// function Component3()
// {
//     return(
//         <>
//         <h1>Component3</h1>
//         <Component4 />
//         </>
//     );
// }
// function Component4()
// {
//     return(
//         <>
//         <h1>Component2</h1>
//         <Component5 />
//         </>
//     );
// }

// function Component5()
// {
//     return(
//         <>
//         <h1>Component5</h1>
//         <h1>{`Hello ${user} Again!`}</h1>
//         </>
//     );
// }

// export default Component1;
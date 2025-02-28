// import Learner from "./Learner";

import SearchBar from "./SearchBar"
import Header from "./Header"
import EmployeeList from "./EmployeeList"
import squirrel from '../imgs/squirrel.png'
import bunny from '../imgs/bunny.jpg'
import sloth from '../imgs/sloth.jpg'
// Header + SearchBar + EmployeeList 
function Homepage() {
    // added
  const employees = [
    {name: "James King", position: "President and CEO", image: squirrel},
    {name: "Julie Taylor",
      position: "VP of Marketing",
      image:  "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg",
    },
    {name: "Jennifer Lee", position: "CFO", image: bunny},
    {name: "John Williams", position: "VP of Engineering", image: sloth},
  ];

    return (
        <div style={{border: "3px solid yellow", padding: "5px", width: "50%"}}>

      <h1>Homepage</h1>
      <Header />
      <SearchBar />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default Homepage;

{/* export default Homepage;

<Header/>
<SearchBar/>
<EmployeeList/>

<Learner />
</div>
    )
} */}



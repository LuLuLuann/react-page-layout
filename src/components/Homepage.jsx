import SearchBar from "./SearchBar"
import Header from "./Header"
import EmployeeList from "./EmployeeList"

// Header + SearchBar + EmployeeList 
function Homepage() {
    return (
        <div style={{border: "3px solid yellow", padding: "5px", width: "50%"}}>

<Header/>
<SearchBar/>
<EmployeeList/>
</div>
    )

}

export default Homepage
// all of the employee list items
import EmployeeListItem from "./EmployeeListItem"

function EmployeeList() {
return(
    <div  style={{border: "3px solid purple", padding: "5px", marginbottom: "5px"}}>
    <EmployeeListItem/>
    <EmployeeListItem/>
    <EmployeeListItem/>
    </div>
)
}

export default EmployeeList
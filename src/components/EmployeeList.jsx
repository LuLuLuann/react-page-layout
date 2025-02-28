// all of the employee list items
import EmployeeListItem from "./EmployeeListItem"

function EmployeeList({employees}) {
    // console.log(props)
return(
    <div  style={{border: "3px solid purple", padding: "5px", marginbottom: "5px"}}>
    {/* <EmployeeListItem/>
    <EmployeeListItem/>
    <EmployeeListItem/> */}
    {employees.map((employee, index) => (
        <EmployeeListItem
        key={index}
        name={employee.name}
        position={employee.position}
        image={employee.image}
      />
    ))}
    </div>
)
}

export default EmployeeList
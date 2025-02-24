//  img + name + job title
import squirrel from '../imgs/squirrel.png'

function EmployeeListItem() {
    return (
        <div style={{ border: "3px solid red", padding: "5px", marginBottom: "5px", display: "flex"}}>
            <img src={squirrel} alt="squirrel" style={{ borderRadius: "60%", width: "100px", marginRight: "10px"}} />
            <div>
                <h4>Nutty McNuterson</h4>
            <p>Nut Organizer</p>
            </div>
        </div>
    )
}

export default EmployeeListItem

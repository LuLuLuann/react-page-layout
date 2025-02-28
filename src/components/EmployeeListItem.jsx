//  img + name + job title
import squirrel from '../imgs/squirrel.png'

function EmployeeListItem({ name, position, image }) {
    return (
        <div style={{ border: "3px solid red", padding: "5px", marginBottom: "5px", display: "flex" }}>
            <img src={image} style={{ borderRadius: "60%", width: "100px", marginRight: "10px" }} />
            <div>
                <h4>{name}</h4>
                <p>{position}</p>
            </div>
        </div>
    )
}

export default EmployeeListItem

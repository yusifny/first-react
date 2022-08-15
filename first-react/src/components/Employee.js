function Employee(props) {

    return (
        <>
            <h3>{props.name}</h3>
            <h3>{props.surname}</h3>
            <h3>{props.age}</h3>
            <b>{props.role ? props.role : "No role"}</b>
            <hr></hr>
        </>
    ) 
}

export default Employee;
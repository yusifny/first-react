function Employee(props) {

    return (
        <>
            <h3>{props.name}</h3>
            <b>{props.role ? props.role : "No role"}</b>
            <hr></hr>
        </>
    ) 
}

export default Employee;
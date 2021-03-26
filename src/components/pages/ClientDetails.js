const ClientDetails = (props) => {
    let infoList = Object.keys(props.client).map((key) => 
        <p>{key}: {props.client[key]}</p>
    )
    return (
        <div>
            <h4>Client's informations</h4>
            <div>
                {infoList}
            </div>
            <button onClick={(e) => props.changePage("home")}>Fermer</button>

        </div>
    )
}

export default ClientDetails;
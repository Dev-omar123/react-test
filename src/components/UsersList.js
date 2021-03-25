import React from 'react';

export default class UsersList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
        }
    }

    componentDidMount(){
        // get all users in the database //
    }

    render(){
        const clientsItems = this.props.users.map((client, index) => 
            <li className="client" key={client.id}>
                <p onClick={(e) => this.props.clientClicked(client.id, index)}>{client.nom} {client.prenom}</p>
                <div>
                    <button onClick={(e) => this.props.editClient(client.id, index)} className="edit_btn">edit client</button>
                    <button onClick={(e) => this.props.deleteClient(client.id, index)} className="delete_btn">delete</button>
                </div>
            </li>
        );

        return (
            <div id="clientslist">
                <h4>Noms de clients:</h4>
                <ul id="clients">{clientsItems}</ul>
            </div>
        );
    }
}
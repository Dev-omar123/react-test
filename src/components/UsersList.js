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
        const clientsItems = this.props.users.map((client) => 
            <li className="client" key={client.id} onClick={(e) => { this.props.clientClicked(client.id)}}>
                <p>{client.nom} {client.prenom}</p>
                <div>
                    <button onClick={this.props.editClient} className="edit_btn">edit</button>
                    <button onClick={this.props.deleteClient} className="delete_btn">edit</button>
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
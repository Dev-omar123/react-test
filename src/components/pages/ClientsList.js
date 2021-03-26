import React from 'react';

export default class ClientsListPage extends React.Component{
    constructor(props){
        super(props);
        this.api = "https://applistage.herokuapp.com/api/users";
        this.onDeleteButtonClicked = this.onDeleteButtonClicked.bind(this);
        this.onEditButtonClicked = this.onEditButtonClicked.bind(this);
        this.showDetailPage = this.showDetailPage.bind(this);
    }

    componentDidMount(){

    }

    deleteClient(id){
        let url = this.api+"/"+id;
        fetch(url, {
            method: "DELETE"
        }).then((resp) => resp.json())
        .then((resp) => {
            if(resp.status === "ok"){
                this.props.onClientDeleted();
            }
        });
    }

    onEditButtonClicked(e, client){
        e.preventDefault();
        this.props.changePage("edit");
        this.props.selectClient(client)
    }

    onDeleteButtonClicked(e, client){
        e.preventDefault();
        this.deleteClient(client.id);
    }

    showDetailPage(e, client){
        e.preventDefault();
        console.log(client);
        this.props.selectClient(client);
        this.props.changePage("details");
    }

    render(){
        let clientsList = this.props.clients.map((client, index) => 
            <div key={client.id} className="client">
                <p onClick={ (e) => this.showDetailPage(e, client) }>
                    Noms: {client.nom} {client.prenom}
                </p>
                <p>Age: {client.age}</p>
                <div>
                    <button 
                        onClick={(e) => this.onEditButtonClicked(e, client)}>Modifier</button>
                    <button 
                        onClick={(e) =>this.onDeleteButtonClicked(e, client)}>Effacer</button>
                </div>
            </div>
        );
        return (
            <div className="clientsList">
                <h4>Les clients</h4>
                <div className="clients">
                    {clientsList}
                </div>
            </div>
        );
    }
}
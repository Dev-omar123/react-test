import React from 'react';
import InputField from '../ui/InputField';

export default class ClientsUpdatePage extends React.Component{
    constructor(props){
        super(props);
        this.api = "https://applistage.herokuapp.com/api/users";
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancel = this.cancel.bind(this);
        this.updateClientRequest = this.updateClientRequest.bind(this);
    }

    updateClientRequest(){
        let client = this.props.client;
        let url = this.api+"/"+this.props.client.id;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(client)
        }).then((resp) => resp.json())
        .then((resp) => {
            if(resp.status === "ok"){
                this.props.onClientUpdated();
            }
        });
    }

    handleChange(e){
        e.preventDefault();
        this.props.onClientFieldChange(e);
    }

    handleSubmit(e){
        e.preventDefault();
        this.updateClientRequest()
    }

    cancel(e){
        e.preventDefault();
        this.props.changePage("home");
    }

    render(){
        // console.log("client update", this.props.client);
        return (
            <div>
                <h4>Modification page</h4>
                <InputField 
                    name="nom"
                    label="Nom: "
                    value={this.props.client.nom} 
                    onChange={this.handleChange}/>

                <InputField 
                    name="prenom"
                    label="Prénom: "
                    value={this.props.client.prenom} 
                    onChange={this.handleChange}/>

                <InputField 
                    name="telephone"
                    label="Téléphone: " 
                    value={this.props.client.telephone} 
                    onChange={this.handleChange}/>

                <InputField 
                    name="age"
                    label="Age: "
                    value={this.props.client.age} 
                    onChange={this.handleChange}/>

                <InputField 
                    name="sexe" 
                    label="Sexe: "
                    value={this.props.client.sexe} 
                    onChange={this.handleChange}/>

                <InputField 
                    name="poste" 
                    label="Poste: "
                    value={this.props.client.poste} 
                    onChange={this.handleChange}/>

                <InputField 
                    name="adresse" 
                    label="Adresse: "
                    value={this.props.client.adresse} 
                    onChange={this.handleChange}/>
                    
                <div>
                    <button onClick={this.handleSubmit}>Envoyer</button>
                    <button onClick={this.cancel}>Annuler</button>
                </div>
            </div>
        )
    }
}
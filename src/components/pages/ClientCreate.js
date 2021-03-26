import React from 'react';
import InputField from '../ui/InputField';


export default class ClientsCreatePage extends React.Component{
    constructor(props){
        super(props);
        this.api = "https://applistage.herokuapp.com/api/users";
        this.state = {
            nom: "",
            prenom: "",
            age: "",
            sexe: "",
            adresse: "",
            poste: "",
            telephone: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createClientRequest = this.createClientRequest.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    createClientRequest(){
        fetch(this.api, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((resp) => resp.json())
        .then((resp) => {
            if(resp.status === "ok"){
                this.setState({});
                this.props.onClientCreated();
            }
        });
    }

    handleChange(e){
        e.preventDefault();
        let key = e.target.name;
        let value = e.target.value;
        let data = {};
        data[key] = value;
        this.setState(data);
    }

    handleSubmit(e){
        e.preventDefault();
        this.createClientRequest();
    }

    cancel(e){
        e.preventDefault();
        this.props.changePage("home");
    }

    render(){
        return (
            <div>
                <h4>Modification page</h4>
                <form>
                    <InputField 
                        name="nom"
                        label="Nom: "
                        value={this.state.nom} 
                        onChange={this.handleChange}/>

                    <InputField 
                        name="prenom"
                        label="Prénom: "
                        value={this.state.prenom} 
                        onChange={this.handleChange}/>

                    <InputField 
                        name="telephone"
                        label="Téléphone: " 
                        value={this.state.telephone} 
                        onChange={this.handleChange}/>

                    <InputField 
                        name="age"
                        label="Age: "
                        value={this.state.age} 
                        onChange={this.handleChange}/>

                    <InputField 
                        name="sexe" 
                        label="Sexe: "
                        value={this.state.sexe} 
                        onChange={this.handleChange}/>

                    <InputField 
                        name="poste" 
                        label="Poste: "
                        value={this.state.poste} 
                        onChange={this.handleChange}/>

                    <InputField 
                        name="adresse" 
                        label="Adresse: "
                        value={this.state.adresse} 
                        onChange={this.handleChange}/>
                    
                    <div>
                        <button onClick={this.handleSubmit}>Envoyer</button>
                        <button onClick={this.cancel}>Annuler</button>
                    </div>
                </form>
            </div>
        );
    }
}
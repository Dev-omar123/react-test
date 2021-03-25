import React from 'react';
import InputField from './InputField';

export default class UserForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nom :"",
            prenom : "",
            telephone : "",
            sexe : "",
            poste : "",
            adresse : "",
            age :""
        }
        this.onChangeUserInput = this.onChangeUserInput.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit(e){
        e.preventDefault();
        console.log(this.state);
    }

    onChangeUserInput(data){
        let update = {}
        update[data.key] = data.value;
        this.setState(update);
        console.log(update);
    }

    render(){
        return (
            <form onSubmit={this.submit}>
                <InputField 
                    name="nom"
                    label="Nom" 
                    className="input"
                    inputType="text"
                    inputPlaceholder="Nom"
                    onChange={this.onChangeUserInput}/>
                
                <InputField 
                    name="prenom"
                    label="Prénom" 
                    className="input"
                    inputType="text"
                    inputPlaceholder="Prénom"
                    onChange={this.onChangeUserInput}/>

                <InputField 
                    name="telephone"
                    label="Téléphone" 
                    className="input"
                    inputType="tel"
                    inputPlaceholder="Télephone"
                    onChange={this.onChangeUserInput}/>  
                
                <InputField 
                    name="poste"
                    label="Poste" 
                    className="input"
                    inputType="text"
                    inputPlaceholder="Poste"
                    onChange={this.onChangeUserInput}/> 
                
                <InputField 
                    name="adresse"
                    label="Adresse" 
                    className="input"
                    inputType="text"
                    inputPlaceholder="Adresse"
                    onChange={this.onChangeUserInput}/>

                <InputField 
                    name="age"
                    label="Age" 
                    className="input"
                    inputType="number"
                    inputPlaceholder="Age"
                    onChange={this.onChangeUserInput}/>                
                
                <button type="submit">Valider</button>
            </form>
        );
    }
}
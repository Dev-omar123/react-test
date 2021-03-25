//import logo from './logo.svg';
import './App.css';
import React from "react";
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

class  App extends React.Component {
  	constructor(props) {
    	super(props);
		this.api = "https://applistage.herokuapp.com";
		this.state = {
			loading: true,
			users: []
		}
  	}
   
  	componentDidMount () {
    	// récupère toutes les entités - GET
	  	this.getClients();
	}
	
	getClients(){
		let endpoint = this.api+"/users/";
	}

	getClientById(id){
		let endpoint = this.api+"/users/"+id;
	}
	
	updateClient(data){
		let endpoint = this.api+"/users/";
	}
	
	removeClient(id){
		let endpoint = this.api+"/users/"+id;
	}

	render(){
		return (
			<div>
				<h1>Hello World</h1>
				<UsersList users={this.state.users} />
				<UserForm/>
			</div>
		);
	}
}

export default App;
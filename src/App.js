//import logo from './logo.svg';
import './App.css';
import React from "react";
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

class  App extends React.Component {
  	constructor(props) {
    	super(props);
		this.api = "https://applistage.herokuapp.com/api";
		this.state = {
			loading: true,
			showclient: false,
			users: []
		}
		this.getClients = this.getClients.bind(this);
		this.getClientById = this.getClientById.bind(this);
		this.updateClient = this.updateClient.bind(this);
		this.removeClient = this.removeClient.bind(this);
  	}
   
  	componentDidMount () {
    	// récupère toutes les entités - GET
	  	this.getClients();
	}
	
	getClients(){
		let endpoint = this.api+"/users/";
		fetch(endpoint, {
			method: 'GET'
		}).then((data) => {
			return data.json()
		}).then((response) => {
			this.setState({
				loading: false,
				users: response.users
			})
		})
	}

	getClientById(id){
		let endpoint = this.api+"/users/"+id;
		fetch(endpoint, {
			method: 'GET'
		}).then((data) => {
			return data;
		}).then((response) => {
			console.log("response", response);
		})
	}
	
	updateClient(data){
		let endpoint = this.api+"/users/";
		fetch(endpoint, {

		}).then((data) => {
			return data
		}).then((response) => {
			console.log(response);
		})
	}

	showDetailPage(id){
		
	}
	
	removeClient(id){
		let endpoint = this.api+"/users/"+id;
	}

	render(){
		return (
			<div>
				<h1>Clients database App</h1>
				<div className="form_list">
					<UsersList users={this.state.users} />
					<UserForm/>
				</div>
				
			</div>
		);
	}
}

export default App;
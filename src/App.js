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
			users: [],
			selectedClientId: null,
			showForm: false
		}
		this.getClients = this.getClients.bind(this);
		this.getClientById = this.getClientById.bind(this);
		this.updateClient = this.updateClient.bind(this);
		this.removeClient = this.removeClient.bind(this);
		this.showDetailPage = this.showDetailPage.bind(this);
		this.toggleShowForm = this.toggleShowForm.bind(this);
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
		this.setState({
			showDetailPage: true,
			selectedClientId: id
		});
	}
	
	removeClient(id){
		let endpoint = this.api+"/users/"+id;
		fetch(endpoint, {

		}).then((response) => response.json())
		.then((response) => {

		});
	}


    toggleShowForm(){
		this.setState({
			showForm: !this.state.showForm
		});
    }

	render(){
		if(this.state.showDetailPage){
			return (
				<div>
					<h4>Client Detail</h4>
				</div>
			)
		}
		else{
			return (
				<div id="app">
					<h1 className="app_title">Clients database App</h1>
					<div className="formList">
						<button onClick={this.toggleShowForm}>
							{ this.state.showForm ? "Close Form" : "Show Form"}
						</button>
						<UsersList users={this.state.users} clientClicked={this.showDetailPage}/>
						<UserForm show={this.state.showForm}/>
					</div>
				</div>
			);
		}
	}
}

export default App;
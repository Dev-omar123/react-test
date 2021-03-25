//import logo from './logo.svg';
import './App.css';
import React from "react";
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';
import ClientDetails from './components/ClientDetails';

class  App extends React.Component {
  	constructor(props) {
    	super(props);
		this.api = "https://applistage.herokuapp.com/api";
		this.state = {
			loading: true,
			showclient: false,
			users: [],
			selectedClientId: null,
			showForm: false,
			showingDetailPage: false
		}
		this.getClients = this.getClients.bind(this);
		this.getClientById = this.getClientById.bind(this);
		this.updateClient = this.updateClient.bind(this);
		this.removeClient = this.removeClient.bind(this);
		this.showDetailPage = this.showDetailPage.bind(this);
		this.toggleShowForm = this.toggleShowForm.bind(this);
		this.toggleShowDetailPage = this.toggleShowDetailPage.bind(this);
		this.editClient = this.editClient.bind(this);
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

	showDetailPage(id, index){
		this.setState({
			showingDetailPage: true,
			selectedClientId: index
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

	editClient(index){
		let client = this.state.users[index];
		if(client){
			this.setState({
				selectedClientId: client.id
			});
		}
	}

	toggleShowDetailPage(e){
		e.preventDefault();
		this.setState({
			showingDetailPage: !this.state.showingDetailPage
		})
	}

	render(){
		let index = this.state.selectedClientId;
		let detailpage = (
			<div>
				<button onClick={this.toggleShowDetailPage}>Close page</button>
				<ClientDetails infos={this.state.users[index]} />
			</div>
		);
		let defaultpage = (
			<div>
				<UsersList 
					users={this.state.users} 
					clientClicked={this.showDetailPage}
					deleteClient={this.removeClient}
					editClient={this.editClient}
				/>
				<UserForm show={this.state.showForm} selectedClient={this.selectedClientId}/>
			</div>
		);
	
		return (
			<div id="app">
				<h1 className="app_title">Clients database App</h1>
				<hr/>
				<div className="formList">
					<button onClick={this.toggleShowForm}>
						{this.state.showForm ? "Fermer" : "Ajouter un Client"}
					</button>
					{this.state.showingDetailPage ? detailpage : defaultpage}
				</div>
			</div>
		);
	}
}

export default App;
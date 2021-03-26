import React from 'react';
import ClientsListPage from './components/pages/ClientsList';
import ClientsCreatePage from './components/pages/ClientCreate';
import ClientsDetailsPage from './components/pages/ClientDetails';
import ClientsUpdatePage from './components/pages/ClientUpdate';

import './reset.css';
import './App.css';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.api = "https://applistage.herokuapp.com/api/users";
		this.state = {
			currentPage: "home",
			clients: [],
			client: {}
		}
		this.showHomepage = this.showHomepage.bind(this);
		this.changePage = this.changePage.bind(this);
		this.getClients = this.getClients.bind(this);
		this.onClientCreated = this.onClientCreated.bind(this);
		this.onClientUpdated = this.onClientUpdated.bind(this);
		this.onClientDeleted = this.onClientDeleted.bind(this);
		this.showClientCreatePage = this.showClientCreatePage.bind(this); 
		this.showClientDetail = this.showClientDetail.bind(this);
		this.selectClient = this.selectClient.bind(this);
		this.onClientFieldChange = this.onClientFieldChange.bind(this);
	}

	componentDidMount(){
		this.getClients();
	}

	getClients(){
		fetch(this.api)
			.then((res) => res.json())
			.then((res) => {
				if(res.status === "ok"){
					this.setState({
						clients: res.users,
						client: {}
					});
				}
			});
	}

	showHomepage(){
		if(this.state.currentPage !== "home"){
			this.changePage("home");
		}
	}

	changePage(page){
		this.setState({
			currentPage: page
		});
	}

	showClientDetail(client){
		let currentClient = Object.assign({}, client);
		this.setState({
			client: currentClient
		});
		this.changePage("details");
	}

	onClientCreated(){
		alert("Client account created successfully! ");
		this.changePage("home");
		this.getClients();
	}

	onClientUpdated(){
		alert("Client account updated successfully! ");
		this.changePage("home");
		this.getClients();
	}

	onClientDeleted(){
		alert("Client account deleted !");
		this.changePage("home");
		this.getClients();
	}

	showClientCreatePage(e){
		e.preventDefault();
		this.changePage("create");
	}

	onClientFieldChange(e){
		let client = Object.assign({}, this.state.client);
		let key = e.target.name;
		let value = e.target.value;
		client[key] = value;
		this.setState({
			client: client
		})
	}

	selectClient(data){
		let client = Object.assign({}, data);
		if(client){
			this.setState({
				client: client
			});
		}
	}

	render(){
		let page = null
		switch (this.state.currentPage) {
			case "home":
				page = (
					<ClientsListPage 
						clients={this.state.clients} 
						showClientDetail={this.showClientDetail}
						onClientDeleted={this.onClientDeleted}
						onClientClick={this.editPage}
						changePage={this.changePage}
						selectClient={this.selectClient}
						showClientPage={this.showClientDetail}/>
				);
				break;
			case "details":
				page = (
					<ClientsDetailsPage 
						client={this.state.client} 
						changePage={this.changePage}/>
					);
				break;
			case "create":
				page = <ClientsCreatePage onClientCreated={this.onClientCreated} changePage={this.changePage}/>;
				break;
			case "edit":
				page = (
					<ClientsUpdatePage 
						client={this.state.client}
						onClientUpdated={this.onClientUpdated}
						changePage={this.changePage}
						onClientFieldChange={this.onClientFieldChange}/>
						);
				break;
			default:
				break;
		}
		

		return (
			<div id="app">
				<div id="apptitle">
					<h5>Clients database App</h5>
				</div>
				<div id="controls">
					<button onClick={this.showClientCreatePage}>Ajouter un client</button>
				</div>
				<div>
					{page}
				</div>
			</div>
		);
	}
}
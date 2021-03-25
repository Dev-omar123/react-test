import React from 'react';

export default class ClientDetails extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }
    render(){
        let infosList = Object.keys(this.props.infos).map((key) => 
            <p>{key}: {this.props.infos[key]}</p>
        );
        return (
            <div>
                <h4>Informations du Client:</h4>
                <div>{infosList}</div>
            </div>
        )
    }
}
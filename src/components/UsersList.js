import React from 'react';

export default class UsersList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            users: []
        }
    }

    componentDidMount(){
        // get all users in the database //
        let url = "https://applistage.herokuapp.com/users/";
        fetch(url)
            .then((data) => {
                return data.json()
            }).then((res) => {
                console.log(res);
                this.setState({
                    loading: false,
                    users: res
                });
            });
    }

    render(){
        return (
            <div className="users">
                <ul>

                </ul>
            </div>
        );
    }
}
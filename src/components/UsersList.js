import React from 'react';

export default class UsersList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
        }
    }

    componentDidMount(){
        // get all users in the database //
    }

    render(){
        const clientsList = props.users.map((client) => {
            <div id='client'>

            </div>
        });

        return (
            <div className="users">
                <ul>

                </ul>
            </div>
        );
    }
}
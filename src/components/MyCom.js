import React from 'react';
import DisplayInfor from './Display';
import AddUserInfor from './AddUserInfor';

class MyCom extends React.Component {
    //JSX

    state = {
        listUsers: [
            { id: 1, name: "Name 01", age: "16" },
            { id: 2, name: "Name 02", age: "30" },
            { id: 3, name: "Name 03", age: "60" },
        ]
    }
    handleAddNewUser = (userObj) => {
        //alert('me')
        console.log(">> check data from parent:", userObj)
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    handDeleteUser = (userId) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter(item => item.id != userId);
        this.setState({
            listUsers: listUsersClone
        })
    }


    render() {
        //const test = "morning hellohello"
        const test = { lop: 'cntt', noio: 'da nang' };
        return (
            <React.Fragment>
                <br />
                {console.log('check test:', test)}
                <br />
                {/* {test} */}
                <div className="name-a">
                    <AddUserInfor handleAddNewUser={this.handleAddNewUser} /> {/* Truyền prop vào đây */}
                    <DisplayInfor
                        listUsers={this.state.listUsers}
                        handleAddNewUser={this.handleAddNewUser}
                        handDeleteUser={this.handDeleteUser}
                    />
                </div>
                <div className="name-b">

                </div>
            </React.Fragment>

        );
    }

}

export default MyCom;


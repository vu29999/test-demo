import React, { useState } from 'react';
import logo from './../logo.svg'

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }

    constructor(props) {
        console.log(">> call constructor: 1đđdddddd")
        super(props);
        this.state = {
            isShowListUser: true
        };
    }

    useState

    componentDidMount() {
        console.log('>> call me component did mount');
        setTimeout(() => {
            document.title = 'group bai newnew' //title web
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log('>> call me component did update')
        console.log('>> call me component did update', this.props, prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 8) {
                alert('You got 8 users')
            }
        }
    }

    handleShowHide = () => {
        //alert('me')
        this.setState({
            //isShowListUser: true
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        console.log('>> call me render')
        // lay het
        const { listUsers } = this.props; // = const listUsers = this.props.listUsers;
        console.log(listUsers)
        return (
            <div class="wrap-test">
                <img src={logo} />
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        Hide list users:
                        {this.state.isShowListUser === true ? "Hide list users" : "hide list usus"}
                    </span>
                </div>
                {this.state.isShowListUser && // ẩn hiện tab
                    <div>
                        {listUsers.map((user, index) => {
                            console.log(">> check map user", user)
                            //c2 pro 
                            return (
                                <div key={user.id} className={+user.age > 18 ? "pink" : "red"}>
                                    <div>
                                        <div style={{ color: 'orange', paddingTop: '50px' }}>My namee c2  {user.name}</div>
                                        <div>My ages c2 {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handDeleteUser(user.id)}>Delete</button>
                                    </div>
                                    <hr />
                                    <h1>Xin chào {this.props.name}</h1>;
                                </div>
                            )

                            // if (+user.age > 18) {
                            //     //console.log(user)
                            //     return (
                            //         <div key={user.id} className="pink">
                            //             <div>My namee c2  {user.name}</div>
                            //             <div>My ages c2 {user.age}</div>
                            //             <hr />
                            //         </div>
                            //     )
                            // } else {
                            //     return (
                            //         <div key={user.id} className="red">
                            //             <div>My namee c2  {user.name}</div>
                            //             <div>My ages c2 {user.age}</div>
                            //             <hr />
                            //         </div>
                            //     )
                            // }
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;
import React from 'react';
import './AddUserInfo.scss';

class AddUserInfor extends React.Component {
    state = {
        name: 'vu',
        address: 'ha tinh',
        age: 26
    };
    handleOnChangeInput = (event) => {
        //alert('me')
        this.setState({
            name: event.target.value
        })
        //console.log(event, event.target.value)
    }
    handleOnChangeAge = (event) => {

        //no code: this.state.age = event.target.valuevalue
        this.setState({
            age: event.target.value
        })
    }


    handleOnSubmit = (event) => {
        event.preventDefault();//chống load trang
        //alert('me')
        // console.log(this.state);
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-ramdom',
            name: this.state.name,
            age: this.state.age
        });
    }



    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)} />
                    <label>Your age:</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)} />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfor;
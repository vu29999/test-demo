import React, { useState } from 'react';
import './AddUserInfo.scss';

const Add2 = (props) => {
    // state = {
    //     name: 'vu',
    //     address: 'ha tinh',
    //     age: ''
    // };

    const [name, setName] = useState('');
    const [address, setAddress] = useState('ha tinh');
    const [age, setAge] = useState('');

    const handleOnChangeInput = (event) => {
        //alert('me')
        // this.setState({
        //     name: event.target.value
        // })
        //console.log(event, event.target.value)
        setName(event.target.value)
    }
    const handleOnChangeAge = (event) => {

        //no code: this.state.age = event.target.valuevalue
        // this.setState({
        //     age: event.target.value
        // })
        setAge(event.target.value)
    }


    const handleOnSubmit = (event) => {
        event.preventDefault();//chống load trang
        //alert('me')
        // console.log(this.state);
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-ramdom',
            name: name,
            age: age
        });
    }

    return (
        <div>
            My name is {name} and I'm from {address} and I'm {age}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name:</label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => handleOnChangeInput(event)} />
                <label>Your age:</label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => handleOnChangeAge(event)} />
                <button>submit</button>
            </form>
        </div>
    )

}

export default Add2;

import React from 'react';
import UserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    //JSX
    state = {
        name: 'vu',
        address: 'ha tinh',
        age: 26
    };

    // handClick() {
    //     console.log(">> click me my button")
    // }

    //handleClick = (event) => {

    handleClick2(event) {
        //console.log(event)
        //console.log(event.target) //html
        console.log(">> click me my button");
        console.log("My name is", this.state.name)

        //click cập nhật
        this.setState({
            name: 'phi vu'
        })
    }
    handleOnMoverOver2(event) {
        console.log(event.pageX)
    }


    render() {
        const myAge = 50;
        const myInfor = ['a', 'b', 'c'];
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address} and I'm {this.state.age}
                <button onMouseOver={this.handleOnMoverOver2}>Hover me</button>
                {/* <button onClick={this.handClick}>click me</button> */}
                <button onClick={(event) => { this.handleClick2(event) }}>click me</button>


                <UserInfor></UserInfor>
                <br />
                <DisplayInfor name="phi vu" age="25"></DisplayInfor>
                <hr />
                <DisplayInfor name="phi vuuuuu" age={myAge} myInfor={myInfor}></DisplayInfor>
            </div>
        );
    }

    // handleClick(event) {
    //     //console.log(event)
    //     //console.log(event.target) //html
    //     console.log(">> click me my button");

    //     //click cập nhật merge state => react class

    //     this.setState({
    //         name: 'phi vu',
    //         age: Math.floor((Math.random() * 100) + 1)
    //     })
    // }
    // handleOnMoverOver(event) {
    //     //console.log(event.pageX)
    // }

    // render() {
    //     return (
    //         <div>
    //             My name is {this.state.name} and I'm {this.state.age}
    //             <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
    //             {/* <button onClick={this.handClick}>click me</button> */}
    //             <button onClick={(event) => { this.handleClick(event) }}>click me</button>

    //         </div>
    //     );
    // }
}

export default MyComponent;


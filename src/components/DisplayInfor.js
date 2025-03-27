// import React from 'react';

// class DisplayInfor extends React.Component {

//     render() {
//         //props => viết tắt properties 
//         //console.log(this.props)
//         const { age, name } = this.props; //destructuring array/object hiện nhiều?
//         return (
//             <div>
//                 {/* <div>My name {this.props.name}</div>
//                 <div>My age {this.props.age} </div> */}
//                 <div>My name {name}</div>
//                 <div>My age {age} </div>
//                 <hr />
//                 <div>My name {name}</div>
//                 <div>My age {age} </div>
//                 <hr />
//                 <div>My name {name}</div>
//                 <div>My age {age} </div>

//             </div>
//         )
//     }
// }

//export default DisplayInfor;


import React from 'react';

class DisplayInfor extends React.Component {

    render() {
        //props => viết tắt properties 
        //console.log(this.props)
        const { age, name } = this.props;

        return (
            <div>
                <div>My name {name}</div>
                <div>My age {age} </div>
            </div>
        )
    }
}

export default DisplayInfor;
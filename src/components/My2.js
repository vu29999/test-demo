import React, { useState } from 'react'; // ✅ Import useState
import Dis from './Dis2';
import Add from './Add2';

const My2 = (props) => {
    // State lưu danh sách user
    const [listUsers, setListUsers] = useState([
        { id: 1, name: "Name 01", age: "16" },
        { id: 2, name: "Name 02", age: "30" },
        { id: 3, name: "Name 03", age: "60" },
    ]);

    // Hàm thêm user
    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);
    };

    // Hàm xóa user
    const handDeleteUser = (userId) => {
        setListUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    };

    return (
        <React.Fragment>
            <br />
            <div className="name-a">
                <Add handleAddNewUser={handleAddNewUser} />
                <Dis listUsers={listUsers} handDeleteUser={handDeleteUser} />
            </div>
            <div className="name-b"></div>
        </React.Fragment>
    );
};

export default My2;

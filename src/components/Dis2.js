import React, { useEffect, useState } from 'react';


const Dis = (props) => {
    // const handleShowHideListUser = () => {
    //     alert('click me')
    //     setShowHideListUser()
    // }

    const { listUsers, handDeleteUser } = props; // ✅ Lấy props handDeleteUser
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser); // ✅ Đảo trạng thái
    };

    console.log(">> call me render")

    useEffect(
        () => {
            // setTimeout(() => {
            //     document.title = "vu it"
            // }, 3000)
            if (listUsers.length === 0) {
                alert('You deleted all the users')
            }
            console.log(">> call me useEffect")
        }, [listUsers]
    );

    return (
        <div className="wrap-test">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list users" : "Show list users"}
                </span>
            </div>
            {isShowHideListUser &&
                <div>
                    {listUsers.map((user, index) => {
                        console.log(">> check map user", user)
                        //c2 pro 
                        return (
                            <div key={user.id} className={+user.age > 18 ? "pink" : "red"}>
                                <div>
                                    <div>My namee c2  {user.name}</div>
                                    <div>My ages c2 {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => handDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Dis;



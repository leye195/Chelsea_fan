import React from 'react';
const Management=(props)=>{
    const get_tags=()=>{
        const{staffs}=props;
        const tags=staffs.map((staff)=>{
            return (
            <li key={staff._id}>
                <div>
                    <img src={`http://localhost:3030${staff.img}`} alt={staff.name}/>
                    <div>
                        <span className="club">Chelsea</span>
                        <h4 className="name">{staff.name}</h4>
                        <span className="role">{staff.role}</span>
                        <p className="country">{staff.country}</p>
                    </div>
                </div>
            </li>)
        })
        return tags;
    }
    return <div className="management">
        <div>
            <h4>Coaching Staffs</h4>
            <ul>
                {get_tags()}
            </ul>
        </div>
    </div>
}
export default Management;
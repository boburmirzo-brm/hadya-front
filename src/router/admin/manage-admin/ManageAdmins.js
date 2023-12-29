import React, { useState } from 'react'
import {useGetUsersQuery, useDeleteUserMutation,useSignUpMutation} from "../../../context/userApi"

const initialState = {name: "", username: "", password: ""}
function ManageAdmins() {
    const [user, setUser] = useState(initialState)
    const [signUp, {isLoading}] = useSignUpMutation()
    const [deleteUser, {isLoading: deleteLoading}] = useDeleteUserMutation()
    const {data, isLoading: dataLoading} = useGetUsersQuery()

    const handleChange = (e)=> {
        let value = e.target.value
        let name = e.target.name
        setUser(p => ({...p, [name]: value}))
    }
    const handleCreateUser = (e)=>{
        e.preventDefault()
        signUp(user)
            .then(res=>{
                console.log(res);
            })
    }
    const handleDeleteUser = (_id)=>{
        deleteUser(_id)
            .then(res=>{
                console.log(res);
            })
    }
  return (
    <div style={{padding: 50}}>
        <form onSubmit={handleCreateUser} action="">
            <input required value={user.name} onChange={handleChange} placeholder='name' name='name' type="text" />
            <input required value={user.username} onChange={handleChange} placeholder='username' name='username' type="text" />
            <input required value={user.password} onChange={handleChange} placeholder='password' name='password' type="text" />
            <button disabled={isLoading}>Create User</button>
        </form>
        <br />
        <br />
        {
            dataLoading && <h2>Loading...</h2>
        }
        <ul>
            {
                data?.innerData?.map((el)=>(
                    <li key={el._id}>{el.name} - <b>{el.username}</b> <button disabled={deleteLoading} onClick={()=>handleDeleteUser(el._id)}>delete</button></li>
                ))
            }
        </ul>
    </div>
  )
}

export default ManageAdmins
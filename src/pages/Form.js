
import {React,useState} from 'react'
import FormInput from '../components/FormInput.js'
import NewUser from '../components/NewUser.js';
import Users from '../components/Users.js';

export default function Form() {

  const [names,setName] = useState([{name: "Abu"}])

  function addUsers(user){
    // e.preventDefault()
    setName([...names, user])
  }

  console.log(names);

  return (
    <>
    <FormInput person={addUsers} />
   <Users userDetails={names}/>
    </>
   
  )
}

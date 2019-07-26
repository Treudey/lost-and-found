import React, {useState,useContext,useEffect} from 'react'
import ProfileContext from '../../context/profile/profileContext'
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import Alerts from '../layout/Alerts';



const ProfileForm = props => {
    const profileContext = useContext(ProfileContext);
    const {current,clearCurrent,updateProfile} = profileContext

    const authContext = useContext(AuthContext);
    const {  error, clearErrors, isAuthenticated } = authContext;

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;


    useEffect(()=>{
        if(current!==null){
            setUser(current)
        }else{
            setUser(
                {
                    name:'',
                    email:'',
                }
            )
        }
        if (error === 'User already exists') {
        setAlert(error, 'danger');
        clearErrors();
        }
        // eslint-disable-next-line
    },[error, isAuthenticated,profileContext,current]) //[]: only want it to change when profilecontext and current change

    const [user,setUser]=useState({
        name:'',
        email:'',
    });

    const {name,email} = user;

    const onChange = e => setUser({...user, [e.target.name]:e.target.value})
    const onSubmit = e =>{
        e.preventDefault();
        updateProfile(user)
        clearCurrent()
    }

    return (
        <form onSubmit={onSubmit}>
           
            <h2>Change your Account Info here</h2>
            <Alerts />
            <input 
                type="text"
                placeholder='name'
                name='name'
                value={name}
                onChange={onChange} >
            </input>
            <input 
                type="text"
                placeholder='Email'
                name='email'
                value={email}
                onChange={onChange} >
            </input>
            <div>
                <input
                    type='submit'
                    value='Update User Info'
                    className='btn btn-primary'
                />
                {current && 
                <input
                    type='submit'
                    value='Clear'
                    className='btn btn-primary'
                    onClick={()=>clearCurrent()}
                />
            }
            </div>
        </form>
    )
}

export default ProfileForm

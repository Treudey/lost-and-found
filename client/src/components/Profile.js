// import React, { Component } from "react";
// import jwt_decode from 'jwt-decode'

// class Profile extends Component{
//     constructor(){
//         super()
//         this.state={
//             username:'',
//             email:''
//         }
//     }

//     componentDidMount(){
//         const token = localStorage.usertoken
//         const decoded = jwt_decode(token)
//         this.setState({
//             username:decoded.username,
//             email:decoded.email,
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <table>
//                     <tbody>
//                         <tr>
//                             <td>Username:</td>
//                             <td>{this.state.username}</td>
//                         </tr>
//                         <tr>
//                             <td>Email:</td>
//                             <td>{this.state.email}</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }

// export default Profile

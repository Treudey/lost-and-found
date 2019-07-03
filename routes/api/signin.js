// const User = require('../../models/User');
// const UserSession =require('../../models/UserSession');

// module.exports=(app)=>{

// /**Signup**/
// app.post('/SignUp',(err,res,next)=>{
//     const { body } = req;
//     const {
//         username,
//         password
//     }=body;

//     let {email}=body;

//     if(!username){
//         return res.send({
//             success:false,
//             message:"Please input a username"
//         })
//     }

//     if(!email){
//         return res.send({
//             success:false,
//             message:"Please input a username"
//         })
//     }

//     if(!password){
//         return res.send({
//             success:false,
//             message:"Please input a username"
//         })
//     }

//     email = email.toLowerCase();

// })

// User.find({
//     email:email
// },(err,previousUsers)=>{
//     if(err){
//         return res.send({
//             success:false,
//             message:"Somethings wrong (email)"
//         })
//     }else if(previousUsers.length>0){
//         return res.send({
//             success:false,
//             message:"Email already exists"
//         })        
//     }

//     const newUser = new User();
    
//     newUser.username = username;
//     newUser.email = email;
//     newUser.password = newUser.generateHash(password);
//     newUser.save((err,user)=>{
//         if(err){
//             return res.send({
//                 success:false,
//                 message:"Somethings wrong (email)"
//             })    
//         }
//         return res.send({
//             success:true,
//             message:"Signed up successfully"
//         })
//     });
// })

// app.post('/Login',(err,res,next)=>{
//     const { body } = req;
//     const {
//         username,
//         password
//     }=body;
//     let {email}=body;

//     if(!email){
//         return res.send({
//             success:false,
//             message:"Please input a username"
//         })
//     }

//     if(!password){
//         return res.send({
//             success:false,
//             message:"Please input a username"
//         })
//     }

//     email = email.toLowerCase();

//     User.find({
//         email:email
//     },(err,users)=>{
//         if(err){
//             return res.send({
//                 success:false,
//                 message:"Server error"
//             })
//         }

//         if(user.length != 1){
//             return res.send({
//                 success:false,
//                 message:"Invalid user"
//             })
//         }

//         const user =user[0];

//         if(!user.validPassword(password)){
//             return res.send({
//                 success:false,
//                 message:"Wrong password"
//             })
//         }

//         //create user session

//         const userSession = new UserSession();

//         userSession.userId = user._id;
//         userSession.save((err,doc)=>{
//             if(err){
//                 return res.send({
//                     success:false,
//                     message:"Server error"
//                 })
//             }

//             return res.send({
//                 success:true,
//                 message:"Signed in",
//                 token:doc._id

//             })

//         })

//     })

// })


// app.get('/verify',(req,res,next)=>{
//     const {query}=req;
//     const {token}=query;

//     UserSession.find({
//         _id:token,
//         isDeleted:false
//     },(err,sessions)=>{
//         if(err){
//             return res.send({
//                 success:false,
//                 message:"Server error"
//             })
//         }

//         if(sessions.length!=1){
//             return res.send({
//                 success:false,
//                 message:"Invalid"
//             }) 
//         } else{
//             return res.send({
//                 success:true,
//                 message:"correct password"
//             })
//         }

//     })

// })

// app.get('/logout',(req,res,next)=>{
//     const {query}=req;
//     const {token}=query;

//     UserSession.findOneAndUpdate({
//         _id:token,
//         isDeleted:false
//     },{
//         $set:{isDeleted:true}},null,
//     (err,sessions)=>{
//         if(err){
//             return res.send({
//                 success:false,
//                 message:"Server error"
//             })
//         }

//        return res.send({
//                 success:true,
//                 message:"correct password"
//             })
//     })
// })

// }
// // Import react:
import { useEffect, useRef, useState, useContext } from "react";

// // Import data from files:
import { baseUrl } from "../../core";
// import "./Home.css";

// // Import Libraries:
import axios from "axios";

// import { Navigate, useNavigate } from "react-router-dom";
// import { GoFileMedia } from "react-icons/go";
// import { BsCalendarEvent } from "react-icons/bs";
// import { PiArticle } from "react-icons/pi";
// import { AiOutlineLike } from "react-icons/ai";
// import { BiCommentDetail } from "react-icons/bi";
// import { PiShareFat } from "react-icons/pi";
// import swal from "sweetalert2";
// import moment from "moment";

// export default function Home({ profileImg, userName }) {

//   const navigate = useNavigate();

//   const postTextInputRef = useRef(null);
//   const postFileInputRef = useRef(null);
//   const searchInputRef = useRef(null);

//   const [isLoading, setIsLoading] = useState(false);
//   const [alert, setAlert] = useState(null);
//   const [editAlert, setEditAlert] = useState(null);
//   const [allPosts, setAllPosts] = useState([]);
//   const [toggleRefresh, setToggleRefresh] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");

//   useEffect(() => {
//     getAllPost();
//     setTimeout(() => {
//       setAlert("");
//     }, 2000);
//     // return ()=>{
//     //     // cleanup function
//     // }
//   }, [toggleRefresh, alert]);

//   //Functions:
//   // GET: all post users
//   const getAllPost = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(`${baseUrl}/api/v1/feed`, {
//         withCredentials: true,
//       });
//       // console.log(response?.data);

//       setIsLoading(false);
//       setAllPosts([...response.data]);
//     } catch (error) {
//       // handle error
//       console.log(error.data);
//       setIsLoading(false);
//     }
//   };

//   // Sweet Alert function:
//   const publishPost = () => {
//     swal.fire("Success!", "Your Post have been Publish Thank you!", "success");
//   };

//   // POST: create user new post
//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       setIsLoading(true);

//       let formData = new FormData();

//       formData.append("text", postTextInputRef.current.value);
//       formData.append("image", postFileInputRef.current.files[0]);

//       const response = await axios.post(
//         `${baseUrl}/api/v1/post`,
//         formData,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' }
//         })

//       setIsLoading(false);
//       // console.log(response?.data);
//       setAlert(response.data.message);
//       setToggleRefresh(!toggleRefresh);
//       setSelectedImage("");
//       publishPost();
//       e.target.reset();
//     } catch (error) {
//       // handle error
//       console.log(error?.data);
//       setIsLoading(false);
//     }
//   };

//   // DELETE: user delete with userId
//   const deletePostHandler = async (_id) => {
//     try {
//       setIsLoading(true);

//       const response = await axios.delete(`${baseUrl}/api/v1/post/${_id}`, {
//         // title: postTitleInputRef.current.value,
//         text: postTextInputRef.current.value,
//       });

//       setIsLoading(false);
//       // console.log(response?.data);
//       setAlert(response.data.message);
//       setToggleRefresh(!toggleRefresh);
//     } catch (error) {
//       // handle error
//       console.log(error?.data);
//       setIsLoading(false);
//     }
//   };

//   // PUT: edit user with userId
//   const editSaveSubmitHandler = async (e) => {
//     e.preventDefault();
//     const _id = e.target.elements[0].value;
//     const text = e.target.elements[1].value;
//     // const title = e.target.elements[1].value;

//     try {
//       setIsLoading(true);

//       const response = await axios.put(`${baseUrl}/api/v1/post/${_id}`, {
//         // title: title,
//         text: text,
//       });

//       setIsLoading(false);
//       // console.log(response?.data);
//       setAlert(response?.data?.message);
//       setToggleRefresh(!toggleRefresh);
//     } catch (error) {
//       // handle error
//       console.log(error?.data);
//       setIsLoading(false);
//     }
//   };

//   //   One Click Two function call
//   const deleteMainFunction = (_id) => {
//     deletePost(_id);
//   };

//   // Sweet Alert Function:
//   const deletePost = (_id) => {
//     swal.fire({
//       title: "Enter Password",
//       input: "password",
//       inputAttributes: {
//         autocapitalize: "off",
//       },
//       showCancelButton: true,
//       cancelButtonColor: "#3a3659",
//       confirmButtonText: "Delete",
//       confirmButtonColor: "#3a3659",
//       showLoaderOnConfirm: true,
//       preConfirm: (password) => {
//         if (password === "1122") {
//           deletePostHandler(_id);
//           swal.fire({
//             icon: "success",
//             title: "Post Deleted",
//             showConfirmButton: true,
//           });
//         } else {
//           return swal.fire({
//             icon: "error",
//             title: "Invalid Password",
//             text: "Please enter correct password",
//             showConfirmButton: true,
//           });
//         }
//       },
//     });
//   };

//   const UpdateAlert = () => {
//     swal.fire("Success!", "Your Post have been Updated Thank you!", "success");
//   };

//   const cancelPost = (post) => {
//     // console.log("check cancel post");
//     swal
//       .fire({
//         icon: "warning",
//         title: "Warning...",
//         text: "Are You Sure!",
//       })
//       .then((result) => {
//         if (result.isConfirmed) {
//           post.isEdit = false;
//           setAllPosts([...allPosts]);
//           swal.fire("success!", "Your file has been saved.", "success");
//         }
//       });
//   };

//   // POST: user like a post with userId
//   const doLikeHandler = async (_id) => {
//     try {
//       setIsLoading(true);
//       const response = await axios.post(`${baseUrl}/api/v1/post/${_id}/dolike`);

//       setIsLoading(false);
//       // console.log(response?.data);
//       setAlert(response.data.message);
//       // setToggleRefresh(!toggleRefresh);
//     } catch (error) {
//       // handle error
//       console.log(error?.data);
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="home-page">

//       <div className="main">
//         <form id="formReset" onSubmit={submitHandler} className="form-card">
//           <div className="post-create">
//             <div className="post-header">
//               <img src={profileImg} style={{objectFit:"contain"}} width={70} height={70} alt="my-image" />
//               <div>
//                 <div className="post-name">{userName}</div>
//                 <div className="post-date">
//                   {moment().format('D MMM YYYY, h:mm:ss a')}
//                 </div>
//               </div>
//             </div>
//             <textarea
//               id="postTextInput"
//               type="text"
//               minLength={2}
//               maxLength={999}
//               ref={postTextInputRef}
//               className="post-area"
//               placeholder="What's on your mind?"
//               // required
//             ></textarea>
//             <br />
//             <input hidden ref={postFileInputRef} id="postFileInput" className="take-img" type="file" name="postFileInput"
//                 accept="image/*" onChange={(e) => {
//                   const base64Url = URL.createObjectURL(e.target.files[0]);
//                   setSelectedImage(base64Url)
//                 }} />
//             <br />
//             <div>
//               {selectedImage &&
//               <img className="post-profile-img"
//               height={200} src={selectedImage} alt="seleted-image" /> }
//             </div>
//             <div className="post-footer">
//               <label htmlFor="postFileInput" className="btn">
//                 <GoFileMedia style={{ color: "blue", marginRight: "5px" }} />
//                 Media
//               </label>
//               <div className="btn">
//                 <BsCalendarEvent
//                   style={{ color: "orange", marginRight: "5px" }}
//                 />
//                 Event
//               </div>
//               <div className="btn">
//                 <PiArticle style={{ color: "red", marginRight: "5px" }} />
//                 Write
//               </div>
//             </div>
//             <div className="post-btn-main">
//               <button className="btn btn-primary post-btn" type="submit">
//                 Publist Post
//               </button>
//             </div>
//             <span>
//               {alert && alert}
//               {isLoading && "Loading...."}
//             </span>
//           </div>
//         </form>
//       </div>

//       <div className="all-post">
//         {allPosts.map((post, index) => (
//           <div className="post" key={post._id}>
//             {post.isEdit ? (
//               <form onSubmit={editSaveSubmitHandler} className="edit-form-card">
//                 <div className="edit-card">
//                   <div className="edit-post">Edit post</div>
//                   <input value={post._id} type="text" disabled hidden />
//                   <br />
//                   <div className="edit-input">
//                     <input
//                       defaultValue={post.text}
//                       type="text"
//                       className="postEditText"
//                     />
//                     <br />
//                   </div>
//                   <div className="edit-button">
//                     <button
//                       type="submit"
//                       onClick={UpdateAlert}
//                       className="btn btn-outline-light update-btn"
//                     >
//                       Update
//                     </button>
//                     <button
//                       type="button"
//                       className="btn btn-outline-light cancel-btn"
//                       onClick={() => {
//                         cancelPost(post);
//                       }}
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             ) : (
//               // edit post form
//               <div className="form-card">
//                 <div className="post-main">
//                   <div className="post-header">
//                     <img
//                       src={profileImg}
//                       width={65}
//                       height={65}
//                       alt="my-image"
//                     />

//                     <div>
//                       <div className="post-name">
//                         {post.authorObject.firstName}{" "}
//                         {post.authorObject.lastName}
//                       </div>
//                       {/* <div className="date">{post.authorObject.firstName} {post.authorObject.lastName} - {post.authorObject.email}</div> */}
//                       <div className="allpost-date">{moment(post.createdOn).fromNow()}</div>
//                     </div>
//                   </div>

//                   <div className="post-data">
//                     <div className="all-post">{post.text}</div>
//                   </div>

//                   <div>
//                     { post.img &&
//                     <img className="set-profile-img"
//                     width={300} src={post.img} alt="post image" /> }
//                   </div>

//                   <br />
//                   <hr />

//                   <div className="allpost-footer">
//                     <div className="allpost-btn">
//                       <button
//                         style={{ border: "none" }}
//                         onClick={(e) => {
//                           doLikeHandler(post._id);
//                         }}
//                       >
//                         <AiOutlineLike
//                           style={{ color: "#495057", marginRight: "5px" }}
//                         />
//                         Like ({post?.likes?.length})
//                       </button>
//                     </div>

//                     <div className="allpost-btn">
//                       <BiCommentDetail
//                         style={{ color: "#495057", marginRight: "5px" }}
//                       />
//                       Comment
//                     </div>
//                     <div className="allpost-btn">
//                       <PiShareFat
//                         style={{ color: "#495057", marginRight: "5px" }}
//                       />
//                       Share
//                     </div>
//                   </div>
//                   <br />
//                   <div className="buttons">
//                     <button
//                       class="btn btn-outline-light editBtn"
//                       onClick={(e) => {
//                         allPosts[index].isEdit = true;
//                         setAllPosts([...allPosts]);
//                       }}
//                     >
//                       Edit
//                     </button>

//                     <button
//                       class="btn btn-outline-light deleteBtn"
//                       onClick={(e) => {
//                         deleteMainFunction(post._id);
//                       }}
//                     >
//                       Delete
//                     </button>

//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // const response = await axios.post(`${baseUrl}/api/v1/post`, {
// //   // title: postTitleInputRef.current.value,
// //   text: postTextInputRef.current.value,
// // });

// // formData.append("title", postTitleInputRef.current.value);


import { GlobalContext } from "../../context/Context";
import { FaGraduationCap, FaRegCircleUser } from "react-icons/fa6";
import { CgClipboard } from "react-icons/cg";
import { CiCirclePlus,CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import newImage from "./../../assets/Nature.jpg";
import newProfile from "./../../assets/profile2.jpg";

import "./Home.css";

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaCamera } from "react-icons/fa";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
};

export default function Home() {
  const { state, dispatch } = useContext(GlobalContext);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const logoutHandler = async () => {
    try {
      await axios.post(
        `${baseUrl}/api/v1/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch({
        type: "USER_LOGOUT",
      });
    } catch (err) {
      console.log(err);
    }
  };

  // const addStudentHandler = () => {
  //   console.log("hello");
  // }

  return (
    <div>
      <div className="left-side">
        <div className="sidebar">
        <div className="sidebar-brand">
          <h2><span><FaGraduationCap /></span>Admin</h2>
        </div>
        </div>

        <div className="sidebar-menu">
        <ul>
          <li>
            <Link to={"/"}><span><FaRegCircleUser /></span><span>Students</span></Link>
          </li>
          <li>
            <Link to={"/attendence"}><span><CgClipboard /></span><span>Attendence</span></Link>
          </li>
        </ul>
        </div>

        <div className="sidebar">
          <div className="sidebar-brand abc">
            <button className="logoutBtn" onClick={logoutHandler}>Logout</button>
          </div>
        </div>

      </div>

      <div className="right-side">
        <div className="main-content">
          <header>
            <h2>
              <span className="profile"><FaRegCircleUser/></span>
              <span>Students</span>
            </h2>

            <div>
              <button className="add-btn" onClick={handleOpen}>
                <span><CiCirclePlus/></span>
                AddStudent
              </button>
            </div>
          </header>

          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
              <form action="">
                <div className="dd">
                  <img className="new" src={newProfile} alt="new-img" />
                  <span className="camera-man"><FaCamera/></span>
                </div>
                <div className="yoyo"> 
                  <div className="std-form">
                    <label>First Name</label>
                    <br />
                    <input type="text" required/>
                  </div>
                  <div className="std-form">
                    <label>Last Name</label>
                    <br />
                    <input type="text" required/>
                  </div>
                  <div className="std-form" style={{marginTop: "20px"}}>
                    <label>Email</label>
                    <br />
                    <input type="email" required/>
                  </div>
                  <div className="std-form" style={{marginTop: "20px"}}>
                    <label>Password</label>
                    <br />
                    <input type="password" required/>
                  </div>
                  <div className="std-form" style={{marginTop: "20px"}}>
                    <label>Course Name</label>
                    <br />
                    <input type="text" required/>
                  </div>
                  <div className="std-form" style={{marginTop: "20px"}}>
                    <label>Phone Number</label>
                    <br />
                    <input type="number" required/>
                  </div>
                  <div className="add-user-btn">
                    <Button >Add User</Button>
                  </div>
                </div>
              </form>  
            </Box>
            </Modal>    
          </div>

          <main>
            <div className="first-navBar">
              <div className="box">Id</div>
              <div className="box">Profile Image</div>
              <div className="box">Name</div>
              <div className="box">Course Name</div>
              <div className="box">Password</div>
              <div className="box1"></div>
              {/* <div className="box"></div> */}
            </div>

            <div className="second-navBar">
              <div className="box">11</div>
              <div className="box">
                <img className="std-img" src={newImage} alt="new-image" />
              </div>
              <div className="box">asif</div>
              <div className="box">web and app</div>
              <div className="box">123456</div>
              <div className="edit-del">
                <div className="edit-icon"><CiEdit/></div>
                <div className="del-icon"><MdOutlineDelete/></div>
              </div>
            </div>

            <div className="second-navBar">
              <div className="box">12</div>
              <div className="box">
                <img className="std-img" src={newImage} alt="new-image" />
              </div>
              <div className="box">asim</div>
              <div className="box">techno kids</div>
              <div className="box">118888</div>
              <div className="edit-del">
              <div className="edit-icon"><CiEdit/></div>
                <div className="del-icon"><MdOutlineDelete/></div>
              </div>
            </div>

            <div className="second-navBar">
              <div className="box">13</div>
              <div className="box">
                <img className="std-img" src={newImage} alt="new-image" />
              </div>
              <div className="box">ahmed</div>
              <div className="box">graphics</div>
              <div className="box">112233</div>
              <div className="edit-del">
              <div className="edit-icon"><CiEdit/></div>
                <div className="del-icon"><MdOutlineDelete/></div>
              </div>
            </div>

          </main>
        </div>
      </div>
    
    </div>
  );
}

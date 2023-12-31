import { FaGraduationCap, FaRegCircleUser } from "react-icons/fa6";
import { CgClipboard } from "react-icons/cg";
import { Link } from "react-router-dom";
import newImage from "./../../assets/Nature.jpg";
import { GlobalContext } from "../../context/Context";
import { useContext } from "react";
import { baseUrl } from "../../core";
import axios from "axios";
export default function Attendence() {
  const { state, dispatch } = useContext(GlobalContext);

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
              <span>Attendence</span>
            </h2>

            {/* <div>
              <button className="add-btn">
                <span><CiCirclePlus/></span>
                AddStudent
              </button>
            </div> */}
          </header>

          <main>
            <div className="first-navBar">
              <div className="box">Id</div>
              <div className="box">Profile Image</div>
              <div className="box">Name</div>
              <div className="box">Course Name</div>
              <div className="box">Password</div>
              <div className="box1"></div>
            </div>

            <div className="second-navBar">
              <div className="box">11</div>
              <div className="box">
                <img className="std-img" src={newImage} alt="new-image" />
              </div>
              <div className="box">asif</div>
              <div className="box">web and app</div>
              <div className="box">123456</div>
              <div className="box1"></div>
            </div>

            <div className="second-navBar">
              <div className="box">12</div>
              <div className="box">
                <img className="std-img" src={newImage} alt="new-image" />
              </div>
              <div className="box">asim</div>
              <div className="box">techno kids</div>
              <div className="box">118888</div>
              <div className="box1"></div>
            </div>

            <div className="second-navBar">
              <div className="box">13</div>
              <div className="box">
                <img className="std-img" src={newImage} alt="new-image" />
              </div>
              <div className="box">ahmed</div>
              <div className="box">graphics</div>
              <div className="box">112233</div>
              <div className="box1"></div>
            </div>

          </main>
        </div>
      </div>
    
    </div>
  );
}




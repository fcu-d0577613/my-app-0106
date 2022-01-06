import React,{ useState, useEffect} from "react";
import { useNavigate } from "react-router";
import CourseService from "../../services/course.service";

const CourseComponent = (props) => {
  let {currentUser, setCurrentUser} = props;
  let [courseData, setCourseData] = useState(null);

  const navigate = useNavigate();
  const handleTakeToLogin = () => {
    navigate("/login");
  }

  useEffect(()=>{
    console.log("Using effect ");
    let _id;
    if(currentUser){
      _id = currentUser.user._id;
    } else {
      _id = "";
    }
    
    CourseService.getAllCourse()
    .then((course) => {
      setCourseData(course.data);
      // console.log(course.data);
    })
    .catch((err)=>{
      console.log(err);
    })


    //  if(currentUser.user.username == "shawn123"){
    //    CourseService.get(_id)
    //    .then((data) => {
    //      setCourseData(data.data);
    //      console.log(data.data);
    //    })
    //    .catch((err) => {
    //      console.log(err);
    //    })}


    // }else if(currentUser.user.role == "Student"){
    //   CourseService.getEnrolledCourse(_id)
    //   .then((data) => {
    //     console.log(data);
    //     setCourseData(data.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    // }

  },[])

  console.log(currentUser);
  console.log(courseData);
  console.log(courseData.length);
  return(
    <div style={{ padding: "3rme" }}>
      <h1>HI</h1>
      <div>
      
      </div>
      
      {currentUser && courseData && courseData.length!= 0 && (
        
        <div>
         
          {courseData.map(course => (
            <div className="card" style={{  width: "18rem" }}>
              <div className="=card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <botton className="btn btn-primary">{course.price}</botton>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>


  );

};

export default CourseComponent;
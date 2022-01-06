import React,{ useState, useEffect} from "react";
import { useNavigate } from "react-router";
import CourseService from "../../services/course.service";
import '../style/abericTable.css';
import '../../App.css';

 function AbericTable(props) {
  let {currentUser, setCurrentUser} = props;
  let [courseData, setCourseData] = useState(null);
  const navigate = useNavigate();


  useEffect(()=>{  
    CourseService.getAllCourse()
    .then((course) => {
      setCourseData(course.data);
      console.log(course.data);
    })
    .catch((err)=>{
      console.log(err);
    })

  },[])

  const handleEnroll = (e) =>{
    console.log(e.target.id);
    let check = window.confirm("確定要預約嗎");
    if(check){
        CourseService.enroll(e.target.id, currentUser.user._id)
      .then(() => {
        window.alert("Done Enrollment1");
        navigate("/myTicket");
      })
      .catch((err) => {
        
        console.log(err);
      })
    }
  
  }


  return (
    <div className='abericTable-container'>
      <div className='abericTable-wrapper'>
        
        <div className='pic'>
          <img className='abericTable-pic' 
          src={"images/1月有氧課表.png"}  />
        </div>   
          
            {currentUser && courseData && courseData.length!= 0 && (
              <div className='abericTable-booking'>
                <h1 className="booking-title">預約課程</h1>
                
                {courseData.map(course => (
                  <div onClick={handleEnroll} className='booking-ticket' id={course._id}>
                        <h2 >{course.title}</h2>
                        <h5 >{course.description}</h5>
                        
                        <botton >{course.price}</botton>
                  </div>
                ))}
              </div>
            )}

      </div>
    </div>
  )
}

export default AbericTable
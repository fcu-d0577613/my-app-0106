import React,{ useState, useEffect} from "react";
import { useNavigate } from "react-router";
import CourseService from '../../services/course.service';
import '../style/MyTicket.css'

export default function MyTicket  (props)  {
  let {currentUser, setCurrentUser} = props;
  let [courseData, setCourseData] = useState(null);
  let Today=new Date();


  useEffect(() => {
    console.log("myticket on effect");
    let _id;
    if(currentUser){
      _id = currentUser.user._id;
    }else{
      _id = "";
    }
    console.log(_id);
    if(currentUser){
      CourseService.getEnrolledCourse(_id)
      .then((course)=>{
        // console.log(course.data);
        setCourseData(course.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }  
  }, [])


  return (
    <div className='MyTicket-container'>
      <div className='MyTicket-wrapper'>

        <div className='MyTicket-nitice'>
          <div className='notice-box'>
            <h1>注意事項</h1>
            <ul className="notice-item">
              <li>為確保上課品質，進入教室請將手機靜音，本館禁止飲食，感謝您的支持與配合。</li>
              <li>本館保留變更師資與課程內容的權利，請隨時注意課程變動的最新消息。</li>
              <li>為確保每位學員的權益，請勿隨意移動或是佔用周遭無人使用的席位，造成您的不便敬請見諒。</li>
              <li>逢甲大學體育館 | 台中市西屯區文華路100號體育館1F服務櫃台 04-24517250 分機 5985。</li>
              
            </ul>
          </div>
        </div>

            {currentUser && courseData && courseData.length!= 0 && (
              <div className='MyTicket-item' >
                {courseData.map(course => (
                    <div className='MyTicket-ticket'>
                          <div className='ticetClassName'>
                              <h5 className='t-head'>FCU SPORTS CENTER</h5>
                              <div className='t-boby'>
                                <h1 >有氧體驗票券</h1>
                                <h2 >{course.title}</h2>
                              </div>
                              <div className='t-fitter'>
                                <p >- {course.description}-</p>
                              </div>
                          </div>
                          <div className='ticketYMD'>
                            <img className="lilLOGO" src="./images/lilLOGO.png" alt="" />
                            <h3 className='t-fitter'>{Today.getFullYear()} /{(Today.getMonth()+1)}/{Today.getDate()}</h3>
                          </div> 

                    </div>
                  ))} 
              </div>    
            )} 
      </div>
      
    </div>
  )
}



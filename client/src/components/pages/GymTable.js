import React from 'react'
import '../../App.css';
import '../style/gymTable.css';

function GymTable () {
  return (
    <div className='GymTable-container'>
      <div className='GymTable-wrapper'>
        <div className='Gymtext'>
          <div className='item'>
            <h3>單次收費</h3>
            <p>單次入場收費為$100，免綁約，
限當天使用不限時數，輕鬆無負擔。</p>
          </div>
          <div className='item'>
            <h3>​月費制</h3>
            <p>為不同身分別的客戶客製精選月費方案，
親民的價格享受高規格的運動環境。</p>
          </div>
          <div className='item'>
            <h3>專案優惠</h3>
            <p>為學生身分別以外的客戶，
客製精選半年期優惠專案。</p>
          </div>
        </div>

        <div className='GymPic'>
            <div className='GymPic-title'>
              <p>最新活動</p>
            </div>
          
          <div className='Pic'>
            <div className='pic-box'>
              <img className='pic-item' src="/images/F.png" alt="" />
            </div>
            <div className='pic-box'>
              <img className='pic-item' src="/images/1006.png" alt="" />
            </div>
            <div className='pic-box'>
              <img className='pic-item' src="/images/健身方案.png" alt="" />
            </div>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default GymTable

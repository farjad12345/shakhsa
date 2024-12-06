import React from 'react'
import logo from "../../assets/logo.png";
import timer from "../../assets/timer.png";
import helpSquare from "../../assets/helpSquare.png";
import infoCircle from "../../assets/infoCircle.png";
import "./Home.css"
function Home() {
  return (
    <div className="main">
    <div className="main-right">
      <div className="main-right-parent-top">
        <div className="parent-first">
          <div className="parent-first-right">
            <img src={logo} className="main-right-logo" />
            <p className="logo-text">جهش آکادمی</p>
          </div>
          <div className="parent-first-left">
            <a href="#" className="parent-first-left-text">
              بازگشت به سایت مرجع
            </a>
          </div>
        </div>
        <div className="parent-second">
          <p className="secound-text">
            دوره جامع ایمیل مارکتینگ دوره جامع ایمیل مارکتینگ
          </p>
        </div>
        <div className="parent-third">
          <p className="parent-third-text">گندالف خاکستری</p>
        </div>
      </div>
      <div className="main-right-parent-center">
        <div className="main-right-parent-center-right">
          <div className="main-right-parent-center-right-top">
            <img
              src={timer}
              className="main-right-parent-center-right-top-logo"
            />
            <p className="logo-text">زمان آزمون</p>
          </div>
          <div className="main-right-parent-center-right-bottom">
            <p className="main-right-parent-center-right-bottom-time">
              ۱۵:۰۰
            </p>
            <p className="main-right-parent-center-right-bottom-text">
              دقیقه
            </p>
          </div>
        </div>
        <div className="main-right-parent-center-left">
        
            <div className="main-right-parent-center-left-top">
              <img
                src={helpSquare}
                className="main-right-parent-center-left-top-logo"
              />
              <p className="logo-text-2">حداکثر سؤال</p>
            </div>
            <div className="main-right-parent-center-left-bottom">
              <p className="main-right-parent-center-left-bottom-time">
۲۵                  </p>
              <p className="main-right-parent-center-left-bottom-text">
              سؤال
              </p>
          </div>
        </div>
        </div>
        <div className="main-right-section-third">
          <div className="main-right-third-section-text-icon-wrapper">
            <img src={infoCircle} className="main-right-third-section-icon"/>
            <p className="main-right-third-section-text">برای گرفتن مدرک لازم است در  آزمون شرکت کنید. </p>
          </div>
          <a href="#" className="StartBtn">شروع ازمون</a>
      </div>
    </div>
    <div className="main-left">
      <h1>سرفصل ها</h1>
      <div className="boxes">
        <p className=" box-subjcet">درس اول</p>
        <p className=" box-text">
          چگونه SEO یک سایت را در رتبه جهانی بهبود بدهیم؟
        </p>
      </div>
      <div className="boxes">
        <p className=" box-subjcet">درس دوم</p>
        <p className=" box-text"> راه‌های بهبود SEO برای رتبه جهانی</p>
      </div>
    </div>
  </div>
  )
}

export default Home
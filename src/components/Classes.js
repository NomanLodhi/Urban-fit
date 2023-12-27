import React from 'react'

export default function Classes(props) {
  return (
    <div>
      <div className="container-fluid container-xxl bg-black-custom">
<h1 className="display-3 text-green fw-bold py-3">Classes</h1>
<div className="d-flex flex-wrap align-item-center justify-content-center">
    <div className="rounded-pill mx-3 bg-light px-3 my-2" style={{height:25}} >
<p className='fw-bold '>All Classes <span className='rounded-circle bg-green text-dark fs-sm'>32</span></p>
    </div>
    <div className="rounded-pill mx-3 bg-green px-3 my-2" style={{height:25}} >
<p className='fw-bold '>Cardio <span className='rounded-circle bg-black-custom text-dark fs-sm text-green'>12</span></p>
    </div>
    <div className="rounded-pill mx-3 bg-green px-3 my-2" style={{height:25}} >
<p className='fw-bold '>Fat Burn <span className='rounded-circle bg-black-custom text-dark fs-sm text-green'>05</span></p>
    </div>
    <div className="rounded-pill mx-3 bg-green px-3 my-2" style={{height:25}} >
<p className='fw-bold '>Kegel <span className='rounded-circle bg-black-custom text-dark fs-sm text-green'>07</span></p>
    </div>
    <div className="rounded-pill mx-3 bg-green px-3 my-2" style={{height:25}} >
<p className='fw-bold '>Strength <span className='rounded-circle bg-black-custom text-dark fs-sm text-green'>03</span></p>
    </div>
    <div className="rounded-pill mx-3 bg-green px-3 my-2" style={{height:25}} >
<p className='fw-bold '>Strength <span className='rounded-circle bg-black-custom text-dark fs-sm text-green'>03</span></p>
    </div>
    <div className="rounded-pill mx-3 bg-green px-3 my-2" style={{height:25}} >
<p className='fw-bold '>Muscle Up <span className='rounded-circle bg-black-custom text-dark fs-sm text-green'>05</span></p>
    </div>
    <div className="rounded-pill mx-3 bg-green px-3 my-2" style={{height:25}} >
<p className='fw-bold '>Golden Physique <span className='rounded-circle bg-black-custom text-dark fs-sm text-green'>03</span></p>
    </div>
</div>
    <div className="row py-3">
        <div className="col-lg-6 my-2">
            <img src={props.img1} alt="" className='w-100 rounded-3' />
            <p className="text-green fs-1 fw-bold py-1 position-relative">
            Quick exercise for Fat Burn
            <span class=" fs-5  position-absolute text-center end-0 my-3 fw-bold bg-green text-dark rounded-circle  fw-bold" style={{width:35, height:35}}>
            <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3292 3.42317H0.585938C0.262354 3.42317 0 3.68552 0 4.0091V6.74348C0 7.06706 0.262354 7.32942 0.585938 7.32942H15.3292V9.57839C15.3292 10.6224 16.5914 11.1453 17.3297 10.4071L21.5318 6.20495C21.9895 5.74729 21.9895 5.00529 21.5318 4.54768L17.3297 0.345578C16.5915 -0.392655 15.3292 0.130197 15.3292 1.17424V3.42317Z" fill="#191919"/>
</svg>
            </span>
            </p>
            <p className="text-green fs-5"> 05 Exercise - 03 Sets - 20 Minutes</p>
        </div>
        
        <div className="col-lg-6 my-2">
        <img src={props.img2} alt=""  className='w-100 rounded-3'/>
        <p className="text-green fs-1 fw-bold py-1 position-relative">
        A guide of Kegel Mastery
            <span class=" fs-5  position-absolute text-center end-0 my-3 fw-bold bg-green text-dark rounded-circle  fw-bold" style={{width:35, height:35}}>
            <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3292 3.42317H0.585938C0.262354 3.42317 0 3.68552 0 4.0091V6.74348C0 7.06706 0.262354 7.32942 0.585938 7.32942H15.3292V9.57839C15.3292 10.6224 16.5914 11.1453 17.3297 10.4071L21.5318 6.20495C21.9895 5.74729 21.9895 5.00529 21.5318 4.54768L17.3297 0.345578C16.5915 -0.392655 15.3292 0.130197 15.3292 1.17424V3.42317Z" fill="#191919"/>
</svg>
            </span>
            </p>
            <p className="text-green fs-5"> 07 Exercise - 05 Sets - 30 Minutes</p>
        </div>
        <div className="col-lg-6 my-2">
        <img src={props.img3} alt=""  className='w-100 rounded-3'/>
        <p className="text-green fs-1 fw-bold py-1 position-relative">
        Quick Strength Building Exercise
            <span class=" fs-5  position-absolute text-center end-0 my-3 fw-bold bg-green text-dark rounded-circle  fw-bold" style={{width:35, height:35}}>
            <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3292 3.42317H0.585938C0.262354 3.42317 0 3.68552 0 4.0091V6.74348C0 7.06706 0.262354 7.32942 0.585938 7.32942H15.3292V9.57839C15.3292 10.6224 16.5914 11.1453 17.3297 10.4071L21.5318 6.20495C21.9895 5.74729 21.9895 5.00529 21.5318 4.54768L17.3297 0.345578C16.5915 -0.392655 15.3292 0.130197 15.3292 1.17424V3.42317Z" fill="#191919"/>
</svg>
            </span>
            </p>
            <p className="text-green fs-5"> 03 Exercise - 03 Sets - 20 Minutes</p>
        </div>
        <div className="col-lg-6 my-2">
        <img src={props.img4} alt=""  className='w-100 rounded-3'/>
        <p className="text-green fs-1 fw-bold py-1 position-relative">
        10 Minutes Cardio Workout
            <span class=" fs-5  position-absolute text-center end-0 my-3 fw-bold bg-green text-dark rounded-circle  fw-bold" style={{width:35, height:35}}>
            <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3292 3.42317H0.585938C0.262354 3.42317 0 3.68552 0 4.0091V6.74348C0 7.06706 0.262354 7.32942 0.585938 7.32942H15.3292V9.57839C15.3292 10.6224 16.5914 11.1453 17.3297 10.4071L21.5318 6.20495C21.9895 5.74729 21.9895 5.00529 21.5318 4.54768L17.3297 0.345578C16.5915 -0.392655 15.3292 0.130197 15.3292 1.17424V3.42317Z" fill="#191919"/>
</svg>
            </span>
            </p>
            <p className="text-green fs-5"> 12 Exercise - 02 Sets - 10 Minutes</p>
        </div>
      </div>
      </div>
      
    </div>
  )
}

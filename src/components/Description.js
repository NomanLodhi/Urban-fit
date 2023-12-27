import React from 'react'

export default function Description() {
  return (
   <>
    <div className='container-fluid container-xxl bg-dark p-5'>
      <div className="d-flex flex-column justify-content-center align-items-center">
      <p className="text-light  text-center fst-italic fs-2 ">
      Our platform offer personalised workout, easy customization and a amazing experince for excercise-all in one place,elevate your fitness game with simplicity and effiency.
      </p>
      <button className="btn rounded-pill btn-lg  bg-green fw-bold my-2" style={{width:200}}>Learn More <i class="bi bi-arrow-right mx-2 fw-bold"></i> </button>
      </div>
    </div>
   </>
  )
}

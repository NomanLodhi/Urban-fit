import React from 'react'

export default function Stats() {
  return (
   <>
    <div className='container-fluid container-xxl bg-green'>
      <div className="row py-4 px-1">
        <div className="col-lg-3">
            <h2 className='fw-bold display-4'>90+</h2>
            <p className="fs-5">Programs created for beginner, intermediate,and advanced practice</p>
        </div>
        <div className="col-lg-3">
              <h2 className='fw-bold display-4'>1 on 1</h2>
            <p className="fs-5">Concierge to support your mindful movement practice</p>
        </div>
        <div className="col-lg-3">
              <h2 className='fw-bold display-4'>16+</h2>
            <p className="fs-5">Styles to keep your mind and body guessing or deepen your practice.</p>
        </div>
        <div className="col-lg-3">
              <h2 className='fw-bold display-4'>2 to 90</h2>
            <p className="fs-5">Minute class es to get you on your mat with whatever time you have.</p>
        </div>
      </div>
    </div>
   </>
  )
}

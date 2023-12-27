import React from 'react'

export default function JoinForm() {
  return (
    <>
     <div className="container-fluid container-xxl bg-green py-4">
        <div className="row">
            <div className="col-lg-4">
                <h1 className="fw-bold display-3">Ready to join community?</h1>
            </div>
            <div className="col-lg-8">
                <div className="border-form rounded-pill my-4 py-4">
                    <div className="d-flex flex-wrap w-100 position-relative">
                    <input type="text" className='bg-transparent fw-bold focus-input  border-0 fs-3 px-3' placeholder='Email Address' />
<button className='btn rounded-pill btn-lg btn-light px-4 mx-3 fw-bold position-absolute end-0 '>Submit Now</button>
                    </div>
                    
                </div>
            </div>
        </div>
        </div> 
    </>
  )
}
          
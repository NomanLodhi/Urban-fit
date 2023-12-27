import React from 'react'

export default function WhyUrban(props) {
  return (
   <>
    <div className='container-fluid container-xxl bg-black-custom text-green'>
      <div className="text-center">
        <h1 className="display-6 py-1">Why Urban Fit ?</h1>
        <h1 className="display-5 fw-bold py-1">Helix heal your body &</h1>
        <h1 className="display-5 fw-bold py-1">mind to be creative</h1>
      </div>
      <div className="row py-1">
        <div className="col-lg-4 ">
        <div className="my-1">
        <p class=" fs-5 text-center  my-3 fw-bold bg-green text-dark rounded-circle  fw-bold" style={{width:35, height:35}}>01</p>
        <p className="fs-2 fw-bold">Build community one breathe at a time</p>
        <p className="fs-5">We recognize that exercise is not just a solitary practice,it’s about the connection you make with orders.</p>
        <p className='bg-transparent text-green'>Learn  More<i class="bi bi-arrow-right mx-2 fw-bold"></i></p>
        </div>
        <div className="my-1">
        <p class=" fs-5 text-center  my-3 fw-bold bg-green text-dark rounded-circle  fw-bold" style={{width:35, height:35}}>02</p>
        <p className="fs-2 fw-bold">Personalized attention & growth</p>
        <p className="fs-5">These one on one session are tailored to your specific need, whether you’re looking to depend.</p>
        <p className='bg-transparent text-green'>Learn More<i class="bi bi-arrow-right mx-2 fw-bold"></i></p>
        </div>
        
        </div>
        <div className="col-lg-4">
            <img src={props.CenterImg} alt="" className='w-100 h-100' />
        </div>
        <div className="col-lg-4">
        <div className="my-1">
        <p class=" fs-5 text-center  my-3 fw-bold bg-green text-dark rounded-circle  fw-bold" style={{width:35, height:35}}>03</p>
        <p className="fs-2 fw-bold">A holistic approach to wellness</p>
        <p className="fs-5">We provide you with a comprehensive wellness experience that promotes balance, validity and mental clarity.</p>
        <p className='bg-transparent text-green'>Learn More<i class="bi bi-arrow-right mx-2 fw-bold"></i></p>
        </div>
        <div className="my-1">
        <p class=" fs-5 text-center  my-3 fw-bold bg-green text-dark rounded-circle  fw-bold" style={{width:35, height:35}}>04</p>
        <p className="fs-2 fw-bold">Healthy & Relaxed freshness mind</p>
        <p className="fs-5">You can experience the benefits of a virtual studio at home and on-the-go with any device.</p>
        <p className='bg-transparent text-green'>Learn More<i class="bi bi-arrow-right mx-2 fw-bold"></i></p>
        </div>
        </div>
      </div>
      </div>
   </>
  )
}

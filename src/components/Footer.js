import React from 'react'

export default function Footer(props) {
  return (
    <>
      <div className="container-fluid container-xxl bg-dark pt-3 ">
        <div className="row">
            <div className="col-lg-5">
                <img src={props.logo} alt="" width={200}/>
                <p className="fs-4 text-light p-1">
                We take fitness to the next level by providing online classes setting,qualified and trained teachers,organised and structured.
                </p>
                <div className="d-flex">
                <p class=" fs-4 text-center  my-3 fw-bold bg-green text-dark rounded-circle mx-1  fw-bold" style={{width:35, height:35}}><i class="fa-brands fa-facebook-f"></i></p>
                <p class=" fs-4 text-center  my-3 fw-bold bg-green text-dark rounded-circle  fw-bold mx-1" style={{width:35, height:35}}><i class="fa-brands fa-instagram"></i></p>
                <p class=" fs-4 text-center  my-3 fw-bold bg-green text-dark rounded-circle  fw-bold mx-1" style={{width:35, height:35}}><i class="fa-brands fa-twitter"></i></p>
                <p class=" fs-4 text-center  my-3 fw-bold bg-green text-dark rounded-circle  fw-bold mx-1" style={{width:35, height:35}}><i class="fa-brands fa-linkedin-in"></i></p>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="row pt-5">
                    <div className="col-lg-4">
                        <ul className="text-light ul-footer">
                            <li className="fs-1 fw-bold py-1">Fitness</li>
                            <li className=" py-2">Give the gift of fitness</li>
                            <li className=" py-2">Our Manifesto</li>
                            <li className=" py-2">Support Center</li>
                            <li className=" py-2">Contact Us</li>
                            <li className=" py-2">Careers</li>
                            <li className=" py-2">Devices</li>
                            <li className=" py-2">Privacy & Policy</li>
                            <li className=" py-2">Terms & Conditionsx</li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <ul className="text-light ul-footer">
                            <li className="fs-1 fw-bold py-1">Inspiration</li>
                            <li className=" py-2">Online Meditation</li>
                            <li className=" py-2">Online Pilates</li>
                            <li className=" py-2">Online Fitness</li>
                            <li className=" py-2">Meditation for Beginners</li>
                            <li className=" py-2">Pilates for Beginners</li>
                            <li className=" py-2">Live Meditation Classes</li>
                            <li className=" py-2">Live Pilates Classes</li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <ul className="text-light ul-footer">
                            <li className="fs-1 fw-bold py-1">Content</li>
                            <li className=" py-2">Programs</li>
                            <li className=" py-2">Teachers</li>
                            <li className=" py-2">Style</li>
                            <li className=" py-2">Fitness Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-black-custom container-xxl fs-5 p-2 container-fluid text-secondary text-center">
        Urban Fit &copy; Copyright2023.All Right Reserved
        </div>
      </div>
    </>
  )
}

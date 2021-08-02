import React from 'react'
import './RegisterFooter.scss'
const RegisterFooter = () => {
  return (
        <footer>
            <div className="footer position-relative">
                <div className="footer-contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md text-center">
                                <h3 className="text-light">NPF HQ</h3>
                                <p className="pt-4 text-secondary">Department of Training & Development</p>
                            </div>
                            <div className="col-md text-center">
                                <i className="fa fa-map-marker fa-2x text-light"></i>
                                <p className="pt-4 text-secondary">Louis Edet House
                                    Force Headquartes
                                    Garki,Shehu Shagari Way, Abuja</p>
                            </div>
                            <div className="col-md text-center">
                                <i className="fa fa-phone fa-2x text-light"></i>
                                <p className="pt-4 text-secondary">+22 004 324 1124</p>
                            </div>
                            <div className="col-md text-center">
                                <i className="fa fa-envelope fa-2x text-light"></i>
                                <p className="pt-4 text-secondary">pressforabuja@police.gov.ng</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-power text-center text-dark">
                Department of Training & Development Nigeria Police Force, All Right Reserved
                </div>
                <div className="footer-credit text-center text-white">
                    Powered By <img src="assets/img/policelogo1.png" className="footer-logo"/>
                </div>
            </div>
       </footer>
  )
}

export default RegisterFooter

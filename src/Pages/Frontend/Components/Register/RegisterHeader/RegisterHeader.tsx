import React from 'react'
import './RegisterHeader.scss'

const RegisterHeader = () => {
  return (
    <header className="register-header shadow">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://mwce-jobbank.lagosstate.gov.ng/wp-content/uploads/2021/05/imgbin_lekki-ikoyi-link-bridge-alimosho-government-of-lagos-state-png.png" className="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default RegisterHeader

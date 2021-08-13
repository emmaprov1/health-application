import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { RegisterFooter, RegisterHeader } from '../../Components/Index'
import './Contact.scss'
import emailjs from 'emailjs-com';
import { Loader } from '../../../../Components';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [submited, setSubmited] = useState(false)
  const [loader, setLoader] = useState(false)

  const onSubmit = handleSubmit((data) => completeForm(data));

  async function completeForm (data:any) {
    setLoader(true)
    setSubmited(!submited)

    console.log("form data", data)
    await emailjs.sendForm('service_2g20o67', 'service_2g20o67', data, 'user_QFZBAx6OtbZmcE17k4qh  ')
      .then((result) => {
        setLoader(false)
        console.log(result.text)
        setSubmited(!submited)
        toast.success('Message sent successfully', { duration: 20000, className: 'bg-success text-white' });
      }, (error:any) => {
        setLoader(false)
        setSubmited(!submited)
        console.log("thrown error:", error.message)
        toast.error(error.message, { duration: 20000, className: 'bg-danger text-white' });
      });
  }

  return (
    <React.Fragment>
    <RegisterHeader/>
     <div className="contact">
        <header className="container-fluid p-0 my-5">
            <div className="services-page__hero section d-flex align-items-center">
                <div className="container">
                    <div className="heading-wrap mb-4 text-center">
                        <h2 className="heading-wrap__heading heading-wrap__heading--1">Contact Us</h2>
                    </div>
                </div>
            </div>
        </header>

        <section className="contact-info section container-fluid pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <div className="contact-info__card text-center">
                            <div className="icon-wrap icon-wrap--grey d-flex align-items-center justify-content-center mx-auto">
                                <i className="icon-round jobs__list--icon fas fa-envelope-open-text fa-2x"></i>
                            </div>
                            <div className="contact-info__details">
                                <h3 className="contact-info__heading">Email Here</h3>
                                <p>
                                    <a href="mailto:info@jobazone.com" target="_blank" rel="noopener noreferrer">hsc@lagosstate.gov.ng, info@lshsc.com.ng</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md">
                        <div className="contact-info__card text-center">
                            <div className="icon-wrap icon-wrap--grey d-flex align-items-center justify-content-center mx-auto">
                                <i className="icon-round jobs__list--icon fas fa-map-marked-alt fa-2x"></i>
                            </div>
                            <div className="contact-info__details">
                                <h3 className="contact-info__heading">Location Here</h3>
                                <p>
                                    <a href="https://www.google.com/maps/place/Lagos/@6.548055,3.28396,10z/" target="_blank" rel="noopener noreferrer">1 Ganiu Smith Street Lagos Island, <br/>Lagos</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md">
                        <div className="contact-info__card text-center">
                            <div className="icon-wrap icon-wrap--grey d-flex align-items-center justify-content-center mx-auto">
                                <i className="icon-round jobs__list--icon fas fa-phone-volume fa-2x"></i>
                            </div>
                            <div className="contact-info__details">
                                <h3 className="contact-info__heading">Call Here</h3>
                                <p>
                                    <a href="tel:+2348143470003" target="_blank" rel="noopener noreferrer">012293437, 07036534348, 08135349102, 08039209165, 09011002705</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section section-montserrat container-fluid my-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <div className="heading-wrap mb-5">
                            <h2 className="heading-wrap__heading heading-wrap__heading--2">Contact Us</h2>
                            <p>Reach out to us for any enquiry</p>
                        </div>

                        <div className="contact-form mb-3">
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" className="form-control" id="name" {...register("name")} placeholder="Full Name"/>
                                    <div className="text-danger"> {errors.email && errors.email.message} </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" className="form-control" id="email" {...register("email")} aria-describedby="emailHelp" placeholder="Email Address"/>
                                    <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
                                    <div className="text-danger"> {errors.email && errors.email.message} </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message" {...register("message")} placeholder="Message"></textarea>
                                    <div className="text-danger"> {errors.message && errors.message.message} </div>
                                </div>

                                <button type="submit" className="btn btn-outline-primary info btn--primary-light">
                                    Submit
                                    {submited && (<span className="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>)}
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg">
                        <div className="contact-map">
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1240.9784469650635!2d-0.09628980040806674!3d51.53235045994284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1603023038539!5m2!1sen!2sng" frameBorder="0"
                                style={{ border: 0 }} aria-hidden="false"></iframe> */}

<iframe className="contact-map__map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63428.784729506035!2d3.4458768310546706!3d6.483760860732382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa2818595b4e1dd46!2sLAGOS%20STATE%20HEALTH%20SERVICE%20COMMISSION!5e0!3m2!1sen!2sus!4v1628840622618!5m2!1sen!2sus" frameBorder="0"
                                style={{ border: 0 }} aria-hidden="false"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    <RegisterFooter/>

    <Toaster/>
    <Loader show={loader}/>
   </React.Fragment>
  )
}

export default Contact

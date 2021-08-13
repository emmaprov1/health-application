import React from 'react'
import { useHistory } from 'react-router'
import { RegisterFooter, RegisterHeader } from '../../Components/Index'
import './Home.css'

const Home = () => {
  const history = useHistory()
  return (
    <React.Fragment>
    <RegisterHeader/>

      <div className="container py-5">
        <h2>JOB VACANCIES ADVERTISEMENT</h2>
        <img src="https://www.pinnaclereport.com.ng/wp-content/uploads/2020/07/images-52.jpeg" className="w-50 py-4"></img>
        <p>
          The Lagos State Health Service Commission, the Human Resource Agency for the secondary health care facilities in the State invites applications from suitably qualified candidates to fill the following vacant positions in Government Hospitals across the State.
      </p>

      <h5>CONSULTANTS IN THE FOLLOWING SPECIALTIES:</h5>
      <ul>
      <li>Cardiothoracic Surgery</li>
      <li>Paediatric Surgery</li>
      <li>General Surgery</li>
      <li>Neonatologist</li>
      <li>Burns and Plastic Surgery</li>
      <li>Gastroenterologist</li>
      <li>Paediatric Cardiologist</li>
      <li>ENT Surgeon</li>
       <li>Urology</li>
      <li>Neurosurgery</li>
      <li>Psychiatry</li>
     <li>Endocrinology</li>
      <li>Intensivist</li>
     <li>Anaesthesia</li>
  </ul>

  <h5>Requirements:</h5>
  <b>Interested applicant must possess the following:</b>
  <ul>
    <li>MBBS degree or its equivalent from recognized institution</li>
    <li>Fellowship of the National Postgraduate Medical college of Nigeria or its equivalent in the respective specialty</li>
    <li>Registration with the Medical and Dental Council of Nigeria</li>
    <li>Valid License to Practice</li>
    <li>NYSC Discharge /Exemption Certificate </li>
  </ul>
  <h5>SENIOR REGISTRAR I & II IN THE FOLLOWING SPECIALTIES:</h5>

  <ul>
    <li>OBGYN</li>
    <li>Radiology</li>
    <li>Lab Medicine</li>
    <li>Dentistry</li>
    <li>Paediatrics</li>
    <li>Surgery</li>
    <li>Medicine</li>
    <li>Anaesthesia</li>
    <li>Opthalmology</li>
    <li>Cardiology</li>
    <li>Haematology</li>
    <li>Gastroenterology</li>
    <li>Endocrinology</li>
    <li>Neurology</li>
  </ul>

<h5>Requirements:</h5>
<b>Interested applicant must possess the following requirements.</b>
<ul>
<li>MBBS degree or its equivalent from recognized institution</li>
<li>Passed Part I Fellowship examination of the National Postgraduate Medical College or its equivalent in the respective specialty</li>
<li>Registration with the Medical and Dental Council of Nigeria</li>
<li>Valid License to Practice</li>
<li>NYSC Discharge/ Exemption Certificate</li>
</ul>

  <h5>MEDICAL AND DENTAL OFFICERS</h5>

<h5>Requirements:</h5>
<b>Interested applicant must possess the following requirements.</b>
<ul>
<li>MBBS degree or its equivalent from recognized institution</li>
<li>Registration with the Medical and Dental Council of Nigeria</li>
<li>Valid License to Practice</li>
<li>NYSC Discharge/ Exemption Certificate</li>
</ul>

<h5>MED LAB SCIENTIST</h5>
<b>Requirements:</b>
<b>Interested applicant must possess the following requirements.</b>
<ul>
<li>Medical Laboratory Science degree or its equivalent from recognized institution</li>
<li>Registration with the Medical Laboratory Science Council</li>
<li>Valid License to Practice</li>
<li>NYSC Discharge/ Exemption Certificate</li>
  </ul>

<h5>PHARMACIST</h5>
<b>Requirements:</b>
<b>Interested applicant must possess the following requirements.</b>
<ul>
<li>First degree in Pharmacy or its equivalent from recognized institution</li>
<li>Registration with the Pharmaceutical Council of Nigeria</li>
<li>Valid License to Practice</li>
<li>NYSC Discharge/ Exemption Certificate</li>
  </ul>

<h5>PHARMACY TECHNICIAN</h5>
<b>Requirements:</b>
<b>Interested applicant must possess the following requirements.</b>
<ul>
<li>Completion of an approved technician training from a recognized institution </li>
<li>Registration with the Pharmaceutical Council of Nigeria</li>
<li>Valid Permit to Practice</li>

<b>NURSING OFFICERS -in the following Nursing specialties:</b>
<li>Perioperative </li>
<li>Accident & Emergency</li>
<li>Orthopaedic</li>
<li>Nephrology</li>
<li>Paediatric</li>
<li>Ear, Nose & Throat</li>
<li>Intensive Care</li>
<li>Psychiatry</li>
<li>Opthalmology</li>
<li>Anaesthesia</li>
<li>Cardiothoracic</li>
<li>Burns and Plastic Nursing</li>
  </ul>

  <h5>Requirements: </h5>
<b>Interested applicant must possess the following requirements:</b>
<ul>
<li>Nursing Certificate from an approved institution (BNSC will be an added advantage)</li>
<li>Post Basic Nursing in the aforementioned specialties</li>
<li>Registration with the Nursing and Midwifery Council of Nigeria</li>
<li>Valid License to Practice</li>
<li>NYSC Discharge/Exemption Certificate if applicable</li>
  </ul>

<h5>PHYSIOTHERAPIST</h5>
<b>Requirements:</b>
<b>Interested applicant must possess the following requirements:</b>
<ul>
<li>Bachelor’s degree in Physiotherapy from an approved institution </li>
<li>Registration with the Physiotherapy Registration Board of Nigeria</li>
<li>Valid License to Practice</li>
<li>NYSC Discharge/Exemption Certificate </li>
  </ul>

<h5>RADIOGRAPHER</h5>
<b>Requirements:</b>
<b>Interested applicant must possess the following requirements:</b>
<ul>
<li>Bachelor’s degree in Radiography or any other equivalent qualification from a recognized institution </li>
<li>Registration with the Radiographers Registration Board of Nigeria</li>
<li>Valid License to Practice</li>
<li>NYSC Discharge/Exemption Certificate </li>
  </ul>

<h5>OPTOMETRIST:</h5>
<b>Requirements:</b>
<b>Interested applicant must possess the following requirements:</b>
<ul>
<li>Doctor of Optometry or any other equivalent qualification from a recognized institution </li>
<li>Registration with the Optometry Registration Board of Nigeria</li>
<li>Valid License to Practice</li>
<li>NYSC Discharge/Exemption Certificate </li>
  </ul>

 <h5>MEDICAL RECORD OFFICER:</h5>
<b>Requirements:</b>
<b>Interested applicant must possess the following requirements:</b>
<ul>
<li>Bachelor’s degree in Health Information Management or any other equivalent qualification from a recognized institution</li>
<li>Registration with the Health Information Registration Board of Nigeria</li>
  <li>Valid License to Practice</li>
  <li>NYSC Discharge/Exemption Certificate </li>
</ul>

<h5>MEDICAL LABORATORY TECHNICIAN:</h5>
<b>Requirements:</b>
<b>Interested applicant must possess the following requirements.</b>
<ul>
<li>Completion of an approved technician training from a recognized institution </li>
<li>Registration with the Medical Laboratory Council of Nigeria</li>
<li>Valid Permit to Practice</li>
</ul>

<h5>DENTAL TECHNICIAN:</h5>
<b>Requirements:</b>
<b>Interested applicant must possess the following requirements.</b>
<ul>
<li>Completion of an approved technician training from a recognized institution </li>
<li>Registration with the Dental Council of Nigeria</li>
<li>Valid Permit to Practice</li>
</ul>

<h5>DENTAL THERAPIST/TECHNOLOGIST:</h5>
<b>Requirements:</b>
<b>Interested applicant must possess the following requirements.</b>
<ul>
 <li>Completion of an approved Higher National Diploma from a recognized institution </li>
<li>Registration with the Dental Council of Nigeria</li>
<li>Valid License to Practice</li>
</ul>

 <h2>MEDICAL AND DENTAL HOUSE OFFICERS</h2>
<b>Requirements:</b>
<b>Interested applicant must possess the following requirements.</b>
<ul>
  <li>Statement of Result of MBBS/BDS</li>
  <li>Registration with the Medical and Dental Council of Nigeria</li>
<li>Provisional License to Practice</li>
</ul>

<h5>NURSE INTERN</h5>
<b>Requirements:</b>
<b>Interested applicant must possess the following requirements.</b>
<ul>
<li>Statement of Result </li>
<li>Registration with the Nursing and Midwifery Council of Nigeria</li>
<li>Induction Certificate</li>
</ul>

<h5>PHARMACY INTERN</h5>
<b>Requirements:</b>
<b>Interested applicant must possess the following requirements.</b>
<ul>
<li>Statement of Result </li>
<li>Registration with the Pharmaceutical Council of Nigeria</li>
<li>Pharmacy Oath</li>
</ul>

<h5>PHYSIOTHERAPY INTERN</h5>
<b>Requirements:</b>
<b>Interested applicant must possess the following requirements.</b>
<ul>
<li>Statement of Result </li>
<li>Registration with the Physiotherapy Board of Nigeria</li>
<li>License</li>
</ul>
<h5>MEDICAL LABORATORY INTERN</h5>
<b>Requirements:</b>
<b>Interested applicant must possess the following requirements.</b>
<ul>
<li>Statement of Result </li>
<li>Registration with the Medical Laboratory Board of Nigeria</li>
<li>License</li>
  </ul>

<b>Application closes at midnight 4th September, 2021.</b>

<b>Only shortlisted candidates will be contacted for the Computer Based Test and Oral Interview.</b>

Signed:
Permanent Secretary,
Lagos State Health Service Commission.

  <div className="mt-5">
  <form onSubmit={() => history.push('register')}>
  <input type="checkbox" required></input>
    <label>I have read the Information Carefully</label>
    <br></br>
   <a href="/#/register"><button className="btn btn-dark rounded btn-anim shadow">Proceed to Job Application Page</button></a>
  </form>
  </div>
</div>
    <RegisterFooter/>
   </React.Fragment>
  )
}

export default Home

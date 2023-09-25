import React from 'react'
import './EducationDetails.css'

const EducationDetails = () => {

    const handleClick = () => {
        alert('We will verify your details and get back to you in 2-3 business days, Thank You for registering')
    }

  return (
    <div>
      <h1 className="center-text">Educational Details Form</h1>
    <form className="form-container" action="process_education_details.php" method="post">
        <label className="form-label" for="10th_school">10th School Name:</label>
        <input className="form-input" type="text" id="10th_school" name="10th_school" required />

        <label className="form-label" for="10th_percentage">10th Percentage:</label>
        <input className="form-input" type="number" id="10th_percentage" name="10th_percentage" step="0.01" required/> 

        <label className="form-label" for="10th_percentage">Upload 10th Marksheet</label>
        <input className="form-input" type="file" id="10th_marksheet" name="10th_marksheet" step="0.01" required/> 

        <label className="form-label" for="12th_school">12th School Name:</label>
        <input className="form-input" type="text" id="12th_school" name="12th_school" required/>

        <label className="form-label" for="12th_percentage">12th Percentage:</label>
        <input className="form-input" type="number" id="12th_percentage" name="12th_percentage" step="0.01" required/>

        <label className="form-label" for="10th_percentage">Upload 12th Marksheet</label>
        <input className="form-input" type="file" id="12th_marksheet" name="12th_marksheet"  required/> 

        <label className="form-label" for="degree_college">Degree College Name:</label>
        <input className="form-input" type="text" id="degree_college" name="degree_college" required/>

        <label className="form-label" for="degree_percentage">Degree Percentage:</label>
        <input className="form-input" type="number" id="degree_percentage" name="degree_percentage" step="0.01" required />

        <label className="form-label" for="10th_percentage">Upload Degree Marksheet</label>
        <input className="form-input" type="file" id="Degree_marksheet" name="Degree_marksheet"  required/> 

        <input className="submit-button" type="submit" value="Submit" onClick={handleClick} />
    </form>
    </div>
  )
}

export default EducationDetails

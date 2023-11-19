import React, { useState } from 'react';

function JumpCounterForm() {
  const [formData, setFormData] = useState({
    numberOfSubjects: '',
    totalRunTime: '',
    phaseOneMinutes: '',
    phaseOneSeconds: '',
    phaseTwoMinutes: '',
    phaseTwoSeconds: '',
    numberOfBins: '',
    binDurationMinutes: '',
    binDurationSeconds: '',
  });

  const handleFileChange = (event) => {

  };

  const [selectedValue, setselectedValue] = useState('');

  const handleSelectChange = (event) => {
    setselectedValue(event.target.value);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="jump-counter-form">
      <h1>Jump Counter</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Number of Subjects:
            <input
              type="text"
              name="numberOfSubjects"
              value={formData.numberOfSubjects}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Number of bins:
            <input
              type="text"
              name="numberOfBins"
              value={formData.numberOfBins}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Video Upload:

            <input type="file"
              accept="video/*"
              onChange={handleFileChange}
              required />
          </label>
        </div>
        <div className="form-group">
          <h2>Select a subject:</h2>
          {/* Dropdown menu */}
          <select value={selectedValue} onChange={handleSelectChange}>
            <option value="">--Please choose an option--</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="H">H</option>
          </select>

          {/* Display selected value */}
          {selectedValue && <h3>You selected: {selectedValue}</h3>}
        </div>
        <div className="form-group">
          <label>
            Total RunTime:
          </label>
        </div>
        <div className="form-group">
          <label>
            Phase one Duration:
            Minutes:
            <input
              type="text"
              name="phaseOneMinutes"
              value={formData.phaseOneMinutes}
              onChange={handleChange}
            />
            Seconds:
            <input
              type="text"
              name="phaseOneSeconds"
              value={formData.phaseOneSeconds}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Phase two Duration:
            Minutes:
            <input
              type="text"
              name="phaseTwoMinutes"
              value={formData.phaseTwoMinutes}
              onChange={handleChange}
            />
            Seconds:
            <input
              type="text"
              name="phaseTwoSeconds"
              value={formData.phaseTwoSeconds}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
      <div className="next-subject">
        <button>Next Subject</button> 
      </div>
    </div>
  );
}

export default JumpCounterForm;
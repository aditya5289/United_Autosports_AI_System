import React, { useState } from 'react';

function Recordchange({ setChartData }) {
  const [formData, setFormData] = useState({
    Partname: '',
    PartType: '',
    Company: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the function passed via props to update chart data
    setChartData(formData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">Classic Form</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="partname" className="form-label">Part Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="partname"
                    name="Partname"
                    value={formData.Partname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="parttype" className="form-label">Part Type</label>
                  <input
                    type="text"
                    className="form-control"
                    id="parttype"
                    name="PartType"
                    value={formData.PartType}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Company</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="Company"
                    value={formData.Company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recordchange;

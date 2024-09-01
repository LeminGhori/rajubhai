import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ReusableDialog({ isOpen, onClose, accountDetails, savedSessionIds, setSavedSessionIds, dispatch, actionTypes }) {
  const [formValues, setFormValues] = useState({ accountNo: '', meterNo: '' });
  const [errors, setErrors] = useState({});
  const [btnDisable, setBtnDisable] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!formValues.accountNo) errors.accountNo = 'Account Number is required';
    if (!formValues.meterNo) errors.meterNo = 'Meter Number is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setBtnDisable(true);
    try {
      const existingSession = savedSessionIds.find(session => session.meterNo === formValues.meterNo && session.accountNo === formValues.accountNo);

      if (existingSession) {
        dispatch({ type: actionTypes.SETSESSION, sessionId: existingSession.sessionId });
        localStorage.setItem('sessionId', existingSession.sessionId);
        toast.success('Existing session used successfully!');
      } else {
        const response = await axios.get(`/session/create?meterNo=${formValues.meterNo}&accountNo=${formValues.accountNo}`);

        if (response.status === 200) {
          const sessionId = response.data.sessionId;
          setSavedSessionIds(prevSessions => {
            const updatedSessions = [{ meterNo: formValues.meterNo, accountNo: formValues.accountNo, sessionId }, ...prevSessions.slice(0, 4)];
            localStorage.setItem('savedSessions', JSON.stringify(updatedSessions));
            return updatedSessions;
          });

          dispatch({ type: actionTypes.SETSESSION, sessionId });
          localStorage.setItem('sessionId', sessionId);
          toast.success(response.data.statusMessage || 'API call successful!');
        } else {
          toast.error(response.data.errorMessage || 'API call failed!');
        }
      }
      navigate(`/chat-bot?${formValues.meterNo}-${formValues.accountNo}`);
    } catch (error) {
      toast.error(error.message || 'Please Try After Sometime');
    } finally {
      setBtnDisable(false);
      onClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  return (
    isOpen && (
      <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-labelledby="customDialogTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="customDialogTitle">Account and Meter Information</h5>
              <button type="button" className="close" aria-label="Close" onClick={onClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="accountNo">Account Number</label>
                  <select
                    className={`form-control ${errors.accountNo ? 'is-invalid' : ''}`}
                    name="accountNo"
                    value={formValues.accountNo}
                    onChange={handleChange}
                  >
                    <option value="">Select Account</option>
                    {Object.keys(accountDetails).map((account, index) => (
                      <option key={index} value={account}>{account}</option>
                    ))}
                  </select>
                  {errors.accountNo && <div className="invalid-feedback">{errors.accountNo}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="meterNo">Meter Number</label>
                  <select
                    className={`form-control ${errors.meterNo ? 'is-invalid' : ''}`}
                    name="meterNo"
                    value={formValues.meterNo}
                    onChange={handleChange}
                    disabled={!formValues.accountNo}
                  >
                    <option value="">Select Meter</option>
                    {formValues.accountNo && accountDetails[formValues.accountNo]?.map((meter, index) => (
                      <option key={index} value={meter}>{meter}</option>
                    ))}
                  </select>
                  {errors.meterNo && <div className="invalid-feedback">{errors.meterNo}</div>}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                  <button type="submit" className="btn btn-primary" disabled={btnDisable}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ReusableDialog;

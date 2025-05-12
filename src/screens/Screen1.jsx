import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Screen1.css";

function Screen1({  userName, dob, setDob, setAge }) {
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (dob) {
      const age = calculateAge(dob);
      setAge(age);
    }
    navigate('/screen2')
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <div className="screen">
      <div className="card">
        <h1 className="title">👋 Olá, {userName}!</h1>
        <p className="description">
          Queremos entender como você aprende para criar um plano personalizado.
          Responda honestamente e tome seu tempo.
        </p>

        <div className="form-group">
          <label htmlFor="dob" className="label">
            📅 Data de Nascimento
          </label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="input"
          />
          <button type="button" onClick={handleSubmit} className="primary-btn">
            ➡️ Começar Avaliação
          </button>
        </div>
      </div>
    </div>
  );
}

export default Screen1;

import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import "./Screen5.css";
import { useNavigate } from "react-router-dom";

function Screen5() {
  const [studyGoal, setStudyGoal] = useState("");
  const [goalTime, setGoalTime] = useState("");
  const [commitment, setCommitment] = useState(3);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  
  const handleNext = () => {
    const newErrors = {
      studyGoal: !studyGoal,
      goalTime: !goalTime,
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      navigate("/screen6");
    }
  };

  return (
    <>
      <ProgressBar percent={60} />
      <div className="screen">
        <div className="card">
          <div className="title-section">
            <h1 className="title">🎯 O que você quer alcançar?</h1>
            <p className="description">
              Clareza sobre seu objetivo torna o caminho mais fácil de definir.
            </p>
          </div>

          <div className="form-group">
            <div className="question-group">
              <h3 className="question">10. Qual é seu principal objetivo com os estudos?</h3>
              <div className="options-group">
                {["exam", "skill", "academic", "fun"].map((option, index) => (
                  <label
                    key={index}
                    htmlFor={`goal-${index}`}
                    className={`radio-option ${studyGoal === option ? "selected" : ""} ${
                      errors.studyGoal ? "error-border" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      id={`goal-${index}`}
                      name="study-goal"
                      value={option}
                      onChange={(e) => setStudyGoal(e.target.value)}
                      checked={studyGoal === option}
                      className="hidden"
                    />
                    {option === "exam" && "Prova / Concurso"}
                    {option === "skill" && "Habilidade específica"}
                    {option === "academic" && "Melhoria acadêmica"}
                    {option === "fun" && "Por diversão"}
                  </label>
                ))}
              </div>
            </div>

            <div className="question-group">
              <h3 className="question">11. Quanto tempo você quer levar para alcançar isso?</h3>
              <div className="options-group">
                {["1m", "3m", "6m", "1y"].map((option, index) => (
                  <label
                    key={index}
                    htmlFor={`time-${index}`}
                    className={`radio-option ${goalTime === option ? "selected" : ""} ${
                      errors.goalTime ? "error-border" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      id={`time-${index}`}
                      name="goal-time"
                      value={option}
                      onChange={(e) => setGoalTime(e.target.value)}
                      checked={goalTime === option}
                      className="hidden"
                    />
                    {option === "1m" && "1 mês"}
                    {option === "3m" && "3 meses"}
                    {option === "6m" && "6 meses"}
                    {option === "1y" && "1 ano ou mais"}
                  </label>
                ))}
              </div>
            </div>

            <div className="question-group">
              <h3 className="question">
                12. Numa escala de 1 a 5, o quanto você está comprometido com esse objetivo?
              </h3>
              <div className="commitment-slider">
                <div className="slider-labels">
                  <span>1 - Pouco</span>
                  <span>5 - Muito comprometido</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={commitment}
                  onChange={(e) => setCommitment(e.target.value)}
                  className="range-slider"
                />
                <div className="slider-values">
                  {[1, 2, 3, 4, 5].map((v) => (
                    <span key={v}>{v}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="more-detail">
              <span>🔍 Responder com mais detalhes</span>
            </div>

            <div className="info-note">
              <p>
                📚 Baseado em metas SMART{" "}
                <a href="#" className="underline">❓ Saiba mais</a>
              </p>
            </div>

            <button
              onClick={handleNext}
              className="primary-btn"
            >
              ➡️ Próxima Etapa
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen5;

import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import "./Screen7.css";

function Screen7() {
  const [education, setEducation] = useState("");
  const [knowledge, setKnowledge] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const educationLevels = [
    { id: "elementary", label: "Ensino Fundamental" },
    { id: "highschool", label: "Ensino Médio" },
    { id: "undergrad", label: "Graduação" },
    { id: "graduate", label: "Pós-graduação" },
  ];

  const knowledgeLevels = [
    { id: "beginner", label: "Iniciante" },
    { id: "intermediate", label: "Intermediário" },
    { id: "advanced", label: "Avançado" },
  ];

  const handleNext = () => {
    if (!education || !knowledge) {
      setError(true);
      return;
    }
    setError(false);
    navigate("/screen8");
  };

  return (
    <>
      <ProgressBar percent={100} />
      <div className="screen">
        <div className="card">
          <div className="title-section">
            <h1 className="title">🎓 Sua base atual de conhecimento</h1>
            <p className="description">
              Para oferecer o conteúdo certo, precisamos saber de onde você está começando.
            </p>
          </div>

          <div className="question-group">
            <h3 className="question">16. Qual seu nível atual de educação?</h3>
            <div className="options-group vertical">
              {educationLevels.map((level) => (
                <label
                  key={level.id}
                  className={`radio-option ${education === level.id ? "selected" : ""} ${
                    error && !education ? "error-border" : ""
                  }`}
                >
                  <input
                    type="radio"
                    id={level.id}
                    name="education-level"
                    className="hidden"
                    value={level.id}
                    checked={education === level.id}
                    onChange={() => setEducation(level.id)}
                  />
                  {level.label}
                </label>
              ))}
            </div>
          </div>

          <div className="question-group">
            <h3 className="question">
              17. Como você classificaria seu conhecimento sobre seu objetivo/tópico atual?
            </h3>
            <div className="options-group vertical">
              {knowledgeLevels.map((level) => (
                <label
                  key={level.id}
                  className={`radio-option ${knowledge === level.id ? "selected" : ""} ${
                    error && !knowledge ? "error-border" : ""
                  }`}
                >
                  <input
                    type="radio"
                    id={level.id}
                    name="knowledge-level"
                    className="hidden"
                    value={level.id}
                    checked={knowledge === level.id}
                    onChange={() => setKnowledge(level.id)}
                  />
                  {level.label}
                </label>
              ))}
            </div>
          </div>

          <div className="extra-note">
            🔍 Responder com mais detalhes
          </div>

          <div className="info-note">
            📚 Baseado em princípios de nivelamento educacional{" "}
            <a href="#" className="underline">❓ Saiba mais</a>
          </div>

          <button onClick={handleNext} className="primary-btn">
            ✅ Finalizar Avaliação
          </button>
        </div>
      </div>
    </>
  );
}

export default Screen7;


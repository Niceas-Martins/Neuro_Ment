import ProgressBar from '../components/ProgressBar';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Screen6.css";

function Screen6() {
  const [difficulties, setDifficulties] = useState([]);
  const [distractionText, setDistractionText] = useState("");
  const [habitControl, setHabitControl] = useState(3);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const options = [
    { id: "attention", label: "Déficit de atenção" },
    { id: "motivation", label: "Falta de motivação" },
    { id: "procrastination", label: "Procrastinação" },
    { id: "anxiety", label: "Ansiedade" },
    { id: "none", label: "Nenhuma" },
  ];

  const toggleDifficulty = (value) => {
    if (value === "none") {
      setDifficulties(["none"]);
    } else {
      setDifficulties((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev.filter((v) => v !== "none"), value]
      );
    }
  };

  const handleNext = () => {
    if (difficulties.length === 0) {
      setError(true);
      return;
    }
    setError(false);
    navigate("/screen7");
  };

  return (
    <>
      <ProgressBar percent={80} />
      <div className="screen">
        <div className="card">
          <div className="title-section">
            <h1 className="title">⛔ O que te atrapalha?</h1>
            <p className="description">
              Antecipar desafios ajuda a superá-los. Estamos aqui para apoiar, não para julgar.
            </p>
          </div>

          <div className="question-group">
            <h3 className="question">13. Você enfrenta alguma das seguintes dificuldades?</h3>
            <div className="options-group vertical">
              {options.map((opt) => (
                <label
                  key={opt.id}
                  className={`checkbox-option ${difficulties.includes(opt.id) ? "selected" : ""} ${
                    error && difficulties.length === 0 ? "error-border" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    id={opt.id}
                    value={opt.id}
                    checked={difficulties.includes(opt.id)}
                    onChange={() => toggleDifficulty(opt.id)}
                    className="hidden"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          <div className="question-group">
            <h3 className="question">14. O que mais afeta sua concentração?</h3>
            <textarea
              className="textarea"
              rows="3"
              placeholder="Descreva o que te distrai ou dificulta seu foco..."
              value={distractionText}
              onChange={(e) => setDistractionText(e.target.value)}
            />
          </div>

          <div className="question-group">
            <h3 className="question">15. Numa escala de 1 a 5, o quão bem você controla seus hábitos?</h3>
            <div className="slider-labels">
              <span>1 - Pouco</span>
              <span>5 - Muito bem</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={habitControl}
              onChange={(e) => setHabitControl(Number(e.target.value))}
              className="range-slider"
            />
            <div className="slider-numbers">
              {[1, 2, 3, 4, 5].map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
          </div>

          <div className="extra-note">
            🔍 Responder com mais detalhes
          </div>

          <div className="info-note">
            📚 Baseado em psicologia comportamental{" "}
            <a href="#" className="underline">❓ Saiba mais</a>
          </div>

          <button onClick={handleNext} className="primary-btn">
            ➡️ Próxima Etapa
          </button>
        </div>
      </div>
    </>
  );
}

export default Screen6;

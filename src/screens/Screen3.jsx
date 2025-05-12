import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import "./Screen3.css";

function Screen3() {
  const [groupRole, setGroupRole] = useState("");
  const [pressureReaction, setPressureReaction] = useState("");
  const [motivators, setMotivators] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNext = () => {
    const newErrors = {
      groupRole: !groupRole,
      pressureReaction: !pressureReaction,
      motivators: !motivators.trim(),
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some((e) => e)) {
      navigate("/screen4");
    }
  };

  return (
    <>
      <ProgressBar percent={20} />
      <div className="screen">
        <div className="card">
          <div className="title-section">
            <h1 className="title">🧠 Como você é quando está aprendendo?</h1>
            <p className="description">
              Sua forma de pensar e agir tem grande impacto nos resultados.
              Vamos usar isso a seu favor.
            </p>
          </div>

          <div className="question-group">
            <h3 className="question">4. Em um grupo, eu geralmente:</h3>
            <div className="options-group">
              {[
                { id: "group-1", value: "leader", label: "Assumo a liderança naturalmente" },
                { id: "group-2", value: "contributor", label: "Contribuo com ideias" },
                { id: "group-3", value: "observer", label: "Observo antes de falar" },
                { id: "group-4", value: "executor", label: "Foco na execução" },
              ].map((option) => (
                <label
                  key={option.id}
                  htmlFor={option.id}
                  className={`radio-option ${groupRole === option.value ? "selected" : ""} ${
                    errors.groupRole ? "error-border" : ""
                  }`}
                >
                  <input
                    type="radio"
                    id={option.id}
                    name="group-role"
                    value={option.value}
                    checked={groupRole === option.value}
                    onChange={(e) => setGroupRole(e.target.value)}
                    className="hidden"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

   
          <div className="question-group">
            <h3 className="question">5. Sob pressão, eu:</h3>
            <div className="options-group">
              {[
                { id: "pressure-1", value: "productive", label: "Fico mais produtivo" },
                { id: "pressure-2", value: "distracted", label: "Fico distraído" },
                { id: "pressure-3", value: "organized", label: "Fico mais organizado" },
                { id: "pressure-4", value: "avoid", label: "Evito a tarefa" },
              ].map((option) => (
                <label
                  key={option.id}
                  htmlFor={option.id}
                  className={`radio-option ${pressureReaction === option.value ? "selected" : ""} ${
                    errors.pressureReaction ? "error-border" : ""
                  }`}
                >
                  <input
                    type="radio"
                    id={option.id}
                    name="pressure-reaction"
                    value={option.value}
                    checked={pressureReaction === option.value}
                    onChange={(e) => setPressureReaction(e.target.value)}
                    className="hidden"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

 
          <div className="question-group">
            <h3 className="question">6. Meus principais motivadores são:</h3>
            <textarea
              className={`textarea ${errors.motivators ? "error-border" : ""}`}
              rows="3"
              placeholder="Descreva o que te motiva a aprender..."
              value={motivators}
              onChange={(e) => setMotivators(e.target.value)}
            />
          </div>

          <div className="info-note">
            <p>
              📚 Inspirado em MBTI, Big Five e Enneagram{" "}
              <a href="#" className="underline">❓ Saiba mais</a>
            </p>
          </div>

          <button onClick={handleNext} className="primary-btn">
            ➡️ Próxima Etapa
          </button>
        </div>
      </div>
    </>
  );
}

export default Screen3;

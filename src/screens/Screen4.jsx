import { useState, useEffect } from "react";
import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import "./Screen4.css";

function Screen4() {
  const [studyHours, setStudyHours] = useState("");
  const [energyTime, setEnergyTime] = useState("");
  const [dailyActivities, setDailyActivities] = useState([]);
  const [otherActivity, setOtherActivity] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNext = () => {
    const newErrors = {
      studyHours: !studyHours,
      energyTime: !energyTime,
      dailyActivities: dailyActivities.length === 0,
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      navigate("/screen5");
    }
  };

  const handleActivityChange = (e) => {
    const { value, checked } = e.target;
    setDailyActivities((prev) =>
      checked ? [...prev, value] : prev.filter((activity) => activity !== value)
    );
  };

  return (
    <>
      <ProgressBar percent={40} />
      <div className="screen">
        <div className="card">
          <div className="title-section">
            <h1 className="title">⏳ Seu ritmo diário importa</h1>
            <p className="description">
              Um bom plano se encaixa na sua vida real. Vamos entender como seu
              tempo flui.
            </p>
          </div>

          <div className="form-group">
            <div className="question-group">
              <h3 className="question">
                7. Quantas horas por dia você pode estudar com foco
                realisticamente?
              </h3>
              <div className="options-group">
                {["<1", "1-2", "2-4", ">4"].map((option, index) => (
                  <div
                    key={index}
                    className={`radio-option ${
                      errors.studyHours ? "error-border" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      id={`hours-${index}`}
                      name="study-hours"
                      className="hidden"
                      value={option}
                      onChange={(e) => setStudyHours(e.target.value)}
                      checked={studyHours === option}
                    />
                    <label htmlFor={`hours-${index}`} className="radio-label">
                      {option === "<1" && "Menos de 1 hora"}
                      {option === "1-2" && "1–2 horas"}
                      {option === "2-4" && "2–4 horas"}
                      {option === ">4" && "Mais de 4 horas"}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="question-group">
              <h3 className="question">
                8. Quando você tem mais energia para estudar?
              </h3>
              <div className="options-group">
                {["morning", "afternoon", "evening", "varies"].map(
                  (option, index) => (
                    <div
                      key={index}
                      className={`radio-option ${
                        errors.energyTime ? "error-border" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        id={`energy-${index}`}
                        name="energy-time"
                        className="hidden"
                        value={option}
                        onChange={(e) => setEnergyTime(e.target.value)}
                        checked={energyTime === option}
                      />
                      <label
                        htmlFor={`energy-${index}`}
                        className="radio-label"
                      >
                        {option === "morning" && "Manhã"}
                        {option === "afternoon" && "Tarde"}
                        {option === "evening" && "Noite"}
                        {option === "varies" && "Varia"}
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="question-group">
              <h3 className="question">
                9. Quais atividades fixas fazem parte da sua rotina diária?
              </h3>
              <div
                className={`options-group ${
                  errors.dailyActivities ? "error-border" : ""
                }`}
              >
                {["work", "chores", "family", "leisure"].map(
                  (option, index) => (
                    <label
                      key={index}
                      htmlFor={`activity-${index}`}
                      className={`checkbox-button ${
                        dailyActivities.includes(option) ? "selected" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        id={`activity-${index}`}
                        name="daily-activities"
                        value={option}
                        onChange={handleActivityChange}
                        checked={dailyActivities.includes(option)}
                      />
                      {option === "work" && "Trabalho / Escola"}
                      {option === "chores" && "Tarefas domésticas"}
                      {option === "family" && "Família / Filhos"}
                      {option === "leisure" && "Lazer / Redes sociais"}
                    </label>
                  )
                )}
                <div className="additional-activity">
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Outras atividades..."
                    value={otherActivity}
                    onChange={(e) => setOtherActivity(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="more-detail">
              <span>🔍 Responder com mais detalhes</span>
            </div>

            <div className="info-note">
              <p>
                📚 Baseado em gerenciamento de tempo e hábitos atômicos{" "}
                <a href="#" className="underline">
                  ❓ Saiba mais
                </a>
              </p>
            </div>

            <button onClick={handleNext} className="primary-btn">
              ➡️ Próxima Etapa
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen4;

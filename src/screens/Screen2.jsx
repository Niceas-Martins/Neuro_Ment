import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import "./Screen2.css";

function Screen2() {
  const navigate = useNavigate();
  const [learningPref, setLearningPref] = useState("");
  const [classHelp, setClassHelp] = useState("");
  const [studyMethod, setStudyMethod] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const newErrors = {
      learningPref: !learningPref,
      classHelp: !classHelp,
      studyMethod: !studyMethod,
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((e) => e);
    if (!hasErrors) {
      navigate("/screen3"); 
    }
  };

  return (
    <>
      <ProgressBar percent={0} />
      <div className="screen">
        <div className="card">
          <h1 className="title">🎨 Como você aprende melhor?</h1>
          <p className="description">
            Cada pessoa aprende de forma diferente. Descobrir seu estilo é o primeiro passo para o progresso.
          </p>

          <div className="form-group">
            <h3 className="question">1. Ao aprender algo novo, eu prefiro:</h3>
            <div className="options-group">
              {["Ler textos ou livros", "Assistir vídeos ou imagens", "Ouvir explicações", "Fazer atividades práticas"].map((option, index) => (
                <div
                  key={index}
                  className={`radio-option ${errors.learningPref ? "error-border" : ""}`}
                >
                  <input
                    type="radio"
                    id={`learn-${index + 1}`}
                    name="learning-pref"
                    value={option}
                    onChange={(e) => setLearningPref(e.target.value)}
                    checked={learningPref === option}
                    className="hidden"
                  />
                  <label htmlFor={`learn-${index + 1}`} className="radio-label">{option}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <h3 className="question">2. Em uma aula, o que mais ajuda você a entender o conteúdo?</h3>
            <div className="options-group">
              {["Slides bem projetados", "Explicações orais", "Exercícios práticos", "Diagramas e gráficos"].map((option, index) => (
                <div
                  key={index}
                  className={`radio-option ${errors.classHelp ? "error-border" : ""}`}
                >
                  <input
                    type="radio"
                    id={`class-${index + 1}`}
                    name="class-help"
                    value={option}
                    onChange={(e) => setClassHelp(e.target.value)}
                    checked={classHelp === option}
                    className="hidden"
                  />
                  <label htmlFor={`class-${index + 1}`} className="radio-label">{option}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <h3 className="question">3. Ao estudar sozinho, eu geralmente:</h3>
            <div className="options-group">
              {["Escrevo resumos", "Gravo ou ouço áudio", "Crio mapas mentais", "Resolvo exercícios"].map((option, index) => (
                <div
                  key={index}
                  className={`radio-option ${errors.studyMethod ? "error-border" : ""}`}
                >
                  <input
                    type="radio"
                    id={`study-${index + 1}`}
                    name="study-method"
                    value={option}
                    onChange={(e) => setStudyMethod(e.target.value)}
                    checked={studyMethod === option}
                    className="hidden"
                  />
                  <label htmlFor={`study-${index + 1}`} className="radio-label">{option}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="more-detail">
            🔍 Responder com mais detalhes (expande perguntas futuras)
          </div>

          <div className="info-note">
            📚 Baseado no modelo VARK <a href="#" className="underline">❓ Saiba mais</a>
          </div>

          <button
            onClick={handleSubmit}
            className="primary-btn"
          >
            ➡️ Próxima Etapa
          </button>
        </div>
      </div>
    </>
  );
}

export default Screen2;

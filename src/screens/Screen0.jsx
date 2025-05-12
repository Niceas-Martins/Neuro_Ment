import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Screen0.css";

function Screen0({ onNext, setUserName }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {                   
      setError("⚠️ Preenchar os campos!");
      return;
    }

    setError("");
    setUserName(name.trim());
    navigate('/screen1'); 
  };

  return (
    <div className="screen-container">
      <div className="form-box">
        <h1 className="title">🧠 Crie sua conta no NeuroMent!</h1>
        <p className="subtitle">
          Sua jornada de aprendizado personalizado começa agora!
        </p>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="field">
            <label htmlFor="name">
              🙋 Nome completo <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
              className="input"
            />
          </div>

          <div className="field">
            <label htmlFor="email">📧 Email <span className="required">*</span></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              className="input"
            />
          </div>

          <div className="field">
            <label htmlFor="password">🔒 Senha <span className="required">*</span></label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="input"
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="button" onClick={handleRegister} className="submit-btn">
            Criar Conta
          </button>
        </form>

        <div className="support">
          <a href="#">🛠️ Precisa de ajuda? Suporte</a>
        </div>
      </div>
    </div>
  );
}

export default Screen0;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Screen8.css";

function Screen8({ userName = "Usuário" }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFinish = () => {
    navigate("/dashboard");
  };

  return (
    <div id="screen-8" className="slide flex-grow flex flex-col justify-center">
      <div className="mb-8 text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-4xl font-bold mb-4">
          Tudo pronto, <span className="text-[#9AEBA3]">{userName}</span>!
        </h1>
        <p className="text-xl mb-6">
          Você completou o passo mais importante: entender melhor a si mesmo.
        </p>
        <p className="text-lg text-[#9AEBA3]">
          Com suas respostas, podemos agora criar uma jornada de aprendizado verdadeiramente personalizada.
        </p>
      </div>

      <div className="bg-[#13678A] bg-opacity-20 rounded-xl p-6 mb-10 text-center">
        <p className="text-lg">
          Cada detalhe que você compartilhou ajuda o NeuroMent a apoiá-lo com inteligência, gentileza e clareza.
        </p>
      </div>

      <button
        onClick={handleFinish}
        className="primary-btn w-full py-3 rounded-lg font-semibold text-xl"
      >
        🏁 Ir para Minha Jornada
      </button>

      <div className="mt-8 text-sm text-gray-500 text-center">
        <p>Você pode revisar ou expandir suas respostas a qualquer momento no seu perfil.</p>
      </div>
    </div>
  );
}

export default Screen8;

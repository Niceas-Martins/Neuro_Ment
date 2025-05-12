import React from 'react';
import { useNavigate } from "react-router-dom";
import './Dashboard.css';

function Dashboard({ userName = 'Usuário', userAge = 18 }) {
  const navigate = useNavigate();

  const Click_back = () => {
   navigate('/screen0');
  }
  const handleCreatePlan = () => {
    console.log('Criar novo plano iniciado!');
  };

  return (
    <div className="dashboard-container" style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#DAFDBA' }}>
      
      <aside style={{ width: '220px', backgroundColor: '#13678A', color: 'white', padding: '1.5rem' }}>
        <div className="menu-section mb-6">
          <h2 className="text-xl font-bold mb-4">☰ Menu</h2>
          <ul className="space-y-3 text-sm">
            <li>👤 Meu Perfil</li>
            <li>📚 Meus Planos</li>
            <li>🔔 Notificações</li>
            <li>⚙️ Configurações</li>
            <li><button onClick={Click_back}>🚪 Sair</button></li>
          </ul>
        </div>
      </aside>

      <main style={{ flexGrow: 1, padding: '2rem' }}>
        {/* Cabeçalho */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">👋 Olá, {userName} (Idade: {userAge} anos)</h1>
          <p className="text-lg italic text-gray-700">"Você não precisa ter tudo pronto, só começar."</p>
        </div>

        {/* Grade principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Novo plano personalizado */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-2">📘 Novo plano personalizado</h2>
            <p className="mb-4">Monte um plano do zero com base nos seus objetivos.</p>
            <button onClick={handleCreatePlan} className="bg-13678A text-white px-4 py-2 rounded">
              Começar novo plano
            </button>
          </div>

          {/* Sugestões para você */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-2">🤖 Sugestões para você</h2>
            <ul className="list-disc list-inside text-sm">
              <li>Plano rápido para iniciantes visuais</li>
              <li>Revisão semanal de 20min</li>
              <li>Técnica Pomodoro aplicada ao seu ritmo</li>
            </ul>
          </div>

          {/* Minha Jornada */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-2">📈 Minha Jornada</h2>
            <p className="mb-4">Acompanhe sua evolução, hábitos criados e sessões realizadas.</p>
            <div className="bg-gray-200 text-center py-8 rounded-lg text-gray-500">📊 Gráfico de progresso (em breve)</div>
          </div>

          {/* Configurações rápidas */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-2">⚙️ Configurações rápidas</h2>
            <ul className="text-sm">
              <li>Tema: Claro</li>
              <li>Lembretes diários: Ativado</li>
              <li>Sons de foco: Desativado</li>
            </ul>
          </div>

          {/* Inspiração do dia */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-2">🌟 Inspiração do dia</h2>
            <p className="italic">"Estudar não é sobre ser perfeito, é sobre ser constante."</p>
          </div>

          {/* NeuroDicas */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-2">🧩 NeuroDicas</h2>
            <ul className="list-disc list-inside text-sm">
              <li>Técnicas de memorização</li>
              <li>Estudo ativo</li>
              <li>Foco e gestão do tempo</li>
              <li>Autoconhecimento</li>
            </ul>
          </div>

          {/* Pontuação gamificada */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-2">🎮 Pontuação gamificada</h2>
            <p>Você está começando com <strong>0 pontos</strong>. Cada passo conta!</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

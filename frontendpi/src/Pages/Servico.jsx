import App from '../App.css';

function servico (){
  return(
    <>
      {/* Definição dos ícones SVG */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <symbol id="mail" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 6-10 7L2 6" />
        </symbol>
        <symbol id="lock" viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </symbol>
        <symbol id="user" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
        </symbol>
        <symbol id="id" viewBox="0 0 24 24">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <circle cx="9" cy="11" r="2" />
          <path d="M6 16c.5-1.5 5.5-1.5 6 0M15 10h4M15 14h3" />
        </symbol>
        <symbol id="pin" viewBox="0 0 24 24">
          <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </symbol>
        <symbol id="search" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </symbol>
        <symbol id="arrow" viewBox="0 0 24 24">
          <path d="M5 12h14m-7-7 7 7-7 7" />
        </symbol>
        <symbol id="wrench" viewBox="0 0 24 24">
          <path
            d="M14.7 6.3a4 4 0 0 0 5 5L22 9.6a6.5 6.5 0 0 1-9 7.9L6 24l-3-3 6.5-7a6.5 6.5 0 0 1 7.9-9Z"
            transform="scale(.9) translate(1 -2)"
          />
        </symbol>
        <symbol id="bolt" viewBox="0 0 24 24">
          <path d="M13 2 3 14h8l-1 8 10-12h-8z" />
        </symbol>
        <symbol id="sofa" viewBox="0 0 24 24">
          <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
          <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
          <path d="M4 18v2M20 18v2" />
        </symbol>
        <symbol id="spark" viewBox="0 0 24 24">
          <path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />
        </symbol>
        <symbol id="star" viewBox="0 0 24 24">
          <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9" />
        </symbol>
        <symbol id="home" viewBox="0 0 24 24">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
        </symbol>
        <symbol id="msg" viewBox="0 0 24 24">
          <path d="M21 12a8.5 8.5 0 0 1-12.5 7.5L3 21l1.5-5.5A8.5 8.5 0 1 1 21 12Z" />
        </symbol>
        <symbol id="out" viewBox="0 0 24 24">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
        </symbol>
      </svg>

      <div className="phone">
        {/* Renderização condicional da tela de Login */}
        {telaAtiva === 'login' && (
          <div className="screen login">
            <div className="head">
              <div
                className="row"
                style={{ justifyContent: 'flex-start', marginTop: '8px' }}
              >
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Logo do App"
                  className="logo"
                />
              </div>
            </div>

            {/* Exemplo de botões de navegação para testar as outras telas */}
            <div style={{ padding: '20px' }}>
              <button onClick={() => setTelaAtiva('cad')}>
                Ir para Cadastro
              </button>
              <button onClick={() => setTelaAtiva('home')}>
                Ir para Home
              </button>
            </div>
          </div>
        )}

        {/* Tela de Cadastro (Exemplo) */}
        {telaAtiva === 'cad' && (
          <div className="screen cad">
            <h2>Tela de Cadastro</h2>
            <button onClick={() => setTelaAtiva('login')}>Voltar</button>
          </div>
        )}

        {/* Tela Home (Exemplo) */}
        {telaAtiva === 'home' && (
          <div className="screen home">
            <h2>Tela Inicial</h2>
            <button onClick={() => setTelaAtiva('login')}>Sair</button>
          </div>
        )}
      </div>
    </>
  );
}

export default servico
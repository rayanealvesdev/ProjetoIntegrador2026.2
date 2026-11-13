import App from 'App.css'

function servico (){
    return(
      <>
  <svg width="0" height="0" style="position:absolute">
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
      <path d="M14.7 6.3a4 4 0 0 0 5 5L22 9.6a6.5 6.5 0 0 1-9 7.9L6 24l-3-3 6.5-7a6.5 6.5 0 0 1 7.9-9Z"
        transform="scale(.9) translate(1 -2)" />
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
      <path
        d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />
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

  <div class="phone">
    <input type="radio" name="s" id="s-login" checked/>
    <input type="radio" name="s" id="s-cad"/>
    <input type="radio" name="s" id="s-home"/>
  </div>   
    
    <div class="screen login">
      <div class="head">
        <div class="row" style="justify-content:flex-start;margin-top:8px">
          <img src="logo/logo app.jpeg" class="logo"/>
            src="data:image/jpeg;base64,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"
            alt="Logo Serviços Conecta"
          <div class="welcome"><small>Bem-vindo ao</small>
            <h1>Serviços Conecta</h1>
          </div>
        </div>
      </div>
      <div class="card">
        <label class="f"><span>E-mail</span>
          <div class="box"><svg class="i">
              <use href="#mail" />
            </svg> <input type="email" placeholder="voce@email.com"/></div>
        </label>
        <label class="f"><span>Senha</span>
          <div class="box"><svg class="i">
              <use href="#lock" />
            </svg><input type="password" placeholder="Sua senha"/></div>
        </label>
        <p style="text-align:right;margin:-4px 0 18px"><span class="link">Esqueci minha senha</span></p>
        <label for="s-home" class="btn">Entrar <svg class="i">
            <use href="#arrow" />
          </svg></label>
        <div class="or">ou</div>
        <label for="s-home" class="btn google">
          <svg viewBox="0 0 48 48">
            <path fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
            <path fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
            <path fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
            <path fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
          </svg>
          Continuar com o Gmail
        </label>
        <p class="center">Ainda não tem conta? <label for="s-cad" class="link">Cadastre-se</label></p>
      </div>
    </div>

    <!-- ============ CADASTRO ============ -->
    <div class="screen cad">
      <div class="head">
        <div class="row">
          <div class="welcome">
            <label for="s-login" class="back">‹ Voltar</label>
            <h1>Criar conta</h1>
            <small>Cadastro de clientes</small>
          </div>
          <img src="logo/logo app.jpeg"  class ="logo"
            src="data:image/jpeg;base64,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"
            alt="Logo Serviços Conecta" style="align-self:flex-start">
        </div>
      </div>
      <div class="card">
        <label class="f"><span>Nome completo</span>
          <div class="box"><svg class="i">
              <use href="#user" />
            </svg><input type="text" placeholder="Seu nome completo"></div>
        </label>
        <label class="f"><span>CPF</span>
          <div class="box"><svg class="i">
              <use href="#id" />
            </svg><input type="text" inputmode="numeric" maxlength="14" placeholder="000.000.000-00"></div>
        </label>
        <label class="f"><span>E-mail</span>
          <div class="box"><svg class="i">
              <use href="#mail" />
            </svg><input type="email" placeholder="voce@email.com"></div>
        </label>
        <label class="f"><span>Senha</span>
          <div class="box"><svg class="i">
              <use href="#lock" />
            </svg><input type="password" minlength="8" placeholder="Mínimo de 8 caracteres"></div>
        </label>
        <label class="f"><span>CEP</span>
          <div class="box"><svg class="i">
              <use href="#pin" />
            </svg><input type="text" inputmode="numeric" maxlength="9" placeholder="00000-000"></div>
        </label>
        <p class="note">Usamos o CEP para mostrar os prestadores mais próximos de você. Seus dados são protegidos
          conforme a LGPD.</p>
        <label for="s-home" class="btn">Criar conta <svg class="i">
            <use href="#arrow" />
          </svg></label>
        <p class="center">Já tem uma conta? <label for="s-login" class="link">Entrar</label></p>
      </div>
    </div>

    <!-- ============ INÍCIO ============ -->
    <div class="screen home">
      <input type="radio" name="f" id="f-all" checked>
      <input type="radio" name="f" id="f-enc">
      <input type="radio" name="f" id="f-est">
      <input type="radio" name="f" id="f-ele">
      <input type="radio" name="f" id="f-fax">

      <div class="head" style="padding-bottom:64px">
        <div class="row">
          <div class="hello">
            <img class="logo"
              src="data:image/jpeg;base64,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"
              alt="Logo">
            <div>
              <p>Olá, cliente</p><strong>O que você precisa hoje?</strong>
            </div>
          </div>
          <label for="s-login" class="out" title="Sair"><svg class="i">
              <use href="#out" />
            </svg></label>
        </div>
      </div>

      <div class="finder">
        <div class="box"><svg class="i">
            <use href="#pin" />
          </svg><input type="text" inputmode="numeric" maxlength="9" placeholder="Digite seu CEP"><span
            class="go">Localizar</span></div>
        <div class="box" style="margin-bottom:8px"><svg class="i">
            <use href="#search" />
          </svg><input type="text" placeholder="Buscar profissional ou serviço"></div>
        <p><svg class="i" style="width:13px;height:13px">
            <use href="#pin" />
          </svg> Prestadores ordenados do mais próximo ao mais distante do seu CEP</p>
      </div>

      <div class="sec">
        <h2>Serviços</h2><label for="f-all" class="link" style="font-size:12.5px">Ver todos</label>
      </div>
      <div class="tiles">
        <label for="f-enc" class="tile"><b><svg class="i">
              <use href="#wrench" />
            </svg></b>Encanador</label>
        <label for="f-est" class="tile"><b><svg class="i">
              <use href="#sofa" />
            </svg></b>Limpeza de estofado</label>
        <label for="f-ele" class="tile"><b><svg class="i">
              <use href="#bolt" />
            </svg></b>Eletricista</label>
        <label for="f-fax" class="tile"><b><svg class="i">
              <use href="#spark" />
            </svg></b>Faxineira</label>
      </div>

      <div class="sec">
        <h2>Perto de você</h2>
      </div>
      <div class="list">
        <div class="p enc">
          <div class="av">RC</div>
          <div><strong>Roberto Costa</strong>
            <p>Encanador</p>
          </div>
          <div class="meta"><b><svg class="i">
                <use href="#star" />
              </svg>4,9</b>0,8 km</div>
        </div>
        <div class="p fax">
          <div class="av">LF</div>
          <div><strong>Larissa Ferreira</strong>
            <p>Faxineira</p>
          </div>
          <div class="meta"><b><svg class="i">
                <use href="#star" />
              </svg>5,0</b>1,2 km</div>
        </div>
        <div class="p ele">
          <div class="av">MA</div>
          <div><strong>Marcos Andrade</strong>
            <p>Eletricista</p>
          </div>
          <div class="meta"><b><svg class="i">
                <use href="#star" />
              </svg>4,8</b>1,6 km</div>
        </div>
        <div class="p est">
          <div class="av">SN</div>
          <div><strong>Sofá Novo Estofados</strong>
            <p>Limpeza de estofado</p>
          </div>
          <div class="meta"><b><svg class="i">
                <use href="#star" />
              </svg>4,7</b>2,1 km</div>
        </div>
        <div class="p enc">
          <div class="av">PM</div>
          <div><strong>Paulo Mendes</strong>
            <p>Encanador</p>
          </div>
          <div class="meta"><b><svg class="i">
                <use href="#star" />
              </svg>4,6</b>2,9 km</div>
        </div>
        <div class="p fax">
          <div class="av">JR</div>
          <div><strong>Juliana Rocha</strong>
            <p>Faxineira</p>
          </div>
          <div class="meta"><b><svg class="i">
                <use href="#star" />
              </svg>4,9</b>3,4 km</div>
        </div>
        <div class="p ele">
          <div class="av">CN</div>
          <div><strong>Carlos Nunes</strong>
            <p>Eletricista</p>
          </div>
          <div class="meta"><b><svg class="i">
                <use href="#star" />
              </svg>4,7</b>3,8 km</div>
        </div>
        <div class="p est">
          <div class="av">LE</div>
          <div><strong>Limpa Estofados Recife</strong>
            <p>Limpeza de estofado</p>
          </div>
          <div class="meta"><b><svg class="i">
                <use href="#star" />
              </svg>4,5</b>4,2 km</div>
        </div>
      </div>

      <div class="nav">
        <span class="on"><svg class="i">
            <use href="#home" />
          </svg>Início</span>
        <span><svg class="i">
            <use href="#search" />
          </svg>Buscar</span>
        <span><svg class="i">
            <use href="#msg" />
          </svg>Mensagens</span>
        <span><svg class="i">
            <use href="#user" />
          </svg>Perfil</span>
      </div>
    </div>

  </div>
  </>
)

}

export default = servico;
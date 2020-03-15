import React from 'react'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/4026937?s=460&u=d33a3cec887a9caba22c8b4865c2388fbb704c45&v=4" alt="Emerson Santana"/>
              <div className="user-info">
                <strong>Emerson Santana</strong>
                <span>ReactJs, ReactNative, NodeJS</span>
              </div>
            </header>
            <p>
              FullStack Developer apaixonado pela família e profissão.
            </p>
            <a href="https://github.com/emersonfidelon">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/4026937?s=460&u=d33a3cec887a9caba22c8b4865c2388fbb704c45&v=4" alt="Emerson Santana"/>
              <div className="user-info">
                <strong>Emerson Santana</strong>
                <span>ReactJs, ReactNative, NodeJS</span>
              </div>
            </header>
            <p>
              FullStack Developer apaixonado pela família e profissão.
            </p>
            <a href="https://github.com/emersonfidelon">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/4026937?s=460&u=d33a3cec887a9caba22c8b4865c2388fbb704c45&v=4" alt="Emerson Santana"/>
              <div className="user-info">
                <strong>Emerson Santana</strong>
                <span>ReactJs, ReactNative, NodeJS</span>
              </div>
            </header>
            <p>
              FullStack Developer apaixonado pela família e profissão.
            </p>
            <a href="https://github.com/emersonfidelon">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/4026937?s=460&u=d33a3cec887a9caba22c8b4865c2388fbb704c45&v=4" alt="Emerson Santana"/>
              <div className="user-info">
                <strong>Emerson Santana</strong>
                <span>ReactJs, ReactNative, NodeJS</span>
              </div>
            </header>
            <p>
              FullStack Developer apaixonado pela família e profissão.
            </p>
            <a href="https://github.com/emersonfidelon">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/4026937?s=460&u=d33a3cec887a9caba22c8b4865c2388fbb704c45&v=4" alt="Emerson Santana"/>
              <div className="user-info">
                <strong>Emerson Santana</strong>
                <span>ReactJs, ReactNative, NodeJS</span>
              </div>
            </header>
            <p>
              FullStack Developer apaixonado pela família e profissão.
            </p>
            <a href="https://github.com/emersonfidelon">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;

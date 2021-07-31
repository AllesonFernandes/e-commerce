import './main.css';


function App() {
  return (
    <div>
      <header className='header'>
        <div className='toolbar'>
          <div className=''>
            <a href='/'>Café mídia</a>
          </div>
          <div>
            <button>Cadastro</button>
            <span>img1</span>
            <span>img2</span>
          </div>
        </div>
      </header>
      <main className='main'>
        <div className='navbar'>navbar</div>
        <div className='feed'>feed</div>
      </main>
    </div>
  );
}

export default App;

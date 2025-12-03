import './App.css'

import perrobonito from './assets/perrobonito.jpg'

function App() {
  return (
    <div>
      <h1>¡Hola, Perrito!</h1>
       <img src={perrobonito} alt="imagen" className="avatar" />
    </div>
  )
}

export default App

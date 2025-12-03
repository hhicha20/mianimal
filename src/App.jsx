import './App.css'

import perrobonito from './public/perrobonito.jpg'

function App() {
  return (
    <div>
      <h1>¡Hola, Perrito!</h1>
      <img className='avatar' src={perrobonito} alt="imagen" />
    </div>
  )
}

export default App

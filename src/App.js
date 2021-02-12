import './App.css'
import Row from './components/Row'
import request from './request'

function App() {
  return (
    <div className='App'>
      <Row title='Netflix Originals' fetchURL={request.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchURL={request.fetchNetflixOriginals} />
    </div>
  )
}

export default App

//af33e7e6a89ca2db62170ccc337eed2d

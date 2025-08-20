import './App.scss'
import Footer from './components/Footer/Footer'
import GameMenu from './components/GameMenu/GameMenu'
import Header from './components/Header/Header'
import backgroundImage from './assets/background.jpg'

function App() {
  // Set CSS custom property for background image
  document.documentElement.style.setProperty('--background-image', `url(${backgroundImage})`);

  return (
    <>
      <Header />
      <GameMenu />
      <Footer />
    </>
  )
}

export default App

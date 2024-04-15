import Input from 'components/Input'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input />
        <p className="bg-red-400 pt-4 text-3xl font-bold text-red-500 hover:text-slate-400">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

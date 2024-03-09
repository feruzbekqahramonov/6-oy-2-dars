import './App.css'
import Card from './components/Card'
import data from './data/data.json'
// console.log(data);
function App() {

  return (
    <>{
     data.map((v, i) => {
      return (
        <Card data={v} key={i}/>
      )
     })
    }</>
  )
}

export default App

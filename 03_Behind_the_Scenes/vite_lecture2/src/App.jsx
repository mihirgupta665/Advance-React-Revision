
import Welcome from "./lecture2"

function App() {
  return (
    <>
      <Welcome />
      <h1>Welcome to Lecture 2 of react</h1>
      <p>How was my first page?</p>
      {/* // h2 need to to be removed as only one line could be returned could be imported */}
    </> // se every thing could be wraped in one div or <>(fragment) and then returned together as one entity
  )
}

export default App

// create your App component here

import {useEffect, useState} from "react"

function App() {

    const [fetching, setFetching] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => setFetching(data))
      }, []);

      if (!fetching) {
        return( <p>Loading...</p>)
      }

    return (
        <>
            <h1>Unsolicited Dog Pics</h1>
            <img src={fetching.message} alt="A Random Dog" />
        </>
    )
}

export default App;
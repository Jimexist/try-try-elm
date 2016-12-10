import React from 'react'
import ReactDOM from 'react-dom'
import Elm from 'react-elm-components'
import { Counter } from '@madadata/try-elm'

class App extends React.Component {

  render () {
    return (
      <div>
        <div>this is rendered by react</div>
        <Elm src={Counter} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))

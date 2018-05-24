import React from 'react'
import { render } from 'react-dom'
import * as style from './index.scss'

console.log(style)

const App = () => (
    <div className={style.textColor}>
        React App!
    </div>
)

render(<App/>, document.getElementById('app'))
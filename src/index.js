import React from 'react'
import { render } from 'react-dom'
import * as style from './index.scss'

const App = () => (
    <div className={style.textColor}>
        Une react App en {process.env.NODE_ENV}!
    </div>
)

render(<App/>, document.getElementById('app'))
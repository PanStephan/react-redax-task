import * as React from 'react'
import {MainPage, CartPage} from '../pages'
import AppHeader from '../app-header'
import * as Background from './food-bg.jpg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MenuList from '../menu-list'

const App = () => {
	return (
		<Router> 
			<div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
				<AppHeader/>
				<Switch>
					<Route path='/' exact component={MainPage}/>
					<Route path='/cart' component={CartPage}/>
					<Route path='/:id' exact render = {
						({match}) => { 
							return <MenuList category={match.params.id}/>
						}	
					}/>
				</Switch>
			</div>
		</Router>
	)
}

export default App;
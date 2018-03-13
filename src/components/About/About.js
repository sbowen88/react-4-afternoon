import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import History from '../History/History'
import Contact from '../Contact/Contact'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
        <Link className ='subnav_links'to='/about'><h3>About</h3></Link>
        <Link className ='subnav_links'to='/about/contact'><h3>Contact</h3></Link>
        <Link className ='subnav_links'to='/about/history'><h3>History</h3></Link>
       
        </div>
        <div className='box'>
            <Switch>
              <Route path='/about/history' component={History}/>
              <Route path='/about/contact' component={Contact}/>
              <Route path='/about' render={()=>(
                <div>
              <h1>About the Universty</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>)}
              />

              <Route/>
            </Switch>
        </div>
      </div>
    )
  }
}
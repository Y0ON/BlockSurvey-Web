import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Main, Participate, MyPage} from './container/index'
import BlockSurvey from './core/BlockSurvey'

class App  extends Component {
  render() {
    return (
      <div id="App">
        <BlockSurvey/>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Main} exact/>
            <Route path='/survey/participate' component={Participate} exact/>
            <Route path = '/mypage' component = { MyPage } exact/>
          </Switch>
        </BrowserRouter>
      </div>
     );
  }
}

export default App;
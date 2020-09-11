import React from 'react'
import Tables from './components/tables'
import Trees from './components/trees'
import { Layout } from 'antd'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import Header from './components/Header'
const useStyles = createUseStyles({
  content: {
    padding: '0 3rem 3rem 3rem',
  },
})

const { Content } = Layout

function App() {
  const classes = useStyles()

  return (
    <Router>
      <Layout className='layout'>
        <Header />
        <Content className={classes.content}>
          <Switch>
            <Route path='/table'>
              <Tables />
            </Route>
          </Switch>
          <Switch>
            <Route path='/tree'>
              <Trees />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  )
}

export default App

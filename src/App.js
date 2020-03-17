import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Grid,
  Button
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Flights from './pages/Flights'
import AddFlight from './pages/AddFlight'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    textTransform: 'uppercase'
  }
}))

export default function App() {
  const classes = useStyles()

  return ( <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Flights Data
            </Typography>
            <Button color="inherit" href="/">
                Search
            </Button>
            <Button color="inherit" href="/newFlight">
                Add
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={3}>
            <Grid item xs={1} md={3}>
            </Grid>
            <Grid item xs={10} md={6}>
              <Switch>  
                <Route exact path= "/" component={Flights}/>
                <Route exact path='/newFlight' component={AddFlight} />
              </Switch>
            </Grid>
            <Grid item xs={1} md={3}>
            </Grid>
          </Grid>

      </div>
    </Router>
  );
}

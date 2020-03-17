import React from 'react'
import {Card,
    Grid,
    FormControl,
    Select,
    MenuItem,
    InputLabel
} from '@material-ui/core'
import { useDispatch } from "react-redux"
import { makeStyles } from '@material-ui/core/styles'
import {updateFilter, updatePerPage} from '../actions/'

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function FilterPanel(props){
  const dispatch = useDispatch()
  const {departure, arrival, type} = props.filtersValues
  const {departureOptions, arrivalOptions, perPage} = props
  const classes = useStyles()

  return (
    <Card style={{marginTop: 24}} className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={5}>
          <FormControl fullWidth>
              <InputLabel>Departure</InputLabel>
              <Select
                  value={departure || -1}
                  onChange={(e) => dispatch(updateFilter('departure', e.target.value))}
              > 
              <MenuItem value={-1}>All</MenuItem>
              {departureOptions.map((item, i)=>{
                return <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
              })}
              </Select>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
              <InputLabel>Arrival</InputLabel>
              <Select
                  value={arrival || -1}
                  onChange={(e) => dispatch(updateFilter('arrival', e.target.value))}
              > 
              <MenuItem value={-1}>All</MenuItem>
              {arrivalOptions.map((item, i)=>{
                return <MenuItem key={i} value={item.value}>{item.label}</MenuItem>
              })}
              </Select>
          </FormControl>
        </Grid>
        <Grid item md={5}>
          <FormControl fullWidth>
              <InputLabel>Items Per Page</InputLabel>
              <Select
                  value={perPage || -1}
                  onChange={(e) => dispatch(updatePerPage(e.target.value))}
              >
                  <MenuItem value={-1}>All</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>                  
              </Select>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                  value={type || -1}
                  onChange={(e) => dispatch(updateFilter('type', e.target.value))}
              >
                  <MenuItem value={-1}>All</MenuItem>
                  <MenuItem value='Economy'>Economy</MenuItem>
                  <MenuItem value='Business'>Business</MenuItem>                  
              </Select>
          </FormControl>
        </Grid>
      </Grid>

    </Card>
  )
}

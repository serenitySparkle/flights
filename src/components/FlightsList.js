import React from 'react'
import {Pagination} from '@material-ui/lab'
import {Typography} from '@material-ui/core'
import FlightListItem from './FlightListItem'

import { useDispatch } from "react-redux"
import {setCurrentPage} from '../actions/'


export default function FlightsList(props) {
  const {flights, pageCount, current, perPage} = props;
  const dispatch = useDispatch();
  let flightsFrom = (perPage !== -1 ? (current-1)*perPage : 0)
  let flightsTo = (perPage !== -1 ? flightsFrom + perPage : flights.length)
  return (<>
      {flights && flights.length ? flights.slice(flightsFrom, flightsTo).map((item, i) => {
          return <FlightListItem key={i} style={{marginBottom: 48}} 
          dateFrom={item.departureTime} 
          dateTo={item.arrivalTime} 
          from={item.departure} 
          to={item.arrival} 
          type={item.type}/>
      }) : (<Typography>No Data...Try another filter</Typography>)}
        {
          pageCount > 1? <Pagination 
          page = {current}
          count={pageCount} 
          variant="outlined" 
          color="primary" 
          style={{marginTop: 24, marginBottom: 24}}
          onChange={
            (e, page) => { dispatch(setCurrentPage(page))
          }}
          /> : null
        }
  </>
  )
}
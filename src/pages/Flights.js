import React from 'react'
import FlightForm from '../components/FlightForm'
import FilterPanel from '../components/FilterPanel'
import FlightsList from '../components/FlightsList'
import { useSelector, useDispatch } from "react-redux"
import {Skeleton} from '@material-ui/lab'
import {Card} from '@material-ui/core'

export default function Flights() {
    const flights = useSelector(state => state); 
    const dispatch = useDispatch();
    
    const arrivalOptions = () => {
        return [
            {value: 'Singapore', label: 'Singapore'},
            {value: 'Ankara', label: 'Ankara'},
            {value: 'Istanbul', label: 'Istanbul'},
        ]
    }

    const departureOptions = () => {
        return [
            {value: 'Singapore', label: 'Singapore'},
            {value: 'Ankara', label: 'Ankara'},
            {value: 'Istanbul', label: 'Istanbul'},
        ]
    }

    return (<>
        {flights && flights.data ? (
            <>
            <FilterPanel 
                filtersValues={flights.params.filters} 
                perPage={flights.params.perPage} 
                arrivalOptions={departureOptions()} 
                departureOptions={arrivalOptions()}
            />
            <FlightsList 
                pageCount={flights.params.pageCount} 
                current = {flights.params.current}
                flights={flights.data}
                perPage = {flights.params.perPage}
            />
        </>
        ) : <>
        <Card style={{marginTop: 24}}>
            <FlightForm from="Singapore" type={-1} oneWay={true} buttonLabel="Search" onButtonClick={() => dispatch({type: "ALL_FLIGHTS_REQUEST"})}/>
        </Card>
        {flights && flights.loading ? <div style={{marginTop: 24}}>
                <Skeleton animation={false} />
                <Skeleton animation="wave" width="60%"/>
            </div> : null}
        </>
        }
        </>
    )
}
import React from 'react'
import {Card} from "@material-ui/core"
import FlightForm from '../components/FlightForm'
import FlightsList from '../components/FlightsList'
import { useSelector, useDispatch } from "react-redux"
import {addNewFlight} from '../actions'


export default function AddFlight(props) {
    const newFlights = useSelector(state => state)
    const dispatch = useDispatch()

    const addNewFlightToList = data => {
        dispatch(addNewFlight(data))
    }
    return (
        <>
        <Card style={{marginTop: 24}}>
            <FlightForm from="Singapore" to="Ankara" type="Economy" oneWay={false} buttonLabel="Add New Flight" onButtonClick={(data) => addNewFlightToList (data)}/>
        </Card>
        {newFlights.data && newFlights.data.length ? <FlightsList flights={newFlights.data} perPage={-1}/> : null }
        </>
    )
}
export const ALL_FLIGHTS_REQUEST = 'ALL_FLIGHTS_REQUEST'
export const ALL_FLIGHTS_SUCCESS = 'ALL_FLIGHTS_SUCCESS'
export const ALL_FLIGHTS_FAILURE = 'ALL_FLIGHTS_FAILURE'
export const UPDATE_FILTER = 'UPDATE_FILTER'
export const UPDATE_PER_PAGE = 'UPDATE_PER_PAGE'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const ADD_NEW_FLIGHT = 'ADD_NEW_FLIGHT'

export const sendAllFlightsRequest = data => ({
    type: ALL_FLIGHTS_REQUEST,
    token: data
})

export const updateFilter = (filterName, filterValue) => ({
    type: UPDATE_FILTER, 
    data: {
        filterValue: filterValue,
        filterName: filterName
    }
  })

export const updatePerPage = value => ({
      type: UPDATE_PER_PAGE, 
      data: value
})

export const setCurrentPage = value => ({
      type: SET_CURRENT_PAGE, 
      data: value
})

export const addNewFlight = data => ({
    type: ADD_NEW_FLIGHT, 
      data: data
})
import {
  ALL_FLIGHTS_SUCCESS, 
  ALL_FLIGHTS_FAILURE, 
  ALL_FLIGHTS_REQUEST,
  UPDATE_FILTER,
  UPDATE_PER_PAGE,
  SET_CURRENT_PAGE, 
  ADD_NEW_FLIGHT
} from '../actions'

const parseFlightData = (data) => { //bringing economy and business class flights to one format
  let parsed = []
  let dataToManipulate = data
  dataToManipulate.map((flight, j) => {
    flight && flight.data.map((item, i)=>{
      if(item.route) {
        let temp = item.route.split("-")
        item['departureTime'] = item['departure']
        item['arrivalTime'] = item['arrival']
        item['departure'] = temp[0]
        item['arrival'] = temp[1]
        item['type'] = 'Economy'
      } else {
        item['type'] = 'Business'
      }
      return parsed[parsed.length] = item
    })
  })
  return parsed
}

const filterData = (data, filters) => { //filter by type, departure and arrival
  let filteredRows = data.filter((item) => {
      const filterArray = Object.keys(filters || {})
      return filterArray.every((filterKey) => {
          if ( filters[filterKey] === -1)
              return true
          return (item[filterKey] === filters[filterKey])
      });
  });
  return filteredRows
}

const updatePageCount = (total, perPage) => {
  return (total <= perPage || perPage === -1) ? 1 : Math.ceil(total/perPage)
}

function appReducer(state, action) {
  let flightsArr = state.data || []
  flightsArr.push(action.data)
  switch (action.type) {
    case ADD_NEW_FLIGHT: 
      return {
        ...state,
        data: flightsArr
      }
    case SET_CURRENT_PAGE: 
      return {
        ...state,
        params: {
          ...state.params,
          current: action.data
        }
      }
    case UPDATE_PER_PAGE: 
      return {
        ...state,
        params: {
          ...state.params,
          perPage: action.data,
          pageCount: updatePageCount(state.data.length, action.data),
          current: 1
        }
      }
    case UPDATE_FILTER: 
      let filteredData = filterData(state.all, {
        ...state.params.filters,
        [action.data.filterName]: action.data.filterValue,
      })
      return {
        ...state,
        params: {
          ...state.params,
          filters: {
            ...state.params.filters,
            [action.data.filterName]: action.data.filterValue,
          },
          pageCount: updatePageCount(filteredData.length, state.params.perPage),
          current: 1
        },
        data: filteredData,
      }
      case ALL_FLIGHTS_REQUEST:
        return {...state,
            loading: true,
            params: state.params
          }
    case ALL_FLIGHTS_SUCCESS:
      let parsed = parseFlightData(action.data)
      let filtered = filterData(parsed, state.params.filters)
      return {
          ...state,
          loading: false,
          params: {
            ...state.params,
            pageCount: updatePageCount(filtered.length, state.params.perPage),
            current: 1
          },
          all: parsed, 
          data: filtered,
      }
    case ALL_FLIGHTS_FAILURE:
      return {...state,
          loading: false,
          data: action.data,
      }
    default:
      return state
    }
}

  export default appReducer
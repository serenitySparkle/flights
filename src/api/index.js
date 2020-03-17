const API_BASE_ADDRESS = 'https://tokigames-challenge.herokuapp.com/api/flights/'

export default class Api {  
    static fetchAllFlights(token) {
        const economy = fetch(API_BASE_ADDRESS + 'cheap', {method: 'GET'})
        const business = fetch(API_BASE_ADDRESS + 'business', {method: 'GET'})
        return Promise.all([economy, business]).then((results) => {
            let data = []
            results.map((item, i) => 
                data[i] = item.json()
            )
            return Promise.all(data).then((res)=> {
                return res
            }).catch((e) => console.log(e))
          }).catch((e) => console.log(e));
    }
}


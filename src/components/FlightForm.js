import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

import { FormControl, 
    InputLabel, 
    Select,
    MenuItem,
    Grid,
    TextField,
    Button
} from '@material-ui/core'

import moment from 'moment'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function FlightForm(props) {
    const [from, setFrom] = React.useState(props.from);
    const [to, setTo] = React.useState(props.to);
    const [dateFrom, setDateFrom] = React.useState(props.dateFrom);
    const [dateTo, setDateTo] = React.useState(props.dateTo);
    const [type, setType] = React.useState(props.type);

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);


    const classes = useStyles();
    return (<>
    <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
                <FormControl fullWidth>
                <TextField
                    label="From"
                    type="text"
                    value={from} 
                    onChange={(e) => setFrom(e.target.value)} 
                />
                </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                <TextField
                    label="To"
                    type="text"
                    value={to} 
                    onChange={(e) => setTo(e.target.value)} 
                />
                </FormControl>
            </Grid>
            <Grid item xs={12} md={5}>
                <TextField fullWidth
                    label="Departure Date-Time"
                    type="datetime-local"
                    className={classes.textField}
                    value={dateFrom}
                    InputLabelProps={{
                    shrink: true
                    }}
                    onChange={(e) => setDateFrom(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField fullWidth
                    label="Return Date-Time"
                    type="datetime-local"
                    className={classes.textField}
                    value={dateTo || ''}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(e) => setDateTo(e.target.value)
                    }
                />
            </Grid>
            <Grid item xs={12} md={props.oneWay ? 6 : 5}>
                <FormControl fullWidth>
                    <InputLabel ref={inputLabel}>Type</InputLabel>
                    <Select
                        value={type}
                        onChange={(e) => setType(e.target.value)} 
                        labelWidth={labelWidth}
                    >
                        <MenuItem value={-1}>All</MenuItem>
                        <MenuItem value="Economy">Economy</MenuItem>
                        <MenuItem value="Business">Business</MenuItem>                  
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
  </form>
  <Grid
    justify="space-between"
    container 
    spacing={3}
    style={{marginBottom: 24}}
    >
    <Grid item></Grid>
    <Grid item>
        <Button variant="contained" color="primary" onClick={(data) => props.onButtonClick(
            {
                departure: from,
                arrival: to,
                departureTime: moment(dateFrom),
                arrivalTime: moment(dateTo),
                type: type === -1 ? 'Economy' : type
            }
        )}>
            {props.buttonLabel}
        </Button>
    </Grid>
    <Grid></Grid>
    </Grid> 
  </>
    )
}
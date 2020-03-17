import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, 
    CardMedia, 
    Grid,
    Typography,
} from '@material-ui/core'

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import * as moment from 'moment'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: 90,
    marginTop: 18,
    marginBottom: 18
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  flightType: {
    marginTop: 33,
    textAlign: 'center',
    fontWeight: 900
  }
}));

export default function FlightListItem(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Grid container justify="space-between">
            <Grid item >
              <Typography component="h5" variant="h5">
              {props.from}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {moment.unix(props.dateFrom).format("DD MMM YY hh:mm A")}
              </Typography>
            </Grid>
            <Grid>
              <ArrowRightAltIcon/>
            </Grid>
            <Grid item >
              <Typography component="h5" variant="h5">
              {props.to}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
              {moment.unix(props.dateTo).format("DD MMM YY hh:mm A")}
              </Typography>
            </Grid>
          </Grid>
          
        </CardContent>
      </div>
      <CardMedia className={classes.cover}>
        <Typography className={classes.flightType}>{props.type}</Typography>
      </CardMedia>
    </Card>
  );
}
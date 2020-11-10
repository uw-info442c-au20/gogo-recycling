import React from 'react';
import mask from '../imgs/masks.jpg'
import reycle from '../imgs/recyclePromo.jpg'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} className="content">
      <Grid container spacing={4}>
        <Grid item xs={12}>
        <Paper className={classes.paper} id="banner">
            <h1 id="bannerTitle">Who We Are</h1>
        </Paper>
        </Grid>
        <Grid item xs={12} sm={6} >
          <Paper className={classes.paper}>
            <div className="item1">
                <img id="stat1" src={mask} alt="picture of masks covering the land of Switzerland"/>
            </div>
        </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <div className="item1" id="item1Paragraph">
            BACK GROUND INFO WHAT IS happening due to covid
            Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </div>
        </Paper>
        </Grid>

        {/* inspiring quote emphasizing buyers impact the movement of business */}
        <Grid item xs={12}>
        <Paper className={classes.paper}>
        <div class="blockquote-wrapper">
            <div class="blockquote">
                <h2>
                “Recycling, packaging, businesses are changing all of those things because that’s what consumers want.”
                </h2>
            <h4>&mdash;Jerry Greenfield, Co-founder of Ben & Jerry’s Ice Cream&mdash;</h4>
            </div>
        </div>
        </Paper>
        </Grid>


        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <h2>First Step: Recylcing</h2>
                <img id="stat2" src={reycle} alt="picture of masks covering the land of Switzerland"/>
             </Paper>
        </Grid>
        <Grid item xs={3} sm={6}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

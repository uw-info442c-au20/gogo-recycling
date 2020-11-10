import React from 'react';
import mask from '../imgs/masks.jpg'
import reycle from '../imgs/recyclePromo.jpg'
import cycleEconomy from '../imgs/cycleEconomy.png'

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
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
        <Paper className={classes.paper} id="banner">x
            <h1 id="bannerTitle">Who We Are</h1>
        </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Paper className={classes.paper} className="contentOdd" >
            <div className="item1">
                <img id="stat1" src={mask} alt="picture of masks covering the land of Switzerland"/>
            </div>
        </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Paper className={classes.paper} className="contentEven">
            <div className="item1 text" id="item1Paragraph">
            BACK GROUND INFO WHAT IS happening due to covid
            Where does it come from?
            Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </div>
        </Paper>
        </Grid>

        {/* inspiring quote emphasizing buyers impact the movement of business */}
        <Grid item xs={12}>
        <Paper className={classes.paper} className="contentOdd contentEven">
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
            <Paper className={classes.paper} className="contentOdd">
                <h2>First Step: Proper Recylcing</h2>
                <img id="stat2" src={reycle} alt="picture of people advertising proper recycling"/>
                <div className="recylcingInfo text">
                TAKL ABOUT IMPORTANCE ABOUT RECYLCING
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </div>
                <button class="btn" button>Easy Recycling Guide</button>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Paper className={classes.paper} className="contentEven">
            <h2>Beyond Recycling</h2>
            <img id="stat3" src={cycleEconomy} alt="picture of masks covering the land of Switzerland"/>
            <div className="cycleEconomyInfo text">
            INTRODUCE BUSINESS THAT PRACTICE CIRCULAR ECONOMY
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </div>
            <button class="btn" button>Explore Business with Circular Economy</button>
        </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

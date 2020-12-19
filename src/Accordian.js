import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    head: {
        color:'white',
        textAlign:'center',
        marginBottom:'30px',
        fontSize:'40px',
        fontWeight: '500',
       
    },
    root: {
         fontWeight: '500',
         position: 'relative',
         padding:'100px',
         paddingTop:'40px',
         paddingBottom:'70px'
    },
    back: {
        backgroundColor: '#303030',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      color:'white',
    },
    expandIcon: {
        color : 'white',
    },
    hr: {
        borderColor: '#303030',
      
    },
    details:{
        color:'white',
        marginTop:'10px',
    },

    border:{
      marginTop:'50px',
    },
    topBorder:{
     
      border:'4px solid #303030',
    },

    bottomBorder:{
      border:'4px solid #303030',
      
    }
  }));

function Accordian() {
    const classes = useStyles();

    return (
      <div className={classes.border}>
      <div className={classes.topBorder} />
      <div className={classes.root}>
      
        <h1 className={classes.head}>Frequently Asked Questions</h1>
        <Accordion className={classes.back}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={ classes.expandIcon}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>What is Netflix ?</Typography>
          
          </AccordionSummary>
          <hr className={classes.hr} />
          <AccordionDetails>
            <Typography className={classes.details}>
            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
            <br/>
            <br/>
            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.back}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={ classes.expandIcon}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>How much does Netflix cost ?</Typography>
          
          </AccordionSummary>
          <hr className={classes.hr} />
          <AccordionDetails>
            <Typography className={classes.details}>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.back}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={ classes.expandIcon}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Where can I watch ?</Typography>
          
          </AccordionSummary>
          <hr className={classes.hr} />
          <AccordionDetails>
            <Typography className={classes.details}>
            Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
            <br/>
            <br/>
            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.back}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={ classes.expandIcon}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>How do I cancel ?</Typography>
          
          </AccordionSummary>
          <hr className={classes.hr} />
          <AccordionDetails>
            <Typography className={classes.details}>
            Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.back}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={ classes.expandIcon}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>What can I watch on Netflix ?</Typography>
          
          </AccordionSummary>
          <hr className={classes.hr} />
          <AccordionDetails>
            <Typography className={classes.details}>
            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </Typography>
          </AccordionDetails>
        </Accordion>

      
      </div>
      <div className={classes.bottomBorder} />
     
      </div>
    );
}

export default Accordian;

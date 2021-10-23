import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Link,
  makeStyles,
  Button,
} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Moment from 'moment';

// Internal Imports
import TopBar from '../../components/topnavbar';


// for material style guild
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F4F6F8',
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    padding: '24px',
  },
  card: {
    height: '100%',
    borderRadius: 8,
    boxShadow: '3px 0 15px 0 rgba(0,0,0,0.03)',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'hidden',
  },
  avatar: {
    cursor: 'pointer',
    width: 77,
    height: 77,
    margin: '0 auto 20px',
    backgroundColor: '#47A1B6',
    fontSize: 28,
    fontWeight: 600,
  },
  id: {
    color: '#263238',
    fontWeight: 400,
    fontSize: 16,
    opacity: 0.7,
    marginBottom: '27px',
  },
}));

const PlayerProfile = (props) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const [playerDetailInfo, setplayerDetailInfo] = useState({});

  // cancle dailoge
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <div>
              <Typography variant="h4" className="mb-16 SecondaryColor">
                Player Profile
              </Typography>
              <div className="font-14 mb-16">
                <Link href="/">
                  {' '}
                  <ArrowBackIosIcon style={{ fontSize: 10 }} />
                  {' '}
                  Back to Dashboard
                </Link>
              </div>
              <Container maxWidth={false} className="p-0">
                <Grid container spacing={3}>
                  <Grid item lg={4} md={4} xl={4} xs={12}>
                    <Card className={classes.card}>
                      <CardContent className="profile_card">
                        <div>
                          <Avatar className={classes.avatar}>
                            {playerDetailInfo.player_name_last_first
                              ? playerDetailInfo.player_name_last_first.substring(0, 1)
                              : 'N/A'}
                          </Avatar>
                          <Typography variant="h5" className="SecondaryColor">
                            {playerDetailInfo.player_name_last_first
                              ? playerDetailInfo.player_name_last_first
                              : 'N/A'}
                          </Typography>
                          <Typography className={classes.id}>
                            {playerDetailInfo.player_id
                              ? playerDetailInfo.player_id
                              : '#XXXXXX'}
                          </Typography>
                          <Typography variant="h7" className="SecondaryColor">
                            TEAM: {playerDetailInfo.team_abbrev
                              ? playerDetailInfo.team_abbrev
                              : 'N/A'}
                          </Typography>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item lg={8} md={8} xl={8} xs={12}>
                    <Card className={classes.card}>
                      <CardContent>
                        <ul className="profile_detail_list">
                          <li>
                            <div className="font-14"> Player ID</div>
                            <Typography variant="body2">
                              {'  '}
                              {playerDetailInfo.player_id
                                ? playerDetailInfo.player_id
                                : '-'}
                            </Typography>
                          </li>
                          <li>
                            <div className="font-14"> Player Name</div>
                            <Typography variant="body2">
                              {' '}
                              {playerDetailInfo.player_name_last_first
                                ? playerDetailInfo.player_name_last_first
                                : '-'}
                              {' '}
                            </Typography>
                          </li>
                          <li>
                            <div className="font-14"> Pitch Hand</div>
                            <Typography variant="body2">
                              {playerDetailInfo.pitch_hand
                                ? Moment(
                                  playerDetailInfo.pitch_hand,
                                ).format('MM-DD-YYYY')
                                : '-'}
                            </Typography>
                          </li>
                          <li>
                            <div className="font-14"> Pitches</div>
                            <Typography variant="body2">
                              {playerDetailInfo.pitches
                                ? playerDetailInfo.pitches
                                : '-'}
                            </Typography>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item lg={12} md={12} xl={12} xs={12}>
                    <div className="report_table">
                      <TableContainer component={Paper}>
                        <div className="d-flex space-between table_header">
                          <div>
                            <Typography
                              variant="body2"
                              className="mr-15 SecondaryColor"
                            >
                              Charts
                            </Typography>
                          </div>
                          <div />
                        </div>
                      </TableContainer>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        className="preview_dialog"
      >
        <DialogTitle id="scroll-dialog-title">
          <Typography variant="body2">Preview</Typography>
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText id="scroll-dialog-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

PlayerProfile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  counter: PropTypes.string,
};

export default withRouter(PlayerProfile);

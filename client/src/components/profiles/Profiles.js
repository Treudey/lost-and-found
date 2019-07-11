import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProfileItem from './ProfileItem';
import Spinner from '../layout/Spinner';
import ProfileContext from '../../context/profile/profileContext';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Card, CardContent, Grid } from '@material-ui/core/'
import { withStyles} from '@material-ui/core/styles'


const Profiles = () => {
  const profileContext = useContext(ProfileContext);

  const { profiles, filtered, getProfiles, loading } = profileContext;

  useEffect(() => {
    getProfiles();
    // eslint-disable-next-line
  }, []);

  if (profiles !== null && profiles.length === 0 && !loading) {
    return <h4>Please add an Item you found or lost</h4>;
  }

  return (
    <Fragment>
      <Container>
        <CssBaseline />
          <Grid>
              {profiles !== null && !loading ? (
          filtered !== null
            ? filtered.map(profile => (
                <div
                  key={profile._id}
                  classNames='item'
                >
                  <ProfileItem profile={profile} />
                </div>
              ))
            : profiles.map(profile => (
              
                  <ProfileItem profile={profile} />
              ))
      ) : (
        <Spinner />
      )}
          </Grid>
      </Container>
    
    </Fragment>
  );
};

export default Profiles;

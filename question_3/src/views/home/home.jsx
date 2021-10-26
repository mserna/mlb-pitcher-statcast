import {React, useState, Component, useEffect} from 'react';
import {
  Container,
  Button,
  Label
} from '@material-ui/core';

// Internal imports
import TopBar from '../../components/topnavbar';
import { Dashboard } from '../dashboard/dashboard';

const Home = (props) => {
  
  return(
    <div>
    <TopBar />
    <br/>
    <br/>
    <br/>
    <Container>
      <h1>Hello, Welcome</h1>
      <Dashboard ></Dashboard>
    </Container>
    <br />
    <Container>
    </Container>
    </div>
  )
}

export { Home };
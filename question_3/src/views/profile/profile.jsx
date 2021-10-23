import {React, useState, Component} from 'react';
import Axios from 'axios';
import {
  Container,
  Button,
  Label
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import TopBar from '../../components/topnavbar';
import {Questionaire} from '../questionaire/questionaire';

const Profile = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = event => {
    let file = event.target.files[0];
    const fileReader = new FileReader();
    if (file) {
      fileReader.readAsText(file, "UTF-8");
      fileReader.onload = event => {
        setSelectedFile(event.target.result);
      }
    }
  };
  
  return(
    <div>
    <TopBar />
    <br/>
    <br/>
    <br/>
    <Container>
      <h1>Please upload json data file</h1>
      <h4>Click Refresh button to load new data</h4>
      <Button
        variant="contained"
        component="label"
      >
        Upload File
        <input type="file" onChange={(event) => 
          fileSelectedHandler(event)
          }></input>
      </Button>
      <Questionaire valueFromParent={selectedFile}></Questionaire>
    </Container>
    <br />
    <br />
    <Container>
    </Container>
    </div>
  )
}

export { Profile };
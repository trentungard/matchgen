import Fields from './Fields';
import Matchups from './Matchups';
import { useState, useEffect } from 'react';
import shuffle from './helpers';
import { Heading, Main, Box, Button, Grommet } from 'grommet';
import './style.scss'
const theme = {
  global: {
    hover: {
      color: {
        "dark": "green", 
        "light": "green"
      }
    }
  }
}

const App = () => {
  const [number, setNumber] = useState(4);
  const [allValues, setAllValues] = useState(['', '', '', '']);
  const [shuffles, setShuffles] = useState(0);

  const incrementShuffles = () => {
    let lc =  allValues;
    console.log(lc)
    lc.includes('') ?  alert('fields cannot be empty!') : setShuffles( shuffles + 1 )
  }

  useEffect( () => {
    let copy = allValues;
    copy = shuffle(copy);
    setAllValues(copy);
  }, [shuffles])

  const addInput = () => {
    setAllValues( arr => [...arr, '', '']);
    setNumber(number + 2);
  }

  const removeInput = () => {
    if(allValues.length > 4){
      setNumber(number - 2);
      const copy = [... allValues];
      copy.pop();
      copy.pop();
      setAllValues(copy);
    } else{
      alert("You must have at least 4 matchups")
    }
  }

  return (
    <Grommet theme={theme}>
      <Main
      >
        <Box 
            pad="large"
            align="center"
            background="light-2"
        >
            <Heading level="1" color="brand" textAlign="center">Welcome to the matchup generator!</Heading>
            <Heading level="2" color="dark-3" textAlign="center">Enter values below, and the application will automatically output your values in the Results box!</Heading>
            <Heading level="3" color="dark-2" textAlign="center">Fields: { number }</Heading>
            <Fields allValues={allValues} setAllValues={setAllValues}  />
          <Box
          direction="row"
          align="center"
          gap="medium"
          justify="center"
          >
            <Button primary onClick={addInput} label="Add" />
            <Button primary onClick={removeInput} label="Remove" />
          </Box>
          <Box
          margin = {{"top": "large"}}
          background="accent-4"
          pad= {{"bottom": "large"}}
          align="center"
          width="xlarge"
          >
            <Heading level="3" color="dark-2">Create Matchups</Heading>
            <Button primary onClick={incrementShuffles} label="Generate Matchups "/>
          </Box>
          <Box
          align="center"
          background="brand"
          width="xlarge"
          >
              <Heading level="2" color="light-2" textAlign="center">Results</Heading>
              <Matchups allValues={allValues} shuffles={shuffles} />
            </Box>
        </Box>
      </Main>
    </Grommet>
  )
}

export default App;

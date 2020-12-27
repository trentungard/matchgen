import { TextInput, Box } from 'grommet';

function Field({allValues, setAllValues, i }){

    const handleChange = (e) => {
            let copy = allValues;
            copy[i] = e.target.value;
            setAllValues(copy);
        }

    return(
        <Box 
        margin={{"top": "small"}}
        >
            <TextInput size="xlarge" onChange={ (e) => handleChange(e) } />
        </Box>
    )
}

export default Field;
import Field from './Field';
import { Box } from 'grommet';

function Fields({ allValues, setAllValues }){
    return(
        <Box 
        className="fieldsContainer"
        direction="column"
        gap="none"
        pad={{"bottom": "medium"}}
        >
        { allValues.map( (item, i) => {
            return(
            <Field 
                allValues={allValues} 
                setAllValues={setAllValues} 
                i={ i } 
                key={ i } 
                /> 
            )
            }) }
        </Box>
    )
}

export default Fields;
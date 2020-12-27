import shuffle from './helpers';

function Matchups({allValues, shuffles}){
    let i = -1;
    if(shuffles >= 1){
        let localCopy = shuffle(allValues);
        return(
            <>
            { localCopy.map( item => {
                i ++;
                if( i % 2 !== 0){
                    return(
                    <>
                        <h3 key={i}>{item}</h3> 
                        <hr/>
                    </>
                    )
                } else {
                    return(
                    <>
                        <h3 key={i}>{item}</h3>
                        <h4>vs</h4>
                    </>
                    )
                }
                })
            }
            </>
        )
    } else {
        return(
            null
        )
    }
}

export default Matchups;
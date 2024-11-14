import React, {Component} from 'react';
import CardFav from '../CardFav/CardFav';

const MoviesGrid = ({movies}) => {

        return(
            <div>
                <div>{movies.map( movie => <CardFav movie={movie}/>)}</div>   

            </div>
        )
    }

export default MoviesGrid;
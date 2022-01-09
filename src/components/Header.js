import React from 'react'
import { AddCategory } from './AddCategory'
export const Header = ({setCategories,categories}) => {
    

    return (
        <header>
            <h2 id="nombreApp">Gif Searcher App</h2>
            <AddCategory setCategories={setCategories} categories={categories}/>
            <hr />
        </header>
    )
}

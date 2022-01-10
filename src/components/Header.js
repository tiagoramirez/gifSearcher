import React from "react";
import { AddCategory } from "./AddCategory";
import PropTypes from "prop-types";

export const Header = ({ setCategories, categories }) => {
    return (
        <header>
            <h2 id="nombreApp" className="animate__animated animate__backInDown">Gif Searcher App</h2>
            <AddCategory
                setCategories={setCategories}
                categories={categories}
            />
        </header>
    );
};

Header.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
};

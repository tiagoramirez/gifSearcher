import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories, categories }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue(inputValue.toUpperCase().trim());
        
        if (
            inputValue.length > 1 &&
            categories.includes(inputValue) == false
        ) {
            setCategories([inputValue, ...categories]);
            setInputValue("");
        }
        if (categories.includes(inputValue) == true) {
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                placeholder="Gif name. E.g.: Messi"
                onChange={(e) => handleInputChange(e)}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories, categories }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value.toUpperCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length > 1 && categories.includes(inputValue) === false) {
            setCategories([inputValue, ...categories]);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="animate__animated animate__backInDown"
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
    categories: PropTypes.array.isRequired,
};

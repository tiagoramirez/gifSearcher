import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    // const categories = ["Soul Eater", "Haikyuu", "Violet Evergarden"];
    const [categories, setCategories] = useState([]);

    return (
        <>
            <h2 id="nombreApp">Gif Searcher App</h2>
            <AddCategory setCategories={setCategories} />

            <hr />

            <ol>
                {categories.map((category) => {
                    return <GifGrid key={category} category={category} />;
                })}
            </ol>
        </>
    );
};

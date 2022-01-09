import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { Header } from "./components/Header";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    return (
        <>
            <Header setCategories={setCategories} categories={categories}/>
            <div id="main">
                <ol>
                    {categories.map((category) => {
                        return <GifGrid key={category} category={category} />;
                    })}
                </ol>
            </div>
        </>
    );
};

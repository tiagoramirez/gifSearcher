import React, { useState } from "react";
import { Footer } from "./components/Footer";
import { GifGrid } from "./components/GifGrid";
import { Header } from "./components/Header";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    return (
        <>
            <Header setCategories={setCategories} categories={categories} />
            <ol>
                {categories.map((category) => {
                    return <GifGrid key={category} category={category} />;
                })}
            </ol>
            <Footer />
        </>
    );
};

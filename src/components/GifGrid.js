import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeInLeft nombreBusqueda">
                {category.toUpperCase()}
            </h3>

            {loading && (
                <p className="animate__animated animate__flash" id="cargando">Cargando...</p>
            )}
            <div className="card-grid">
                {images.map((img) => {
                    return <GifGridItem key={img.id} {...img} />;
                })}
            </div>
        </>
    );
};

import React from "react";
import { irA } from "../helpers/irA";

export const GifGridItem = ({ title, url }) => {

    return (
        <div onClick={()=>irA({url})} className="card animate__animated animate__fadeInLeft">
            <img src={url} alt={title} />
        </div>
    );
};

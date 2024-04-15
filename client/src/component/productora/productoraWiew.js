import React from "react";
import {CardProductora} from "./CardProductora";
import {FormProductora} from "./FormProductora";

export const ProductoraView = (props) => {
    return (
        <div>
           <CardProductora/>
           <FormProductora/>
        </div>
    );
}
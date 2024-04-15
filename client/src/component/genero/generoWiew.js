import React from 'react';
import {CardGenero} from "./CardGenero";
import {FormGenero} from "./FormGenero";


export const GeneroView = (props) => {
    return (
        <div>
            <CardGenero/>
          <FormGenero/>
        </div>
    );
}
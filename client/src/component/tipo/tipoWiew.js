import React from "react";
import {CardTipo} from "./CardTipo";
import {FormTipo} from "./FormTipo";

export const TipoView = (props) => {
    return (
        <div>
            <CardTipo/>
          <FormTipo/>
        </div>
    );
}
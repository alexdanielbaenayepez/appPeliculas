// https://medium.com/@anshmunjal/how-to-create-get-and-post-endpoints-in-nodejs-using-expressjs-77fd3953ec38
// post desde el cliente
// https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
// https://drive.google.com/file/d/1U3CuAYskGiI-u03HHIvQllNcbETufV6h/view minuto 1:11:23
// https://drive.google.com/file/d/1AVTz6cYMVVi2DGnOfjnLXo7Ma0z_og0Y/view

import React from 'react';
import {CardDirector} from "./CardDirector";
import {FormUser} from "./FormDirector";

export const DirectorView = (props) => {


  return (
      <div>
        <CardDirector />
        <FormUser />
      </div>
  );

}


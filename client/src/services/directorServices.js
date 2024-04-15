import {UseFetch} from "../fetch/fetch";
const crearDirector = (director) => {
    return UseFetch('http://localhost:3000/users/directors', 'POST', director);

}
,
    getDirectores = () => {
        return UseFetch('http://localhost:3000/users/directors');
    },

    getDirector = (id) => {
        return UseFetch(`http://localhost:3000/users/directors/${id}`);
    },

    updateDirector = (id, director) => {
        return UseFetch(`http://localhost:3000/users/directors/${id}`, 'PUT', director);

    },

    deleteDirector = (id) => {
        return UseFetch(`http://localhost:3000/users/directors/${id}`, 'DELETE');
    }

    export {crearDirector, getDirectores, getDirector, updateDirector, deleteDirector}
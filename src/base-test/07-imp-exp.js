import heroes from "../data/heroes.js";

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);


const pokeapi_endpoint = "https://pokeapi.co/api/v2"

export const buscarPokemon = id_or_name => fetch(`${pokeapi_endpoint}/pokemon/${id_or_name}`).then(resp => resp.json())

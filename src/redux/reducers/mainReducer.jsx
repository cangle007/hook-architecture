export default function mainReducer(
  currentState = {
    pokemon: "pikachu",
  },
  action
) {
  switch (action.type) {
    case "GET_ITEMS":
      return { ...currentState, pokemon: action.pokemon };

    default:
      return currentState;
  }
}

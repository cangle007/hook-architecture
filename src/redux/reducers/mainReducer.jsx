export default function mainReducer(
  currentState = {
    pokemon: "pikachu",
    users: [],
  },
  action
) {
  switch (action.type) {
    case "GET_ITEMS":
      return { ...currentState, pokemon: action.pokemon };

    case "GET_USERS":
      console.log("currentState", currentState.users);
      return { ...currentState, users: action.users };

    default:
      return currentState;
  }
}

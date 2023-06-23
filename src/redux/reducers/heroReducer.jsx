export default function heroReducer(
  currentState = {
    getItemsFlag: false,
    superHero: "spider-man",
  },
  action
) {
  switch (action.type) {
    case "CLEAR_ROOT_REDUCER":
      return { ...currentState, deviceLogs: action.deviceLogs };

    case "ADD_ITEMS":
      return { ...currentState, superHero: action.superHero };

    default:
      return currentState;
  }
}

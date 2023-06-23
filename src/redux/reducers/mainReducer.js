export default function heroReducer(
    currentState = {
      getItemsFlag: false,
      items: 'pokemon',
    },
    action
  ) {
    switch (action.type) {
      case 'CLEAR_ROOT_REDUCER':
        return { ...currentState, deviceLogs: action.deviceLogs };
  
      case 'ADD_ITEMS':
        return { ...currentState, itemsAdded: action.itemsAdded };
  
      case 'DELETE_ITEMS':
        return { ...currentState, itemsAdded: action.itemsAdded };
  
      case 'FLAG_GET_ITEMS':
        return { ...currentState, items: action.items, getItemsFlag: action.getItemsFlag };
  
      case 'GET_ITEMS':
        return { ...currentState, items: action.items, getItemsFlag: action.getItemsFlag };
  
      default:
        return currentState;
    }
  }
  
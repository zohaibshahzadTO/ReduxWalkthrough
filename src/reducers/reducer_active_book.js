// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {

  // Cares about the action
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  } 

  // Isnt concerned with action; base case
  return state

}

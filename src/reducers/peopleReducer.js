import initialState from './initialState';

export default function peopleReducer(state=initialState.people, action){
  switch (action.type) {
    case "LOAD_PEOPLE_SUCCESS":
      return action.people

    // case "UPDATE_PEOPLE_SUCCESS":
    //     return [
    //       ...state.filter(p=>p.id==action.people.id),
    //       Object.assign({}, action.people)
    //     ]
    
    default:
      return state;
  }
}

import { useState, useEffect } from 'react';
let globalState = {};
let listeners = [];
let actions = {};
export const useStore = () => {
  const [state, setState] = useState(globalState);
  const dispatch = (actionsId,payload) => {
    const newState = actions[actionsId](globalState,payload);
    globalState = { ...globalState, ...newState };
    for (const listen of listeners) {
      listen(globalState);
    }
  };
  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((listen) => listen !== setState);
    };
  }, [setState]);

  return [globalState,dispatch]
};
export const initStore=(userAction,initalState)=>{
    if(initalState){
        globalState = { ...globalState,... initalState };
    }
    actions={...actions,...userAction}
}
import { Action } from '@ngrx/store';


//export const regionOptions = ["Asia", "Europe"];

export interface AppState {
    regions: string[];
  }
  
  const initialState: AppState = {
    regions: ["Asia", "Europe"]
  };

export const REGIONS = 'REGIONS';

export function regionReducer(state: AppState = initialState, action: Action): AppState {

  switch(action.type) {
    case REGIONS: {

      return {
        regions: initialState.regions
      }
    }
    default:
      return state;
  }
}


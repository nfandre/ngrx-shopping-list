import { ShoppingItem } from './shopping-item.model';
import {ShoppingState} from "../reducers/shopping.reducer";

// export interface AppState {
//   readonly shopping: Array<ShoppingItem>
// }
export interface AppState {
  readonly shopping: ShoppingState
}

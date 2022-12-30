import { Action, createReducer, on } from "@ngrx/store";

import { getOrdersSuccess, getUserSuccess } from "../actions/profile.actions";

import { Order, User } from "../../utils/interfaces/profile-info.interfaces";
import { Data } from "../../../../../../utils/interfaces/app.interfaces";

const initialState: User = { } as User;

export const profileReducerImplicit = createReducer(
  initialState,
  on(getUserSuccess, (state, data: User) => data),
  on(getOrdersSuccess, (state, { data }: Data<Order[]>) => ({ ...state, orders: data })),
);

export function profileReducer(state: User | undefined, action: Action) {
  return profileReducerImplicit(state, action);
}

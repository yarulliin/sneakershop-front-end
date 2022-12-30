import { createAction, props } from "@ngrx/store";

import { Data, Id } from "../../../../../../utils/interfaces/app.interfaces";
import { CreateUser, Order, User } from "../../utils/interfaces/profile-info.interfaces";

export enum ProfileActions {
  GET_USER = '[PROFILE] GET_USER',
  GET_USER_SUCCESS = '[PROFILE] GET_USER_SUCCESS',

  CREATE_USER = '[PROFILE] CREATE_USER',
  CREATE_USER_SUCCESS = '[PROFILE] CREATE_USER_SUCCESS',

  UPDATE_USER = '[PROFILE] UPDATE_USER',
  UPDATE_USER_SUCCESS = '[PROFILE] UPDATE_USER_SUCCESS',

  DELETE_USER = '[PROFILE] DELETE_USER',
  DELETE_USER_SUCCESS = '[PROFILE] DELETE_USER_SUCCESS',

  GET_ORDERS = '[PROFILE] GET_ORDERS',
  GET_ORDERS_SUCCESS = '[PROFILE] GET_ORDERS_SUCCESS',

  CREATE_ORDER = '[PROFILE] CREATE_ORDER',
  CREATE_ORDER_SUCCESS = '[PROFILE] CREATE_ORDER_SUCCESS',
}

export const getUser = createAction(
  ProfileActions.GET_USER,
  props<Id>(),
);

export const getUserSuccess = createAction(
  ProfileActions.GET_USER_SUCCESS,
  props<User>(),
);

export const createUser = createAction(
  ProfileActions.CREATE_USER,
  props<CreateUser>(),
);

export const createUserSuccess = createAction(
  ProfileActions.CREATE_USER_SUCCESS,
  props<User>(),
);

export const updateUser = createAction(
  ProfileActions.UPDATE_USER,
  props<User>(),
);

export const updateUserSuccess = createAction(
  ProfileActions.UPDATE_USER_SUCCESS,
  props<User>(),
);

export const deleteUser = createAction(
  ProfileActions.DELETE_USER,
  props<Id>(),
);

export const deleteUserSuccess = createAction(
  ProfileActions.DELETE_USER_SUCCESS,
);

export const getOrders = createAction(
  ProfileActions.GET_ORDERS,
);

export const getOrdersSuccess = createAction(
  ProfileActions.GET_ORDERS_SUCCESS,
  props<Data<Order[]>>(),
);

export const createOrder = createAction(
  ProfileActions.CREATE_ORDER,
  props<Order>(),
);

export const createOrderSuccess = createAction(
  ProfileActions.CREATE_ORDER_SUCCESS,
);

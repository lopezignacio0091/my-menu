import { createDraftSafeSelector } from "@reduxjs/toolkit";


const selectSelf = (state: any) => state;

export const userSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.login.user
);

export const errorMessageSelector = createDraftSafeSelector(
    selectSelf,
    (state) => state.login.errorMessage
  );
  
  export const errorSelector = createDraftSafeSelector(
    selectSelf,
    (state) => state.login.error
  );

  export const isAdminSelector = createDraftSafeSelector(
    selectSelf,
    (state) => state.login?.user.rol === 1 
  );

  export const nameSelector = createDraftSafeSelector(
    selectSelf,
    (state) => state.login?.user.name 
  );
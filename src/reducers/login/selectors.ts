import { createDraftSafeSelector } from "@reduxjs/toolkit";


const selectSelf = (state: any) => state;

export const userSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.login.user
);

export const isLoguedSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.login.user ? true : false
);


export const errorMessageSelector = createDraftSafeSelector(
    selectSelf,
    (state) => state.login.errorMessage
  );
  
  export const errorSelector = createDraftSafeSelector(
    selectSelf,
    (state) => state.login.error
  );
  
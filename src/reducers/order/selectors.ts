import { createDraftSafeSelector } from "@reduxjs/toolkit";


const selectSelf = (state: any) => state;


export const myOrderelector = createDraftSafeSelector(
    selectSelf,
    (state) => state.order.myOrder
  );
  
  export const tableSelector = createDraftSafeSelector(
    selectSelf,
    (state) => state.order.tables
  );
  

  export const loadingSelector = createDraftSafeSelector(
    selectSelf,
    (state) => state.order.fetching
  );
  
import {
  __SEND_CODE,
  __RECEIVE_CODE
} from 'actionTypes';


export default ( state = {
    code: "",
  } , { payload , type , id } ) => {
    switch( type ){

      /*
      defineSyncActionReducer __SEND_CODE start
      */
      case __SEND_CODE: {
        return {
          code: payload.code
        };
      }
      /*
      defineSyncActionReducer __SEND_CODE end
      */

      /*
      defineSyncActionReducer __RECEIVE_CODE start
      */
      case __RECEIVE_CODE: {
        return {
          code: payload.code
        };
      }
      /*
      defineSyncActionReducer __RECEIVE_CODE end
      */
      default:
        return state;
    }
  };

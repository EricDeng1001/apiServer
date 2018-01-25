import {
  __SEND_CODE,
  __RECEIVE_CODE,
} from 'actionTypes';

/*
defineSyncActionCreator sendCode start
*/
let sendCodeCounter = 0;
export const sendCode = ( code , socket ) => {
  socket.emit( "sendCode" , code );
  return {
    type: __SEND_CODE,
    payload: {
      code
    },
    id: sendCodeCounter++
  }
};
/*
defineSyncActionCreator sendCode end
*/

/*
defineSyncActionCreator receiveCode start
*/
let receiveCodeCounter = 0;
export const receiveCode = ( code ) => ({
    type: __RECEIVE_CODE,
    payload: {
      code
    },
    id: receiveCodeCounter++
});
/*
defineSyncActionCreator receiveCode end
*/

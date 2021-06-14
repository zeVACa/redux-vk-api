export const CHANGE_USER_NAME = 'CHANGE_USER_NAME';

export const changeName = (payload) => ({ type: CHANGE_USER_NAME, payload });

// export const changeName = function (payload) {
//   return {
//     action: CHANGE_USER_NAME,
//     payload,
//   };
// };

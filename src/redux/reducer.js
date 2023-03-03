import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './action';

const initialState = {
    notifications: []
  };
  
  function NotificationReducer(state = initialState, action) {
    switch (action.type) {
      case SHOW_NOTIFICATION:
        return {
          notifications: [...state.notifications, action.payload]
        };
      case HIDE_NOTIFICATION:
        return { 
          notifications: state.notifications.filter(notification => notification.id !== action.payload.id)
        };
      default:
        return state;
    }
  }
  
  export default NotificationReducer;
  
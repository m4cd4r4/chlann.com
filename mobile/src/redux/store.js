import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
// Restore other reducers
import conversationReducer from './slices/conversationSlice';
import messageReducer from './slices/messageSlice';
import mediaReducer from './slices/mediaSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Restore other reducers
    conversations: conversationReducer,
    messages: messageReducer,
    media: mediaReducer,
    ui: uiReducer,
  },
  // Restore custom middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['socket/connected', 'socket/disconnected', 'socket/message'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.socket', 'meta.arg.socket'],
        // Ignore these paths in the state
        ignoredPaths: ['socket.instance'],
      },
    }),
});

export default store;

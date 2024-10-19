export const selectCurrentUser = (state) => state.auth.user;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export const selectAuthToken = (state) => state.auth.token;

export const selectAuthError = (state) => state.auth.error;

export const selectIsLoading = (state) => state.auth.isLoading;



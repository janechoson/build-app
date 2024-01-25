export default defineNuxtRouteMiddleware(() => {
  const tokenClientEncrypt = useCookie("auth.session-token");

  if (!tokenClientEncrypt.value) {
    return navigateTo("/login");
  }
});

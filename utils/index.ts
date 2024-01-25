export function setCookieAuth(token: string) {
  const tokenClientEncrypt = useCookie("auth.session-token");
  tokenClientEncrypt.value = token;
}

export function getCookieAuth() {
  const tokenClientEncrypt = useCookie("auth.session-token");
  return { tokenClientEncrypt: tokenClientEncrypt.value };
}

export function removeCookieAuth() {
  const tokenClientEncrypt = useCookie("auth.session-token");
  tokenClientEncrypt.value = null;
}

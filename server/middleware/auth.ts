export default defineEventHandler((event) => {
  const isAuth = getCookie(event, "pokemon-auth");
  console.log("isauth", event.path);

  if (!isAuth && event.path !== "/login") {
    sendRedirect(event, "/login");
  }
});

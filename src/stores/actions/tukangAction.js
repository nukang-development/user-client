export function getTukang(payload) {
  return {type: "GET_TUKANG", payload}
}
export function setProfile(payload) {
  return {type: "SET_PROFILEUSER", payload}
}
export function setToken(payload) {
  return {type: "ACCESS_TOKEN", payload}
}
export function setIdUser(payload) {
  console.log(payload, 'dari action');
  return {type: "SET_IDUSER", payload}
}
export function setTukangCategory(payload) {
  return {type: "SET_TUKANGCATEGORY", payload}
}

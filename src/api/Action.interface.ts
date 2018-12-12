export interface Action {
  endpoint: string,
  method: string,
  params?: Object,
  body?: Object,
}
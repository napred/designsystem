export interface IStyleCache {
  get<T = any>(name: string): T | void;
  set<T = any>(name: string, value: T): T;
}

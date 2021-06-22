import { makeAutoObservable } from "mobx";

export default class ItemStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._items = [];

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

    setBrands(brands) {
    this._brands = brands;
  }

    setItems(items) {
    this._items = items;
  }

  getTypes(types) {
    return this._types;
  }

  getBrands(brands) {
    return this._brands;
  }

  getItems(items) {
    return this._items;
  }
}
import { makeAutoObservable } from "mobx";

export default class ItemStore {
  constructor() {
    this._types = [
    {
        "id": 1,
        "name": "Laptop",
        "createdAt": "2021-06-21T15:29:12.550Z",
        "updatedAt": "2021-06-21T15:29:12.550Z"
    },
    {
        "id": 2,
        "name": "refrigerators",
        "createdAt": "2021-06-22T08:07:18.874Z",
        "updatedAt": "2021-06-22T08:07:18.874Z"
    },
    {
        "id": 3,
        "name": "tv",
        "createdAt": "2021-06-22T08:07:36.707Z",
        "updatedAt": "2021-06-22T08:07:36.707Z"
    },
    {
        "id": 4,
        "name": "mobiles",
        "createdAt": "2021-06-22T08:09:36.961Z",
        "updatedAt": "2021-06-22T08:09:36.961Z"
    },
    {
        "id": 5,
        "name": "smart watches",
        "createdAt": "2021-06-22T12:29:06.375Z",
        "updatedAt": "2021-06-22T12:29:06.375Z"
    }
];
    this._brands = [
    {
        "id": 1,
        "name": "Lenovo",
        "createdAt": "2021-06-21T15:28:21.024Z",
        "updatedAt": "2021-06-21T15:28:21.024Z"
    },
    {
        "id": 2,
        "name": "Toshiba",
        "createdAt": "2021-06-22T07:45:07.079Z",
        "updatedAt": "2021-06-22T07:45:07.079Z"
    },
    {
        "id": 3,
        "name": "Samsung",
        "createdAt": "2021-06-22T07:47:52.296Z",
        "updatedAt": "2021-06-22T07:47:52.296Z"
    },
    {
        "id": 4,
        "name": "Xiaomi",
        "createdAt": "2021-06-22T07:48:01.789Z",
        "updatedAt": "2021-06-22T07:48:01.789Z"
    }
];
    this._items =  [
        {
            "id": 1,
            "name": "ThinkPad",
            "price": 30000,
            "rating": 0,
            "img": "http://localhost:7000/e2fe3e71-d3ef-40dc-a11f-413fa2d90fe5.jpg",
            "createdAt": "2021-06-21T15:50:30.113Z",
            "updatedAt": "2021-06-21T15:50:30.113Z",
            "typeId": 1,
            "brandId": 1
        },
        {
            "id": 2,
            "name": "Redmi Note 10",
            "price": 5999,
            "rating": 0,
            "img": "http://localhost:7000/a364d92d-f625-4101-be7b-adf2e7b0e49b.jpg",
            "createdAt": "2021-06-22T08:12:47.282Z",
            "updatedAt": "2021-06-22T08:12:47.282Z",
            "typeId": 4,
            "brandId": 4
        },
        {
            "id": 3,
            "name": "RB30J3200S9/UA",
            "price": 12500,
            "rating": 0,
            "img": "http://localhost:7000/778aeaae-a174-462c-8924-4f971a701163.jpg",
            "createdAt": "2021-06-22T08:14:24.214Z",
            "updatedAt": "2021-06-22T08:14:24.214Z",
            "typeId": 2,
            "brandId": 3
        },
        {
            "id": 4,
            "name": "TOSHIBA 55UA2063DG",
            "price": 14999,
            "rating": 0,
            "img": "http://localhost:7000/bb489c3a-e0f2-41d5-a4cc-01db8b66519d.jpg",
            "createdAt": "2021-06-22T08:16:35.076Z",
            "updatedAt": "2021-06-22T08:16:35.076Z",
            "typeId": 3,
            "brandId": 2
        },
                {
            "id": 5,
            "name": "ThinkPad",
            "price": 30000,
            "rating": 0,
            "img": "http://localhost:7000/e2fe3e71-d3ef-40dc-a11f-413fa2d90fe5.jpg",
            "createdAt": "2021-06-21T15:50:30.113Z",
            "updatedAt": "2021-06-21T15:50:30.113Z",
            "typeId": 1,
            "brandId": 1
        },
        {
            "id": 6,
            "name": "Redmi Note 10",
            "price": 5999,
            "rating": 0,
            "img": "http://localhost:7000/a364d92d-f625-4101-be7b-adf2e7b0e49b.jpg",
            "createdAt": "2021-06-22T08:12:47.282Z",
            "updatedAt": "2021-06-22T08:12:47.282Z",
            "typeId": 4,
            "brandId": 4
        },
        {
            "id": 7,
            "name": "RB30J3200S9/UA",
            "price": 12500,
            "rating": 0,
            "img": "http://localhost:7000/778aeaae-a174-462c-8924-4f971a701163.jpg",
            "createdAt": "2021-06-22T08:14:24.214Z",
            "updatedAt": "2021-06-22T08:14:24.214Z",
            "typeId": 2,
            "brandId": 3
        },
        {
            "id": 8,
            "name": "TOSHIBA 55UA2063DG",
            "price": 14999,
            "rating": 0,
            "img": "http://localhost:7000/bb489c3a-e0f2-41d5-a4cc-01db8b66519d.jpg",
            "createdAt": "2021-06-22T08:16:35.076Z",
            "updatedAt": "2021-06-22T08:16:35.076Z",
            "typeId": 3,
            "brandId": 2
        }
    ];
    this._selectedType = {};
    this._selectedBrand = {};

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

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get items() {
    return this._items;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
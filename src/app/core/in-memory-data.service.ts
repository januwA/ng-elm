import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

import * as data from "~assets/data.json";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const { seller, goods, ratings } = data;
    return { data, seller, goods, ratings };
  }

  getSeller() {}
}

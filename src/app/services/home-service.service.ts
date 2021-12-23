import { PageEvent } from '@angular/material/paginator';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  public static data: PageEvent;

  public static filters: PageEvent = { pageIndex: HomeServiceService.data?.pageIndex,
     pageSize: HomeServiceService.data?.pageSize, length: 100 };

  constructor() { }


}

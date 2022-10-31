import { Component } from '@angular/core';
import { CommonUtility } from '../../common/common.utility';
import { DataModel } from './collections.model';

@Component({
  selector: 'collections',
  templateUrl: './collections.component.html',
  styles: [],
})
export class CollectionsComponent {
  private util: CommonUtility = new CommonUtility();
  // 元データ
  public data: DataModel[];
  // Map格納用
  public dataMap: DataModel[] = [];
  // Filter格納用
  public dataFilter: DataModel[] = [];
  // Filter格納用
  public dataFind: DataModel | undefined;
  // Total格納用
  public dataTotal: DataModel[] = [];

  constructor() {
    this.data = [
      { id: 1, code: 'A001', name: 'データ1', score: 100, dataType: 0 },
      { id: 2, code: 'A002', name: 'データ2', score: 95, dataType: 0 },
      { id: 3, code: 'A003', name: 'データ3', score: 80, dataType: 0 },
      { id: 4, code: 'B001', name: 'データ4', score: 22, dataType: 1 },
      { id: 5, code: 'B002', name: 'データ5', score: 45, dataType: 1 },
      { id: 6, code: 'C001', name: 'データ6', score: 50, dataType: 2 },
      { id: 7, code: 'C002', name: 'データ7', score: 58, dataType: 2 },
      { id: 8, code: 'C003', name: 'データ8', score: 68, dataType: 2 },
      { id: 9, code: 'C004', name: 'データ9', score: 0, dataType: 2 },
      { id: 10, code: 'D001', name: 'データ10', score: 49, dataType: 3 },
    ];
    this.setDataMap();
    this.setDataFilter();
    this.setDataFind();
    this.setDataTotal();
  }

  /**
   * 元データコピーメソッド
   *
   */
  private getData(): DataModel[] {
    const ret: DataModel[] = this.util.ShallowCopy(this.data);
    return ret;
  }

  /** データマップ */
  private setDataMap(): void {
    const data: DataModel[] = this.getData();
    const result: DataModel[] = data.map((item: DataModel) => {
      item.name = '★' + item.name + '★';
      return item;
    });
    this.dataMap = result;
  }

  /** データフィルター */
  private setDataFilter(): void {
    const data: DataModel[] = this.getData();
    const result: DataModel[] = data.filter((item: DataModel) => {
      return item.score >= 50;
    });
    this.dataFilter = result;
  }

  /** データファインド */
  private setDataFind(): void {
    const data: DataModel[] = this.getData();
    const result: DataModel | undefined = data.find(
      (item: DataModel) => (item.dataType = 1)
    );
    this.dataFind = result;
  }

  /** データフィルター */
  private setDataTotal(): void {
    const data: DataModel[] = this.getData();
    const result: DataModel[] = data.filter((item: DataModel) => {
      return item.score >= 50 && item.score < 60 && item.dataType === 2;
    });
    this.dataTotal = result;
  }
}

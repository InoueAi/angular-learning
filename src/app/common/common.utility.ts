import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
/**
 * 共通メソッド
 */
export class CommonUtility {
  /**
   * オブジェクトをシャローコピーする
   */
  public ShallowCopy(ob: any): any {
    return JSON.parse(JSON.stringify(ob));
  }
}

interface MergeInterface {
  merge(collection_1: number[], collection_2: number[]): number[];
}

export class MergeFunction implements MergeInterface {
  merge(collection_1: number[], collection_2: number[]): number[] {
    let mergedCollection: number[] = [];
    while (collection_1.length > 0 || collection_2.length > 0) {
      if (collection_1.length == 0) {
        mergedCollection.push(...collection_2);
        break;
      }
      if (collection_2.length == 0) {
        mergedCollection.push(...collection_1);
        break;
      }

      if (collection_1[0] < collection_2[0]) {
        mergedCollection.push(collection_1[0]);
        collection_1.shift();
      } else {
        mergedCollection.push(collection_2[0]);
        collection_2.shift();
      }
    }
    return mergedCollection;
  }
}

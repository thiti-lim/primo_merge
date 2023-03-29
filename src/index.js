var MergeFunction = /** @class */ (function () {
    function MergeFunction() {
    }
    MergeFunction.prototype.merge = function (collection_1, collection_2) {
        var mergedCollection = [];
        while (collection_1.length > 0 || collection_2.length > 0) {
            if (collection_1.length == 0) {
                mergedCollection.push.apply(mergedCollection, collection_2);
                break;
            }
            if (collection_2.length == 0) {
                mergedCollection.push.apply(mergedCollection, collection_1);
                break;
            }
            if (collection_1[0] < collection_2[0]) {
                mergedCollection.push(collection_1[0]);
                collection_1.shift();
            }
            else {
                mergedCollection.push(collection_2[0]);
                collection_2.shift();
            }
        }
        return mergedCollection;
    };
    return MergeFunction;
}());

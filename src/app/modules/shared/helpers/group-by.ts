export function groupBy<Value, Key>(
    iterable: Value[],
    callable: (item: Value) => Key,
): Value[][] {
    const map = new Map<Key, Value[]>();
    for (const item of iterable) {
        const key = callable(item);
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key)!.push(item)
    }
    return [...map.values()];
}

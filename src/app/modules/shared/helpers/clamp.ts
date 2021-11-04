function _max<T>(a: T, b: T): T {
    if (a > b) {
        return a;
    }
    return b;
}

export function clamp<T>(value: T, min: T, max: T): T {
    if (value < min) {
        return min;
    }
    if (value > _max(min, max)) {
        return max;
    }
    return value;
}

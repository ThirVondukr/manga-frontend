export function coerceBoolean(value: any) {
    return value != null && `${value}` != "false";
}

export function CoerceBoolean() {
    return function (target: Object, propertyKey: string) {
        let definition = Object.getOwnPropertyDescriptor(target, propertyKey);
        let descriptor: PropertyDescriptor;

        if (definition) {
            descriptor = {
                get: definition.get,
                set: function (newValue) {
                    definition!.set!(coerceBoolean(newValue));
                }
            }
        } else {
            descriptor = {
                get: function () {
                    // @ts-ignore
                    return this[`__${propertyKey}`];
                },
                set: function (newValue: any) {
                    // @ts-ignore
                    this[`__${propertyKey}`] = coerceBoolean(newValue);
                }
            }
        }


        Object.defineProperty(
            target,
            propertyKey,
            descriptor,
        )
    }
}

import {Subject} from "rxjs";


export function SubjectInput() {
    return function (target: Object, propertyKey: string) {
        let definition = Object.getOwnPropertyDescriptor(target, propertyKey);
        let descriptor: PropertyDescriptor;

        if (definition) {
            descriptor = {
                get: definition.get,
                set: function (newValue: any) {
                    const subject: Subject<any> = definition!.get!();
                    subject.next(newValue);
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
                    this[`__${propertyKey}`].next(newValue);
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

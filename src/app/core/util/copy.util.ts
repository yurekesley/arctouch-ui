import * as moment from 'moment';

export class Copy {

    static deep = (instance: any, init: Partial<any> = null, keysObjectNoString: any[] = null, removeEmptyString: boolean = false) => {
        if (init) {
            Object.assign(instance, init);
            Copy.cleanObjectByString(instance, init, keysObjectNoString);
            Copy.trimValueString(instance, init);
            Copy.removeEmptyValueString(instance, init, removeEmptyString);
        }
    }

    // Bug firefox Object.values;
    private static values(obj): any[] {
        const vals = [];
        // tslint:disable-next-line:forin
        for (const prop in obj) {
            vals.push(obj[prop]);
        }
        return vals;
    }

    static parseDate(instance: any, keysObjectDate: any) {
        if (instance) {
            let newKey;
            let keyValue;
            for (const key of Copy.values(keysObjectDate)) {
                newKey = key;
                keyValue = key;
                if (typeof key === 'object') {
                    newKey = Copy.values(key)[0];
                    keyValue = Object.keys(key)[0];

                    if (instance[newKey]) {
                        instance[keyValue] = new Date(instance[newKey]);
                    }

                    continue;
                }

                if (instance[keyValue] && !(instance[keyValue] instanceof Date)) {
                    if (!(typeof instance[keyValue] === 'string')) {
                        instance[keyValue] = new Date(instance[newKey]);
                    } else {
                        instance[keyValue] = this.parserStringDate(instance[newKey]);
                    }
                }
            }
        }
    }

    static parserStringDate(data): Date {
        let newDate;

        if (data) {
            let m = moment(data, 'DD/MM/YYYY HH:mm');
            if (m.isValid() && data.length == 16) {
                newDate = m.toDate();
            } else {
                m = moment(data, 'DD/MM/YYYY');
                if (m.isValid() && data.length == 10) {
                    newDate = m.toDate();
                } else {
                    m = moment(data, 'HH:mm');
                    if (m.isValid()) {
                        newDate = m.toDate();
                    }
                }
            }
        }

        return newDate;
    }

    static cleanObjectByString = (instance: any, init: Partial<any> = null, keysObjectNoString: any[] = null) => {
        if (keysObjectNoString) {
            for (const key in instance) {
                if (keysObjectNoString.indexOf(key) > -1 && init.hasOwnProperty(key)) {
                    if (typeof instance[key] === 'string') {
                        instance[key] = null;
                    }
                }
            }
        }
    }

    static trimValueString = (instance: any, init: Partial<any> = null) => {
        for (const key in instance) {
            if (init.hasOwnProperty(key)) {
                if (typeof instance[key] === 'string') {
                    instance[key] = instance[key].trim().toUpperCase();
                }
            }
        }
    }

    static removeEmptyValueString = (instance: any, init: Partial<any> = null, removeEmptyString: boolean = false) => {
        if (removeEmptyString) {
            for (const key in instance) {
                if (init.hasOwnProperty(key)) {
                    if (typeof instance[key] === 'string' && instance[key].trim().length === 0) {
                        instance[key] = null;
                    }
                }
            }
        }
    }
}

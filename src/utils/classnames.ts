export function classNames(classObj: {[key: string]: boolean}): string {
    return Object
        .keys(classObj)
        .filter(className => classObj[className])
        .join(' ')
}
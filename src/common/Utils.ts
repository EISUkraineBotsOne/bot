/*
 * This file contains useful functions that can be used in other modules
 */

/**
 * Alias for getter function.
 */
export type Getter<T> = () => T

/**
 * Function to emulate Elvis operator. Returns value from getter, but if getter fails for any reason, or if it returns
 * null or undefined, the method silently returns the given default value.
 *
 * @param getter return instance of T.
 * @param defaultValue default value of T.
 * @returns {T} result of getter execution of default value if the getter has failed.
 */
export function elvis<T>(getter: Getter<T>, defaultValue: T = null): T {
    try {
        const result = getter();
        if (isInexact(result)) {
            return defaultValue
        } else {
            return result
        }
    } catch (e) {
        return defaultValue;
    }
}

export function wrapString(value: any) {
    if (isInexact(value)) {
        return '';
    } else {
        return value.toString();
    }
}

/**
 * Returns true if given value null or undefined
 * @param value to check
 * @return {boolean} true if given value null or undefined
 */
export function isInexact(value: any) {
    return value === null || value === undefined
}

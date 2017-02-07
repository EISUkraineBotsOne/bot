import { Optional } from './Optional'
import { wrapString } from './Utils'

/**
 * Converts given items into strings and joins those that are not empty. Ignores empty strings, strings with only
 * spaces, and inexact items.
 * @param items items to join
 * @param separator separator between joined elements
 * @return {string}
 */
export function joinNotEmpty(items: any[], separator: string = ''): string {
    return Optional.ofNullable(items)
        .map(arr => arr.reduce((acc: string, item: string) =>
                Optional.ofNullable(item)
                    .map(s => wrapString(s))
                    .map(s => s.trim())
                    .filter(s => s.length > 0)
                    .map(s => Optional.ofNullable(acc).map(res => res + separator).map(res => res + s).orElse(s))
                    .orElse(acc)
            , null))
        .orElse('')
}

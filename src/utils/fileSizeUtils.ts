interface FormatFileSizeOptions {
    /**
     * Whether to include trailing zeros in the decimal part.
     *
     * @default false
     */
    trailingZeros?: boolean;
}

type FormatFileSizeMetricResult =
    | "Invalid file size"
    | `${"-" | ""}${number} ${"bytes" | "kB" | "MB" | "GB" | "TB" | "PB" | "EB" | "ZB" | "YB" | "RB" | "QB"}`
    | `${"-" | ""}Infinity bytes`;

/**
 * Format file size in metric prefix
 *
 * @param fileSize The file size in bytes to format.
 * @param options The options.
 * @returns The formatted file size.
 */
export function formatFileSizeMetric(fileSize: number | string, options: FormatFileSizeOptions = {}): FormatFileSizeMetricResult {
    const originalSize: number = Number(fileSize);
    let size: number = Math.abs(originalSize);

    if (Number.isNaN(size)) {
        return "Invalid file size";
    }

    if (originalSize === Infinity) {
        return "Infinity bytes" as const;
    }

    if (originalSize === -Infinity) {
        return "-Infinity bytes" as const;
    }

    if (size === 0) {
        return Object.is(originalSize, -0) ? "-0 bytes" : "0 bytes";
    }

    const units = ["bytes", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB", "RB", "QB"] as const;
    let quotient: number = Math.floor(Math.log10(size) / 3);
    quotient = quotient < units.length ? quotient : units.length - 1;
    size /= 1000 ** quotient;

    return `${Math.sign(originalSize) < 0 || Object.is(originalSize, -0) ? "-" : ""}${
        options.trailingZeros && quotient > 0 ? (size.toFixed(2) as `${number}`) : +size.toFixed(2)
    } ${units[quotient]!}` as const;
}

type FormatFileSizeBinaryResult =
    | "Invalid file size"
    | `${"-" | ""}${number} ${"bytes" | "KiB" | "MiB" | "GiB" | "TiB" | "PiB" | "EiB" | "ZiB" | "YiB" | "RiB" | "QiB"}`
    | `${"-" | ""}Infinity bytes`;

/**
 * Format file size in binary prefix
 *
 * @param fileSize The file size in bytes to format.
 * @param options The options.
 * @returns The formatted file size.
 */
export function formatFileSizeBinary(fileSize: number | string, options: FormatFileSizeOptions = {}): FormatFileSizeBinaryResult {
    const originalSize: number = Number(fileSize);
    let size: number = Math.abs(originalSize);

    if (Number.isNaN(size)) {
        return "Invalid file size";
    }

    if (originalSize === Infinity) {
        return "Infinity bytes" as const;
    }

    if (originalSize === -Infinity) {
        return "-Infinity bytes" as const;
    }

    if (size === 0) {
        return Object.is(originalSize, -0) ? "-0 bytes" : "0 bytes";
    }

    const units = ["bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB", "RiB", "QiB"] as const;
    let quotient: number = Math.floor(Math.log2(size) / 10);
    quotient = quotient < units.length ? quotient : units.length - 1;
    size /= 1000 ** quotient;

    return `${Math.sign(originalSize) < 0 || Object.is(originalSize, -0) ? "-" : ""}${
        options.trailingZeros && quotient > 0 ? (size.toFixed(2) as `${number}`) : +size.toFixed(2)
    } ${units[quotient]!}` as const;
}

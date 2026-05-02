/* tslint:disable */
/* eslint-disable */

export class ColoredLetter {
    free(): void;
    [Symbol.dispose](): void;
    constructor(color: Colors, letter: string);
    color: Colors;
    letter: string;
}

export enum Colors {
    GREY = 0,
    YELLOW = 1,
    GREEN = 2,
}

export function check_input(input_str: string, correct_word: string): any;

export function get_new_word(): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_coloredletter_free: (a: number, b: number) => void;
    readonly __wbg_get_coloredletter_color: (a: number) => number;
    readonly __wbg_get_coloredletter_letter: (a: number) => number;
    readonly __wbg_set_coloredletter_color: (a: number, b: number) => void;
    readonly __wbg_set_coloredletter_letter: (a: number, b: number) => void;
    readonly check_input: (a: number, b: number, c: number, d: number) => any;
    readonly coloredletter_new: (a: number, b: number) => number;
    readonly get_new_word: () => [number, number];
    readonly main: (a: number, b: number) => number;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;

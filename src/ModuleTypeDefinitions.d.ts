declare module "electron-progressbar" {
    import { app, BrowserWindowConstructorOptions } from "electron";

    class ProgressBar {
        public constructor(options: ProgressBarOptions, electronApp?: typeof app);

        public getOptions(): ProgressBarOptions;

        public on(eventName: "ready" | "progress" | "completed" | "aborted", listener: () => void): this;
        public on(eventName: "progress" | "completed" | "aborted", listener: (value: number) => void): this;

        public setCompleted(): void;

        public close(): void;

        public isInProgress(): boolean;

        public isCompleted(): boolean;

        public value: number;
        public text: string;
        public detail: string;
        public get title(): undefined;
        public set title(title: string);
        public _options: ProgressBarOptions;
    }

    interface ProgressBarOptions {
        abortOnError?: boolean | null | undefined;
        indeterminate?: boolean | null | undefined;
        initialValue?: number | null | undefined;
        maxValue?: number | null | undefined;
        closeOnComplete?: boolean | null | undefined;
        title?: string | null | undefined;
        text?: string | null | undefined;
        detail?: string | null | undefined;
        style?: StyleOptions | null | undefined;
        browserWindow?: BrowserWindowConstructorOptions | null | undefined;
        remoteWindow?: typeof BrowserWindow | null | undefined;
        debug?: boolean | null | undefined;
        lang?: string | null | undefined;
        customHTML?: string | null | undefined;
    }

    interface StyleOptions {
        text?: Partial<CSSStyleDeclaration> | null | undefined;
        detail?: Partial<CSSStyleDeclaration> | null | undefined;
        bar?: Partial<CSSStyleDeclaration> | null | undefined;
        value?: Partial<CSSStyleDeclaration> | null | undefined;
    }

    export = ProgressBar;
}

declare module "binary-xml" {
    export interface BinaryXMLOptions {
        debug?: boolean;
    }

    export interface BinaryXMLAttribute {
        namespaceURI: string;
        nodeType: number;
        nodeName: string;
        name: string;
        value: any;
        typedValue:
            | {
                  value: number;
                  type: "int_dec";
                  rawType: number;
              }
            | {
                  value: number;
                  type: "int_hex";
                  rawType: number;
              }
            | {
                  value: string;
                  type: "string";
                  rawType: number;
              }
            | {
                  value: `resourceId:0x${string}`;
                  type: "reference";
                  rawType: number;
              }
            | {
                  value: boolean;
                  type: "boolean";
                  rawType: number;
              }
            | {
                  value: null;
                  type: "null";
                  rawType: number;
              }
            | {
                  value: string;
                  type: "rgb8";
                  rawType: number;
              }
            | {
                  value: string;
                  type: "rgb4";
                  rawType: number;
              }
            | {
                  value: string;
                  type: "argb8";
                  rawType: number;
              }
            | {
                  value: string;
                  type: "argb4";
                  rawType: number;
              }
            | {
                  value: TypedValueDimension;
                  type: "dimension";
                  rawType: number;
              }
            | {
                  value: TypedValueFraction;
                  type: "fraction";
                  rawType: number;
              }
            | {
                  value: string;
                  type: "unknown";
                  rawType: number;
              };
    }

    /** XXX: There seems to be a mistake in the readDimension function where it has `const unit = dimension.value & 0xff` instead of `const unit = value & 0xff`. */
    export type BinaryXMLTypedValueDimension =
        | {
              value: number;
              unit: null;
              rawUnit: number;
          }
        | {
              value: number;
              unit: "mm";
              rawUnit: number;
          }
        | {
              value: number;
              unit: "px";
              rawUnit: number;
          }
        | {
              value: number;
              unit: "dp";
              rawUnit: number;
          }
        | {
              value: number;
              unit: "sp";
              rawUnit: number;
          }
        | {
              value: number;
              unit: "pt";
              rawUnit: number;
          }
        | {
              value: number;
              unit: "in";
              rawUnit: number;
          };

    export type BinaryXMLTypedValueFraction =
        | {
              value: number;
              type: null;
              rawType: number;
          }
        | {
              value: number;
              type: "%";
              rawType: number;
          }
        | {
              value: number;
              type: "%p";
              rawType: number;
          };

    export interface BinaryXMLChildNode {
        namespaceURI: string;
        nodeType: number;
        nodeName: string;
        attributes: BinaryXMLAttribute[];
        childNodes: BinaryXMLChildNode[];
    }

    export interface BinaryXMLDocument {
        attributes: BinaryXMLAttribute[];
        childNodes: BinaryXMLChildNode[];
        namespaceURI: string | null;
        nodeName: string | null;
        nodeType: number;
    }

    declare class BinaryXmlParser {
        constructor(buffer: Buffer, options?: BinaryXMLOptions);

        parse(): BinaryXMLDocument;
    }

    declare const BinaryXML: typeof BinaryXmlParser;
    export = BinaryXML;
}

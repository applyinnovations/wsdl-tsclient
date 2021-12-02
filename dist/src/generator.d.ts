import { ParsedWsdl } from "./models/parsed-wsdl";
export interface GeneratorOptions {
    emitDefinitionsOnly: boolean;
}
export interface ObjectType {
    [key: string]: any;
}
export declare function generate(parsedWsdl: ParsedWsdl, outDir: string, options: Partial<GeneratorOptions>): Promise<void>;
//# sourceMappingURL=generator.d.ts.map
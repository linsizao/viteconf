/// <reference types="vite/client" />
/**
 * Copied from https://github.com/PuruVJ/macos-web/blob/main/src/global.d.ts
 */

declare module '*&imagetools' {
	/**
	 * actual types
	 * - code https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/output-formats.ts
	 * - docs https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata
	 */
	const out;
	export default out;
}

type ObjectKeys<Obj> = Obj extends object
	? (keyof Obj)[]
	: Obj extends number
	? []
	: Obj extends Array<any> | string
	? string[]
	: never;

interface ObjectConstructor {
	keys<ObjectType>(o: ObjectType): ObjectKeys<ObjectType>;
	entries<ObjType>(
		o: ObjType
	): [Unpacked<ObjectKeys<ObjType>>, ObjType[keyof ObjType]][];
	values<ObjType>(o: ObjType): ObjType[keyof ObjType][];
}

interface Storage {
	getItem<T extends string>(key: string): T | null;
}

type Unpacked<ArrayLike> = ArrayLike extends (infer RootType)[]
	? RootType
	: ArrayLike;

type Unpromisify<PromiseLike> = PromiseLike extends Promise<infer RootType>
	? RootType
	: PromiseLike;

interface Array<T> {
	fill<T extends any>(
		value: T,
		start?: number | undefined,
		end?: number | undefined
	): T[];
}

type Mollerbase<func extends Callback> = {
	[key in string | number]: func
} & ((args: Parameters<func>) => ReturnType<func>)

function mollerbase<func extends Callback> (cb: func): Mollerbase<func> {
	const nothing = {}
	return setmetatable(nothing, {
		__call: (_, ...args: unknown[]) => cb(...args),
		__index: () => (...args: defined[]) => {
			if (args[0] === nothing) args.shift()

			return cb(...args)
		}
	}) as Mollerbase<func>
}

export = mollerbase(mollerbase)

# Strict mode in ts

### strict Property:

    The strict property is a master setting in TypeScript that enables a collection of strict type checking rules. When strict is set to true, TypeScript performs more thorough checks on your code to catch potential bugs during development. Instead of enabling multiple strict options one by one, you can simply enable strict, and TypeScript will automatically turn on several important checks such as strictNullChecks, noImplicitAny, noImplicitThis, strictFunctionTypes, and others. It is recommended for most modern TypeScript projects because it improves code quality and type safety.

### strictNullChecks Property:

    The strictNullChecks property makes TypeScript treat null and undefined as separate types rather than allowing them everywhere. When this option is enabled, variables of type string, number, or any other type cannot be assigned null or undefined unless those values are explicitly included in the type definition. This helps prevent common runtime errors that occur when trying to access properties or methods on null or undefined values.

### noImplicitAny Property:

    The noImplicitAny property prevents TypeScript from automatically assigning the any type when it cannot determine a variable's type. The any type disables type checking and allows any operation, which can lead to bugs. When noImplicitAny is enabled, TypeScript reports an error whenever it would have inferred any, forcing developers to specify the correct type explicitly. This makes the code more predictable and easier to maintain.

### How strict Manages These Properties:

    The strict property acts as a master switch for multiple strict type checking options. When strict is set to true, TypeScript automatically enables strictNullChecks, noImplicitAny, and several other strict checks behind the scenes. This means you do not need to configure each strict option individually. You can think of strict as a single control that activates all major safety features of TypeScript at once, helping developers write more reliable and error free code.

# Why do we need Declaration Merging?

```
--> Suppose you are using a third-party library and it has an existing interface, but you want to add your own custom properties to it without modifying the original code. You can do this easily with Declaration Merging, it lets you reopen it.

--> Trade offs without Declaration Merging:

1. We have to create new interfaces which can make our code messy and inconsistent.

2. Forces us to use any type when we want to add a new property, this completely defeats the purpose of using TypeScript.
```

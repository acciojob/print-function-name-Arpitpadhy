function functionName() {
    // Using arguments.callee.name (works in non-strict mode)
    alert(arguments.callee.name);
}

// Example: calling the function
functionName();

## Example using Cypress GitHub Action when Cypress is installed in a subfolder

### todos

Aplikacja dostępna [tu](http://localhost:4700)

Aplikacja pozwala tworzyć i zarządzać listą zadań. Możliwe są między innymi:

1. New Todo
   - attempt to add todo composed of special characters
   - should allow me to display an empty tab "Completed"
   - try adding todo with one character


```js
let fixture = {
    "specialCharacters": "!@#$%^&*(){}[]_+",
    "oneChar": "a"
}
```

# ComeUp.ch Website

## Develop

1. `yarn`
2. `yarn watch`
3. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode plugin
4. Hit "Go Live" in the status bar

## Image conversion

```sh
./node_modules/sharp-cli/bin/cli.js  -i ./src/images/{input} -o ./src/images/{output} --format {format}
```

*For some reason `yarn sharp` doesn't work*

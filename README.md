## Build

```sh
docker buildx build --no-cache --platform linux/amd64 -t sharp-symbol-issue --load .
```

## Run

```sh
docker run --rm sharp-symbol-issue
```

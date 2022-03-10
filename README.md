docker buildx build --no-cache --platform linux/amd64 -t sharp-symbol-issue --load .
docker run --rm sharp-symbol-issue

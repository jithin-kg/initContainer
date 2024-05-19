FROM golang:1.22.0 as builder

WORKDIR /app

# copy the local code to container image
COPY . .

#build inside the container

RUN CGO_ENABLED=0 GOOS=linux go build -v -o init-service

# use docker multi-stage build to create a lean production image

FROM alpine
WORKDIR /app
COPY --from=builder /app/init-service .

CMD ["./init-service"]
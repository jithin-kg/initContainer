docker build -t golang-init-service:1.0.4 .

docker build -t nodejs-app-service:1.0.3 .


# Set up your shell to use the Minikube Docker daemon
eval $(minikube docker-env)

# Now rebuild your images, and they will be directly available to Minikube
docker build -t golang-init-service:latest .
docker build -t nodejs-app-service:latest .

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

minikube service myapp-service

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


to get pod name and containers name
---------
pods=$(kubectl get pods -o=jsonpath='{.items[*].metadata.name}')
for pod in $pods; do
    echo "Pod: $pod"
    containers=$(kubectl get pod $pod -o=jsonpath='{.spec.containers[*].name}')
    echo "Containers: $containers"
done

Steps to Check Memory Usage for emptyDir (Memory-Backed)
------------
kubectl exec -it <pod-name> -c <container-name> -- /bin/sh
kubectl exec -it myapp-deployment-7f5f9c4d4f-mr5xg -c nodejs-container -- /bin/sh

 Access the Pod
 > kubectl exec -it <pod-name> -c <container-name> -- /bin/sh

 Check Mounted Volumes
> df -h /etc/env




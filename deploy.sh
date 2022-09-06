docker build -t dsincennes/multi-client:latest -t /multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t dsincennes/multi-server:latest -t /multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t dsincennes/multi-worker:latest -t /multi-worker:$SHA -f ./worker/Dockerfile ./worker
docker push dsincennes/multi-client:latest
docker push dsincennes/multi-server:latest
docker push dsincennes/multi-worker:latest

docker push dsincennes/multi-client:$SHA
docker push dsincennes/multi-server:$SHA
docker push dsincennes/multi-worker:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=dsincennes/multi-server:$SHA
kubectl set image deployments/client-deployment client=dsincennes/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=dsincennes/multi-worker:$SHA
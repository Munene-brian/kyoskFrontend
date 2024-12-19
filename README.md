## Angular Kyosk Application
This document provides steps to build, run, and deploy an application locally using Docker and on a Kubernetes cluster using Minikube.

## Prerequisites
Node.js and npm installed locally for development purposes (optional if using Docker).
Docker installed.
Minikube installed and configured.
kubectl installed.

## Steps to Build and Run the Application Locally Using Docker
git clone https://github.com/Munene-brian/kyoskFrontend.git
cd kyoskFrontend

## Build and run the image
 - docker build -t <image_name> .
 - docker run -d -p 4200:80 <image_name>

## Or Pull image my pre-build image from Dockerhub 
 - docker pull 0124578/kyoskfrontend
 - docker run -d -p 4200:80 kyoskfrontend

## Access the application in a browser
 http://localhost:4200

## Steps to Deploy the Application on Minikube
 - Start minikube: minikube start
 - Set Minikube's Docker environment: eval $(minikube docker-env)

## Deploy the application manifest on Minikube:

kubectl apply -f angulardeployement.yml

## Check out K8s objects
minikube dashboard

## Workflow Configuration
Docker Build and Publish Stage:
- Sets up Docker and logs in to Docker Hub.
- Builds and pushes the Docker image to Docker Hub.

### Note
incase of imagepullerror in minikube cluster
- minikube image load <image_name>
to force pull

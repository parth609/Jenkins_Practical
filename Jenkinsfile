pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t YOUR_DOCKER_USERNAME/node-products-api:latest .'
            }
        }

        stage('Docker Hub Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'parthindocker',
                    passwordVariable: 'parthindocker123'
                )]) {
                    bat 'docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%'
                }
            }
        }

        stage('Docker Push') {
            steps {
                bat 'docker push YOUR_DOCKER_USERNAME/node-products-api:latest'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker stop products-api || exit 0'
                bat 'docker rm products-api || exit 0'
                bat 'docker run -d -p 3000:3000 --name products-api YOUR_DOCKER_USERNAME/node-products-api:latest'
            }
        }

        stage('Verify API') {
            steps {
                bat 'curl http://localhost:3000/products'
            }
        }
    }
}
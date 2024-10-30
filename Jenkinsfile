pipeline {
    agent any
    environment {
        AWS_REGION = 'us-east-1'
    }
    stages {
        stage('Cleanup') {
            steps {
                cleanWs()
            }
        }
        stage('Checkout Code') {
            steps {
                git branch: 'prod', url: 'https://github.com/cangle007/hook-architecture.git'
                sh "ls -ltr"
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Use Jenkins credentials to authenticate with Docker registry
                    withCredentials([usernamePassword(credentialsId: 'DockerCredentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        // Docker login using credentials
                        sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'

                        sh '''
                            echo ${DockerCredentials}
                            echo ${DOCKER_USER}
                            echo ${DOCKER_PASS}
                        '''

                        // Build the Docker image from the Dockerfile
                        docker.build('hook-architecture:2.0')
                    }
                }
            }
        }
        stage('Run Build and Upload to S3') {
            steps {
                script {
                    // Use the Docker image built in the previous stage
                    docker.image('hook-architecture:2.0').inside('-v ~/.aws:/root/.aws') {
                        sh '''
                        aws s3 sync /app/build s3://hook-architecture --delete --cache-control "max-age=0, no-cache, no-store, must-revalidate"
                        '''
                    }
                }
            }
        }
    }
}
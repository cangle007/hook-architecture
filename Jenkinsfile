pipeline {
    agent any
    environment {
        AWS_REGION = 'us-east-1'  // Set your AWS region
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
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image from your Dockerfile
                    docker.build('hook-architecture:2.0')
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

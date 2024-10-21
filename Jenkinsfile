pipeline {
    agent any
    environment {
        AWS_REGION = 'us-east-1'  // Set your AWS region
    }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'prod', url: 'https://github.com/cangle007/hook-architecture.git'
            }
        }
        stage('Build and Upload with Docker') {
            steps {
                script {
                    // Ensure AWS credentials are available via the 'withAWS' block
                    withAWS(credentials: 'aws-credentials', region: "$AWS_REGION") {
                        // Run the Docker build and container, mounting necessary directories
                        docker.image('node:18-alpine').inside('-v $WORKSPACE:/app -v /output:/output') {
                            // Build the Docker image
                            sh 'docker build -t react-build .'
                            
                            // Run the Docker container to build the React app
                            sh 'docker run --rm react-build'

                            // Upload the build artifacts to S3
                            sh '''
                            aws s3 cp /output s3://hook-architecture --recursive
                            '''
                        }
                    }
                }
            }
        }
    }
}

pipeline {
    agent any
    environment {
        AWS_REGION = 'us-east-1'
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
                    // Run Docker container for building and uploading
                    docker.image('node:18-alpine').inside('-v $WORKSPACE:/app -v /output:/output') {
                        sh 'docker build -t react-build .'
                        sh 'docker run --rm -v /output:/output react-build'
                    }
                    withAWS(credentials: 'aws-credentials', region: "$AWS_REGION") {
                        echo 'Uploading build to S3...'
                        sh '''
                        aws s3 cp /output s3://hook-architecture --recursive
                        '''
                    }
                }
            }
        }
    }
}

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
        stage('Build and Upload with Docker') {
            steps {
                script {
                    docker.image('node:18-alpine').inside('-v $WORKSPACE:/app -v ~/.aws:/root/.aws -v /output:/output') {
                        sh '''
                        npm install
                        npm run build
                        cp -r ./build /output
                        aws s3 sync /output s3://hook-architecture --delete --cache-control "max-age=0, no-cache, no-store, must-revalidate"
                        '''
                    }
                }
            }
        }
    }
}

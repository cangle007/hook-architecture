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
        stage('Build') {
            steps {
                echo 'Building the prod branch'
                // Add your build steps here (e.g., npm install && npm run build)
            }
        }
        stage('Upload to S3') {
            when {
                branch 'prod'  // Only deploy if the branch is prod
            }
            steps {
                withAWS(credentials: 'aws-credentials', region: "$AWS_REGION") {
                    // Upload the built project to S3 using AWS CLI
                    sh '''
                    aws s3 cp ./build s3://hook-architecture --recursive
                    '''
                }
            }
        }
    }
}

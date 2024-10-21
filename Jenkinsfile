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
                // Add your build steps here
            }
        }
        stage('Upload to S3') {
            when {
                branch 'prod'  // Only deploy if the branch is prod
            }
            steps {
                withAWS(credentials: 'aws-credentials', region: "$AWS_REGION") {
                    // Use AWS CLI Plugin
                    s3Upload(bucket: 'hook-architecture', includePathPattern: 'build/**')
                }
            }
        }
    }
}

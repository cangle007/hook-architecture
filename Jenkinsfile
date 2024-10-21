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
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                // Install npm dependencies
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the React application...'
                // Run the React build process
                sh 'npm run build'
            }
        }
        stage('Upload to S3') {
            when {
                branch 'prod'  // Only deploy if the branch is prod
            }
            steps {
                withAWS(credentials: 'aws-credentials', region: "$AWS_REGION") {
                    // Upload the newly built project to S3
                    sh '''
                    aws s3 cp ./build s3://hook-architecture --recursive
                    '''
                }
            }
        }
    }
}

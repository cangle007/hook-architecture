pipeline {
    agent {
        docker {
            image 'node:16'  // Use the official Node.js Docker image
            args '-u root'   // Run as root to allow package installations
        }
    }
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
                sh 'npm install'  // Install npm dependencies
            }
        }
        stage('Build') {
            steps {
                echo 'Building the React application...'
                sh 'npm run build'  // Run the React build process
            }
        }
        stage('Upload to S3') {
            when {
                branch 'prod'  // Only deploy if the branch is prod
            }
            steps {
                withAWS(credentials: 'aws-credentials', region: "$AWS_REGION") {
                    sh '''
                    aws s3 cp ./build s3://hook-architecture --recursive
                    '''
                }
            }
        }
    }
}

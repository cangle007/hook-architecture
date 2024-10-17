pipeline {
    agent any
    environment {
        AWS_REGION = 'us-west-2'  // Set your AWS region
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
        stage('Deploy to AWS') {
            when {
                branch 'prod'  // Only deploy if the branch is prod
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'aws-credentials', usernameVariable: 'AWS_ACCESS_KEY_ID', passwordVariable: 'AWS_SECRET_ACCESS_KEY')]) {
                    sh '''
                    export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
                    export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
                    aws s3 cp ./build s3://your-bucket --recursive
                    '''
                }
            }
        }
    }
}

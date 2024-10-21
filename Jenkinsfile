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
        stage('Install Node.js') {
            steps {
                script {
                    // Check if Node.js is installed, if not install it
                    if (!fileExists('/usr/bin/node')) {
                        echo "Node.js is not installed, installing..."
                        sh '''
                        curl -sL https://deb.nodesource.com/setup_18.x | bash -
                        apt-get update
                        apt-get install -y nodejs
                        '''
                    } else {
                        echo "Node.js is already installed"
                    }
                }
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
                    echo 'Uploading build to S3...'
                    sh '''
                    aws s3 cp ./build s3://hook-architecture --recursive
                    '''
                }
            }
        }
    }
}

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
                sh '''
                # Check if node is installed, if not install it
                if ! [ -x "$(command -v node)" ]; then
                    echo "Node.js is not installed, installing..."
                    curl -sL https://deb.nodesource.com/setup_16.x | bash -
                    apt-get install -y nodejs
                else
                    echo "Node.js is already installed"
                fi
                '''
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

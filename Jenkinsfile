pipeline {
    agent any
    stages {
        stage('Build') {
            when {
                branch 'integration'
            }
            steps {
                echo 'Building integration branch'
                // Add build steps here
            }
        }
        stage('Deploy') {
            when {
                branch 'prod'
            }
            steps {
                echo 'Deploying prod branch'
                // Add deploy steps here
            }
        }
    }
}

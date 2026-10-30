pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                bat 'node --version'
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
        stage('Result') {
            steps {
                echo 'Build and tests completed successfully.'
            }
        }
    }

    post {
        failure {
            echo 'Pipeline failed - check the Test stage output.'
        }
    }
}

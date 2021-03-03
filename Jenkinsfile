pipeline {
    agent any
    stages {
        stage('install') {
            steps {
                sh 'yarn'
            }
        }
        stage('lint') {
            steps {
                sh 'yarn lint'
            }
        }
    }
}
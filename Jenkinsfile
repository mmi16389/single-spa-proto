pipeline {
    agent {
        label 'docker'
    }
    stages {
        stage('Installation') {
            steps {
                docker --version
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
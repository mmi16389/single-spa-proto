pipeline {
    agent {
        label 'linux'
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
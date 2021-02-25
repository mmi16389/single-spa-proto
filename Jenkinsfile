pipeline {
    agent {
        label 'docker'
    }
    stages {
        stage('Installation') {
            steps {
                npm install
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
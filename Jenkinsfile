pipeline {
    agent {
        label 'node'
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
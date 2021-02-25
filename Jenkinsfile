pipeline {
    agent {
      docker {
        image 'docker'
      }
    }
    stages {
        stage('Installation') {
            steps {
                echo 'Building..'
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
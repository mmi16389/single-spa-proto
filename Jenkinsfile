pipeline {
  agent {
    dockerfile {
      filename 'Jenkinsfile'
    }

  }
  stages {
    stage('Test') {
      steps {
        sh 'node --version'
      }
    }

  }
}
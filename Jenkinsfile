pipeline {
  agent {
    docker {
      image 'node:lts-alpine3.13'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('安装依赖并构建') {
      steps {
        sh 'npm install'
        sh 'ls'
      }
    }

  }
}

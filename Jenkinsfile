pipeline {
  agent {
    docker {
      image 'node:lts-alpine3.13'
    }
  }
  stages {
    stage('安装依赖') {
      steps {
        sh 'npm install'
      }
    }
    stage('构建镜像') {
      steps {
        echo '构建镜像'
        sh 'npm run build'
        sh 'ls'
        sh 'docker build -t test .'
      }
    }
  }
  post {
      always {
        echo '流水线完成'
      }
  }
}

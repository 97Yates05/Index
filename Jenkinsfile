pipeline {
  agent {
    docker {
      image 'node:lts-alpine3.13'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }
  stages {
    stage('构建镜像') {
      steps {
        echo '构建镜像'
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

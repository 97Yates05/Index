pipeline {
  agent {
    docker {
      image 'node:lts-alpine3.13'
    }
  }
  stages {
    stage('构建镜像') {
      docker.build("test")
      steps {
        echo '构建镜像'
        sh 'ls'
        sh '/usr/local/bin/docker build -t test .'
      }
    }
  }
  post {
      always {
        echo '流水线完成'
      }
  }
}

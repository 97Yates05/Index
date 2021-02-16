pipeline {
  agent {
    docker {
      image 'node:lts-alpine3.13'
      args '-v /var/run/docker.sock:/var/run/docker.sock'
    }
  }
  tools {
    dockerTool 'docker'
  }
  stages {
    stage('构建镜像') {
      steps {
        sh 'printenv'
      }
    }
  }
  post {
      always {
        echo '流水线完成'
      }
  }
}

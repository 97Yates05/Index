pipeline {
  agent {
    docker {
      image 'node:lts-alpine3.13'
    }
  }
  stages {
    stage('安装依赖并打包') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('构建镜像') {
      agent { dockerfile true }
    }
  }
  post {
      always {
        echo '流水线完成'
      }
  }
}

pipeline {
  agent none
  stages {
    stage('安装依赖并打包') {
      agent {
        docker { image 'node:lts-alpine3.13' }
      }
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('查看当前目录') {
      steps {
        sh 'ls'
      }
    }
    stage('构建镜像') {
      agent { dockerfile true }
      steps {
        echo '构建镜像'
      }
    }
  }
  post {
      always {
        echo '流水线完成'
      }
  }
}

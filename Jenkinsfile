pipeline {
  agent any
  tools {
    nodejs 'nodejs'
  }
  stages {
    stage('安装依赖') {
      steps {
        sh 'npm install'
      }
    }
    stage('打包') {
      steps {
        sh 'npm build'
      }
    }
    stage('构建镜像') {
      steps {
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

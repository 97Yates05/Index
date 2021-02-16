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
        sh 'npm run build'
      }
    }
    stage('构建镜像') {
      steps {
        sh 'ls'
        sh 'docker build -t personal/website .'
      }
    }
  }
  post {
      always {
        echo '流水线完成'
      }
  }
}

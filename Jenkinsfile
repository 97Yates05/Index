pipeline {
  agent any
  stages {
    stage('安装依赖并打包') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
  }
  post {
      always {
        echo '流水线完成'
      }
  }
}

pipeline {
  agent any
  stages {
    stage('构建镜像') {
      steps {
        sh 'printenv'
        sh 'docker ps'
      }
    }
  }
  post {
      always {
        echo '流水线完成'
      }
  }
}

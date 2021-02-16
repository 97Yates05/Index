pipeline {
  agent {
    docker {
      image 'node:lts-alpine3.13'
    }
  }
  stages {
    stage('构建镜像') {
      steps {
        echo '构建镜像'
        script{
          env.PATH = "/usr/bin:${env.PATH}" //添加了系统环境变量上
        }
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

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
        sh 'docker build -t personal/website .'
      }
    }
    stage('部署镜像') {
      steps {
        sh 'docker container rm -f PersonalWebsite'
        sh 'docker run --net=host --name=PersonalWebsite -d personal/website -c'
      }
    }
  }
  post {
      always {
        echo '流水线完成'
      }
  }
}

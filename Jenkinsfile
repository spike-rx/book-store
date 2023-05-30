pipeline {

  environment {
    dockerImageName = "kennard1999/book-store:test"
    dockerImage = ""
  }

  agent any

  stages {
    stage('Test') {
     steps {
       sh 'docker images'
     }
    }


    stage('Checkout Source') {
      steps {
        git 'https://gitee.com/carry_anyway/book-store.git'
      }
    }

    stage('Build image') {
      steps{
        script {
          docker.withServer('tcp://212.129.223.183:2376/:2376') {
            dockerImage = docker.build dockerImageName
          }
        }
      }
    }

    stage('Pushing Image') {
      environment {
               registryCredential = 'dockerhub-credentials'
           }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("latest")
          }
        }
      }
    }

    stage('Deploying React.js container to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "deployment.yaml", "service.yaml")
        }
      }
    }

  }

}

pipeline {

  environment {
    dockerImageName = "kennard1999/book-store:test"
    dockerImage = ""
  }

  agent any

  stages {
    stage('Checkout Source') {
      steps {
        git 'https://gitee.com/carry_anyway/book-store.git'
      }
    }

    stage('Build image') {
      steps{
        script {
//           docker.withServer('tcp://212.129.223.183:2376/:2376') {
//             dockerImage = docker.build dockerImageName
//           }
                  def remote = [:]
                  remote.name = 'tencent'

                  remote.host ='212.129.223.183'

                  remote.user = 'casher'

                  remote.password ='963100'

                  remote.allowAnyHosts= true
                  sshCommand remote: remote, command: "ls -lrt"
                  sshCommand remote: remote, command: "for i in {1..5}; do echo -n \"Loop \$i \"; date ; sleep 1; done"
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
// node {
//   def remote = [:]
//   remote.name = 'Tencent'
//   remote.host = 'test.domain.com'
//   remote.user = 'root'
//   remote.password = 'password'
//   remote.allowAnyHosts = true
//   stage('Remote SSH') {
//     sshCommand remote: remote, command: "ls -lrt"
//     sshCommand remote: remote, command: "for i in {1..5}; do echo -n \"Loop \$i \"; date ; sleep 1; done"
//   }
// }

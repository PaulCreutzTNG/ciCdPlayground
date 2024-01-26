pipeline {
    agent any

    tools {
        // Install the Maven version configured as "M3" and add it to the path.
       nodejs 'yarn'
    }

    stages {

      stage('checkout') {

        steps {
          git branch: 'main', url: 'https://github.com/PaulCreutzTNG/ciCdPlayground'

          sh 'yarn'
          sh 'yarn build'
        }
      }

      stage('unit test'){
        steps {
          sh 'yarn test'
        }
      }

      stage('integration test') {
        steps {
          sh 'yarn test:e2e'
        }
        post {
          success{
            junit '**/reports/**/*.xml'
          }
        }
      }
    }
}

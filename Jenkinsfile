pipeline {
    agent {
        kubernetes {
            yaml '''
              apiVersion: v1
              kind: Pod
              spec:
                containers:
                - name: nodejs-worker
                  image: node:24-slim
                  command: ["cat"]
                  tty: true
            '''
        }
    }

    stages {
        stage('Test') {
            steps {
                container('nodejs-worker') {
                    sh 'npm test'
                }
            }
        }
    }
}
pipeline {
    agent {
       docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('PM2 Start') {
            steps {
                sh 'pm2 serve build 8082 --spa --name discord'
            }
        }
    }
}
pipeline {
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Publish') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
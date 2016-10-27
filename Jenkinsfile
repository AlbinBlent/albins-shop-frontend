stageUrl = 'localhost:3000'

stage 'CI'
node {
    //checkout scm

    git branch: 'master',
        url: 'https://github.com/AlbinBlent/albins-shop-frontend.git'

    sh 'npm install'

    stash name: 'everything',
            excludes: 'test-results/**',
            includes: '**'

    sh 'npm run test-single-run -- --browsers PhantomJS'


    // archive karma test results (karma is configured to export junit xml files)
        step([$class: 'JUnitResultArchiver',
              testResults: 'test-results/**/test-results.xml'])

    archiveArtifacts artifacts: 'app/**', excludes: null
    publishHTML([allowMissing: true, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'test-reports', reportFiles: 'index.html', reportName: 'Karma test report'])

}

// parallel integration testing
stage 'Browser testing'
parallel chrome: {
    runTests("Chrome")
}, firefox: {
    runTests("Firefox")
}, safari: {
    runTests("Safari")
}

def runTests(browser){
    node {
        sh 'rm -rf'
        unstash 'everything'
        sh "npm run test-single-run -- --browsers ${browser}"

        //        step([$class: 'JUnitResultArchiver',
        //          testResults: 'test-results/**/test-results.xml'])

    }
}

stage 'Deploy'

node {
    sh 'docker-compose up -d --build'
}

input message: "Does ${stageUrl} look ok? Deploy to production?"

dockerLatestTagForProd = "albin/albins-shop-frontend:latest"

node {
    sh 'docker stop albins-shop-frontend-stage'
    sh "docker build -t ${dockerLatestTagForProd} ."
    sh "docker push '${dockerLatestTagForProd}'"
    sh 'docker-cloud service redeploy albins-shop-frontend'
}

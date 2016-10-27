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
    //    step([$class: 'JUnitResultArchiver',
    //          testResults: 'test-results/**/test-results.xml'])

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

input 'Does <a href="localhost:3000">staging</a> look ok? Deploy to production?'

node {
    sh 'docker stop albins-shop-frontend-stage'
    sh "docker build -t albins-shop-frontend:'${env.BUILD_DISPLAY_NAME}'"
    sh 'docker-cloud service redeploy albins-shop-frontend'
}

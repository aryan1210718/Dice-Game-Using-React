@Library("shared-l") _
pipeline {
    agent{ label "jassi"}
    
    stages{
      stage('Code'){ 
          steps{
              script{
                  clone_details("https://github.com/aryan1210718/Dice-Game-Using-React.git","main")
              }
         }
      }
      stage('Build'){
          steps{
              script{
                  build_details("dice-game","latest","aryan1210718")
              }
          }
      }
      stage('Dockerhub Push'){
          steps{
              script{
                  dockerpush_details("dice-game","latest","aryan1210718")
               }
          }
      }
      stage('Deploy'){
           steps{
                echo "Deploying the code"
                    sh '''
                    docker compose down || true
                    docker compose up -d --build
                    '''
             }
       }
    }
}

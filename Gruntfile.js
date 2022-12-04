const {loadNpmTasks}=require("grunt");

module.exports=function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        
        less:{
            development:{
                files:{
                    'dev/styles/main.css':'src/styles/main.less'
                }
            }

        },

        watch:{
            less:{
            files:['src/styles/*.less'],
            tasks:['less']
            },
            uglify:{
                files:['src/scripts/main.js'],
                tasks:['uglify']
            }
           

        },
        uglify:{
            target:{
                files:{
                    'dev/scripts/main.min.js':'src/scripts/main.js'
                }
            }

        }
    

        //criar um index no dev usando o grunp
        //criar um replace para o index gereado

    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-uglify')


    grunt.registerTask('default',['watch'])
    grunt.registerTask('build',['less'])

}
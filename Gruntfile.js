module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat :{
			mixins : {
				src : ['src/_custom.less', 'src/*.less'],
				dest : 'dist/_mixins.less'				
			}
		},
		watch : {
			less : {
				files : ['src/*.less'],
				tasks : ['less', 'clean',  'concat']
			}
		},
		less : {	//scans less files for errors
			mixins : {
				files : {
					'src/temp.css' : "src/*.less"
				}
			}
		},
		clean : ['src/temp.css']
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['less', 'clean', 'concat']);
};
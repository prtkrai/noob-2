/*
 * grunt-typescript-compile
 * https://github.com/jedmao/grunt-typescript
 *
 * Copyright (c) 2014 Jed Mao
 * Licensed under the MIT license.
 */

'use strict';

var ts = require('ts-compiler');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('typescript', 'Grunt plugin to compile TypeScript.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      if (f.dest !== '') {
        options.outDir = f.dest;
      }
      grunt.log.debug('TypeScript flags:', options);

      if (!src.length) {
        grunt.log.debug('No files to compile');
        return;
      }

      ts.compile(src, options, function(err, results) {
        if (err) {
          grunt.log.error(err);
        }
        results.forEach(function(file) {
          grunt.log.writeln('File "' + file.name + '" created.');
        });
      });
    });

  });

};

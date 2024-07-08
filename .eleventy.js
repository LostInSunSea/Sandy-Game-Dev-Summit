const { execSync } = require("child_process");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/font');
  eleventyConfig.addPassthroughCopy('./src/js');

  eleventyConfig.setServerOptions({
    watch: ['./public/css/styles.css']
  });

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}
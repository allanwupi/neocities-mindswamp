export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });

  return {
    dir: {
      output: "_site"
    }
  };
};

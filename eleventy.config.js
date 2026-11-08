export default function(eleventyConfig) {
  // Copy the folder to the output directory (e.g., _site/css/styles.css)
  eleventyConfig.addPassthroughCopy("./css/");
  
  // Optional: Watch the folder so changes trigger a live-reload
  eleventyConfig.addWatchTarget("./css/");
};

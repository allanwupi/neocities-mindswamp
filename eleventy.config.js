export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "src/css": "css" });
    eleventyConfig.addPassthroughCopy({ "src/img": "img" });
    return {
        dir: {
            output: "_site"
        }
    };
};

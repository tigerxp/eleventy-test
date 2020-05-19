module.exports = function(config) {
	config.addCollection('pages', function(collection) {
        return collection
            .getFilteredByGlob(['./src/pages/*.md']);
        });
    
    return {
        dir: {
            input: "src",
            layouts: "_layouts",
            output: "_site"
        }
    }
}

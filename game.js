
// puts letter or _ on command line



var letter = function(let){
	this.character = let;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.character;
	};
};

//constructor export
module.exports = letter;
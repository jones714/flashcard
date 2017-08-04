var cCard = function(text, cloze){
	if( this instanceof cCard){
		if (text!.includes(cloze) ){

			console.log("Error: cloze not found");

		}
		else{
	this.fullText = text;
	this.cloze = cloze;

	this.partial = text.replace(cloze, "...");

	}

	else {
		return new cCard(text,cloze)
	}

}

module.exports = cCard;
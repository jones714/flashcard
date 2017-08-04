var bCard = function(front, back){

	if (this instanceof bCard){

	this.front = front;
	this.back = back;
}
else{ 
	return new bCard(front, back)
}
}

module.exports = bCard
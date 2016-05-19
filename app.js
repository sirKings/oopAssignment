function NotesApplication(author) {
	this.author = author;
	this.notesList = [];
}

NotesApplication.prototype.create = function(note_content){
	this.notesList.push(note_content);
};

NotesApplication.prototype.listNotes = function(){
	if(this.notesList.length>0){
		for(i = 0; i<this.notesList.length; i++){
			console.log("Note ID: " +i);
			console.log(this.notesList[i]);
			console.log("By Author " + this.author );
			
		}
		//this is to give an output for the jasmine test
		return this.notesList;
	}
};

NotesApplication.prototype.get = function(note_id){
	console.log(this.notesList[note_id]);
	//this is output for the jasmine test
	return this.notesList[note_id];
};

NotesApplication.prototype.search = function(search_text){
	var result = "Showing results for search "+ search_text;
	for(i=0; i<this.notesList.length; i++){
		if(this.notesList[i].indexOf(search_text) !== -1){
			var notes = "Note ID: "+i+" "+this.notesList[i]+ " " +"By Author "+this.author;
			result += notes;
			console.log(result);
			//this is output for the jasmine test
			return result;
		}	
	}
	
};

NotesApplication.prototype.delete = function(note_id){
	//created the variable and returned the splice command in order to test it with jasmine
	var note_to_be_deleted;
	if(this.notesList.length> note_id){
		note_to_be_deleted = this.notesList[note_id];
		return this.notesList.splice(note_id, 1);
	}
	
};

NotesApplication.prototype.edit = function(note_id, new_content){
	if(this.notesList.length > note_id){
		this.notesList[note_id] = new_content;
	}
	//this is to give an output for jasmine test
	return this.notesList[note_id];
};

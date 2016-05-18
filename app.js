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
	}
};

NotesApplication.prototype.get = function(note_id){
	console.log(this.notesList[note_id]);
};

NotesApplication.prototype.search = function(search_text){
	var result = "Showing results for search "+ search_text;
	for(i=0; i<this.notesList.length; i++){
		if(this.notesList[i].indexOf(search_text) !== -1){
			var notes = "Note ID: "+i+" "+this.notesList[i]+ " " +"By Author "+this.author;
			result += notes;
			console.log(result);
		}	
	}
	
};

NotesApplication.prototype.delete = function(note_id){
	if(this.notesList.length> note_id)
	this.notesList.splice(note_id, 1);
};

NotesApplication.prototype.edit = function(note_id, new_content){
	if(this.notesList.length > note_id){
		this.notesList[note_id] = new_content;
	}
};

var peete = new NotesApplication("peete");
peete.create("hi, this is andela bootcamp");
peete.create("hi, i love andela bootcamp3");
peete.create("hi, this is andela bootcamp1");
peete.get(1);
peete.search("love");
peete.delete(2);
peete.edit(1, "no love lost, no  love found");


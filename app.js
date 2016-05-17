function NotesApplication(author) {
	this.author = author;
	this.notesList = [];
}

NotesApplication.prototype.create(note_content){
	this.notesList.push(note_content)
}

NotesApplication.prototype.listNotes(){
	if(this.notesList.length>0){
		for(i = 0; i<this.notesList.length; i++){
			console.log("Note ID: " +i)
			console.log(this.notesList[i])
			console.log("By Author " + this.author );
		}
	}
}

NotesApplication.prototype.get(note_id){
	return this.notesList[note_id];
}

NotesApplication.prototype.search(search_text){
	var result = "Showing results for search"
	for(i=0; i<this.notesList.length; i++){
		if(this.notesList.indexOf(search_text) !== -1){
			
		}
	}
}
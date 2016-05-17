function NotesApplication(author) {
	this.author = author;
	this.notesList = [];
}

NotesApplication.prototype.create(note_content){
	this.notesList.push(note_content)
}

NotesApplication.prototype.listNotes(){
	for(i = 0; i<this.notesList.length; i++){
		console.log("Note ID: " +i)
		console.log(this.notesList[i])
		console.log("By Author " + this.author );
	}
	
}
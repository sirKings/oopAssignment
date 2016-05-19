describe('NotesApplication', function(){


	notesapp = new NotesApplication("notesapp");
	it('should have the property author', function(){
		expect(notesapp.hasOwnProperty('author')).toBe(true);
	});

	it('should have the property notesList', function(){
		expect(notesapp.hasOwnProperty('notesList')).toBe(true);
	});

	describe('the NotesApplication object', function(){
		it('should be able to create a note with an entry in the noteslist', function(){
			expect(notesapp.create("hjfgj")).toBe(notesapp.notesList["hjfgj"])
		});

		it('should be able to list all the notes in the noteslist', function(){
			expect(notesapp.listNotes()).toContain(notesapp.notesList[0])
		});

		it('should be able to get the note with that id from the notesList', function(){
			var note_id;
			expect(notesapp.get(note_id)).toBe(notesapp.notesList[note_id])
		});

		it('should be able to return all notes in the notesList that contain the search_text', function(){
		 	notesapp.create("hello world");
		 	expect(notesapp.search("hello")).toMatch("hello");
		 });

		it('should delete the note with the given id', function(){
			//notesapp.delete(note_id);
			var note_id, 
				note_to_be_deleted = notesapp.notesList[note_id];
			expect(notesapp.delete(note_id)).toEqual(note_to_be_deleted);
		})

		it('should replace the note with the given id with the new_content', function(){
			var note_id, new_content;
			expect(notesapp.edit(note_id, new_content)).toBe(notesapp.notesList[note_id]);
		})
	});

	// describe('the NotesApplication object', function(){

	// })

	// it('should return NaN', function(){
	// 	expect(arraySum([1, 2, "Micheal"])).toBeNaN();
	// });
})
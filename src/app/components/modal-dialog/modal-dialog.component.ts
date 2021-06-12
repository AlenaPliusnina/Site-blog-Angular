import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})

export class ModalDialogComponent implements OnInit {
	@Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

	confirm() {
		this.isConfirmed.emit(true);
	}
	close() {
		this.isConfirmed.emit(false);
	}

  constructor() { }

  ngOnInit(): void {
  }

}

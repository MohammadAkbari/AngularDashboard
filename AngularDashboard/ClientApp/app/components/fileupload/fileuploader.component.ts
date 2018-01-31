import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "file-uploader",
    templateUrl: "fileuploader.html",
    styleUrls: ["./fileuploader.component.css"]
})
export class FileUploaderComponent {
    @Input() allowMultiple: boolean;
    @Input() fileType: string;
    @Input() required: boolean;
    @Input() maxSizeInKb: number;
    @Output() onSelection = new EventEmitter<FileList>();
    displayedText: string = "";

    fileList: FileList|null;

    fileChange(event: any) {
        this.fileList = event.target.files;
        let filetypeToCompare = this.fileType.replace('*', '');

        let hasFile = this.fileList && this.fileList.length > 0;

        if (hasFile && this.fileList != null) {
            if (filetypeToCompare != "application/" && this.fileList[0].type.indexOf(filetypeToCompare) == -1) {
                this.fileList = null;
                this.displayedText = "";
            }


            if (this.maxSizeInKb && this.fileList != null)
                for (let i = 0; i < this.fileList.length; i++) {
                    if (this.fileList[i].size > this.maxSizeInKb * 1024) {
                        alert(`File size is more than ${this.maxSizeInKb} Kb`);
                        this.fileList = null;
                        this.displayedText = "";
                        return false;
                    }
                }

            if (this.fileList != null) {
                let multipleFile = this.fileList.length > 1;

                if (multipleFile) {
                    this.displayedText = this.fileList.length + ' file(s) has been selected';
                }
                else {
                    let file: File = this.fileList[0];
                    this.displayedText = file.name;
                }

                this.onSelection.emit(this.fileList);
            }
        }
    }
}
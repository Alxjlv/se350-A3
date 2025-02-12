// Load elements from DOM
const tags = document.querySelectorAll(".tags-btn")
const files = document.querySelectorAll(".file-card");
const shareDialog = document.getElementsByClassName("dialog-share")[0];
const dialogBackground = document.getElementsByClassName("dialog-background")[0];
const successDialog = document.getElementsByClassName("dialog-success")[0];

// Initialise data structures
const tagDetails = {
    "code": {
        "name": "Code",
        "colour": "blue",
        "files": [
            "index.html"
        ]
    },
    "deliverable": {
        "name": "Deliverable",
        "colour": "purple",
        "files": [
            "index.html",
            "se350A3"
        ]
    },
    "asset": {
        "name": "Asset",
        "colour": "teal",
        "files": [
            "usageTesting",
            "design-sketch.jpg"
        ]
    },
    "in-progress": {
        "name": "In progress",
        "colour": "orange",
        "files": [
            "index.html",
            "se350A3"
        ]
    },
    "needs-review": {
        "name": "Needs review",
        "colour": "red",
        "files": null
    },
    "done": {
        "name": "Done",
        "colour": "green",
        "files": [
            "usageTesting"
        ]
    },
    "untagged": {
        "name": "Untagged",
        "colour": null,
        "files": null
    }
};
const fileDetails = {
    "index.html": {
        "filename": "index.html",
        "preview-image": "images/preview-index.png",
        "tags": [
            "code",
            "deliverable",
            "in-progress"
        ],
        "type": "HTML Document",
        "size": "420.69 KB",
        "date-modified": "3 Jun 2020 10:09 pm",
        "date-created": "1 Jun 2020 2:26 pm",
        "word-count": "—",
        "sharing": [
            [
                {
                    "initial": "DK",
                    "description": "Di Kun Ong is the owner"
                },
            ],
            [
                {
                    "initial": "TF",
                    "description": "Tait Fuller can edit"
                }
            ]
        ],
        "progress": {
            "percentage": "69%",
            "tasks": [
                {
                    "name": "Design grid structure",
                    "completed": true
                },
                {
                    "name": "Navigation bar",
                    "completed": true
                },
                {
                    "name": "Timeline section",
                    "completed": true
                },
                {
                    "name": "Folders section",
                    "completed": true
                },
                {
                    "name": "Files section",
                    "completed": true
                },
                {
                    "name": "Replace folders with tags",
                    "completed": false
                },
                {
                    "name": "Details section",
                    "completed": false
                },
                {
                    "name": "Toolbar",
                    "completed": false
                }
            ]
        },
        "version-history": {
            "type": "text",
                "versions": [
                {
                    "date": "3 Jun 2020 10:09 pm",
                    "additions": "403",
                    "deletions": "115"
                },
                {
                    "date": "2 Jun 2020 11:54 am",
                    "additions": "0",
                    "deletions": "55"
                },
                {
                    "date": "2 Jun 2020 12:42 am",
                    "additions": "98",
                    "deletions": "14"
                },
                {
                    "date": "1 Jun 2020 2:26 pm",
                    "additions": "222",
                    "deletions": "0"
                }
            ]
        }
    },
    "se350A3": {
        "filename": "SE350 Assignment 3 - Group 1.docx",
        "preview-image": "images/preview-report.png",
        "tags": [
            "deliverable",
            "in-progress"
        ],
        "type": "Microsoft Word Document",
        "size": "89.40 KB",
        "date-modified": "5 Jun 2020 12:45 pm",
        "date-created": "1 Jun 2020 3:42 pm",
        "word-count": "1917",
        "sharing": [
            [
                {
                    "initial": "AV",
                    "description": "Alex Verkerk is the owner"
                }
            ],
            [
                {
                    "initial": "OC",
                    "description": "Oliver Chamberlain can edit"
                }
            ]
        ],
        "progress": {
            "percentage": "15%",
            "tasks": [
                {
                    "name": "Write outline",
                    "completed": true
                },
                {
                    "name": "Brainstorm user needs",
                    "completed": false
                },
                {
                    "name": "Write user needs section",
                    "completed": false
                },
                {
                    "name": "Write prototype user description",
                    "completed": false
                },
                {
                    "name": "Design testing protocol",
                    "completed": false
                },
                {
                    "name": "Write testing section",
                    "completed": false
                },
                {
                    "name": "Proofread",
                    "completed": false
                }
            ]
        },
        "version-history": {
            "type": "text",
            "versions": [
                {
                    "date": "5 Jun 2020 12:45 pm",
                    "additions": "859",
                    "deletions": "56"
                },
                {
                    "date": "4 Jun 2020 8:13 pm",
                    "additions": "600",
                    "deletions": "0"
                },
                {
                    "date": "1 Jun 2020 10:30 am",
                    "additions": "458",
                    "deletions": "0"
                }
            ]
        }
    },
    "usageTesting": {
        "filename": "Usage testing invitation.docx",
        "preview-image": "images/preview-invite.png",
        "tags": [
            "asset",
            "done"
        ],
        "type": "Microsoft Word Document",
        "size": "25.63 KB",
        "date-modified": "4 Jun 2020 3:15 pm",
        "date-created": "2 Jun 2020 7:04 pm",
        "word-count": "694",
        "sharing": [
            [
                {
                    "initial": "AV",
                    "description": "Alex Verkerk is the owner"
                }
            ],
            [
                {
                    "initial": "DK",
                    "description": "Di Kun Ong can edit"
                },
                {
                    "initial": "OC",
                    "description": "Oliver Chamberlain can edit"
                },
                {
                    "initial": "TF",
                    "description": "Tait Fuller can edit"
                }
            ],
            [
                {
                    "initial": "DL",
                    "description": "Danielle Lottridge can comment"
                },
                {
                    "initial": "GW",
                    "description": "Gerald Weber can comment"
                }
            ]
        ],
        "progress": {
            "percentage": "100%",
            "tasks": [
                {
                    "name": "Select user participants",
                    "completed": true
                },
                {
                    "name": "Write testing invitation",
                    "completed": true
                },
                {
                    "name": "Proofread",
                    "completed": true
                }
            ]
        },
        "version-history": {
            "type": "text",
            "versions": [
                {
                    "date": "4 Jun 2020 3:15 pm",
                    "additions": "486",
                    "deletions": "27"
                },
                {
                    "date": "2 Jun 2020 7:59 pm",
                    "additions": "235",
                    "deletions": "0"
                }
            ]
        }
    },
    "design-sketch.jpg": {
        "filename": "design-sketch.jpg",
        "preview-image": "images/preview-sketch.png",
        "tags": [
            "asset"
        ],
        "type": "JPEG File",
        "size": "2.68 MB",
        "date-modified": "1 Jun 2020 5:12 pm",
        "date-created": "1 Jun 2020 5:12 pm",
        "word-count": "—",
        "sharing": [
            [
                {
                    "initial": "DK",
                    "description": "Di Kun Ong is the owner"
                }
            ]
        ],
        "progress": null,
        "version-history": {
            "type": "binary",
            "versions": [
                {
                    "date": "1 Jun 2020 5:12 pm",
                    "additions": "",
                    "deletions": ""
                }
            ]
        }
    }
};

// Adds the .tags-btn__selected class to a given tag to indicate it as being selected
function indicateSelectedTag(tag) {
    clearSelectedTags();
    tag.classList.add("tags-btn__selected");
}

// Removes the .tags-btn__selected class from all tags
function clearSelectedTags() {
    tags.forEach(tag => {tag.classList.remove("tags-btn__selected")});
}

// Hides all files
function hideAllFiles() {
    files.forEach(file => {file.style.display = 'none'});
}

// Called by the "Show all" button to select the button and show all files
function showAllFiles(tag) {
    indicateSelectedTag(tag);
    files.forEach(file => {file.style.display = 'inline-grid'});
}

// Called by tag buttons to select the tag and show related files
function selectTag(tag) {
    indicateSelectedTag(tag);
    hideAllFiles();
    var files = tagDetails[tag.id].files;
    if (files != null) {
        files.forEach(fileId => {
            document.getElementById(fileId).style.display = 'inline-grid'
        });
    }
}

// Renders HTML for the details pane
function renderDetailsHTML(fileId) {
    var details = fileDetails[fileId];

    var html = "";

    // Preview image
    if (details['preview-image'] == null) {
        html += '<div class="detail-preview">No preview available.</div>';
    } else {
        html += '<img class="detail-preview-img" src="' + details['preview-image'] + '">';
    }

    html += '<div class="container">';

    // Filename
    html += '<h3 class="detail-filename">' + details['filename'] + '</h3>';
    
    // Metadata Block
    html += '<div class="detail-block">';
    // Tags
    html += '<div class="detail-tag-container">';
    details['tags'].forEach(tag => {
        html += '<div class="tag tag-' + tagDetails[tag].colour + '"> ' + tagDetails[tag].name + ' <i class="fa fa-times" aria-hidden="true"></i></div>'
    });
    html += '<div class="tag tag-add"><i class="fa fa-plus" aria-hidden="true"></i> Add tag... </div>';
    html += '</div>';
    // Type
    html += '<div class="detail-attribute">';
    html += '<div class="detail-attr-label">Type</div>';
    html += '<div class="detail-attr-data">' + details['type'] + '</div>';
    html += '</div>';
    // Size
    html += '<div class="detail-attribute">';
    html += '<div class="detail-attr-label">Size</div>';
    html += '<div class="detail-attr-data">' + details['size'] + '</div>';
    html += '</div>';
    // Date modified
    html += '<div class="detail-attribute">';
    html += '<div class="detail-attr-label">Date modified</div>';
    html += '<div class="detail-attr-data">' + details['date-modified'] + '</div>';
    html += '</div>';
    // Date created
    html += '<div class="detail-attribute">';
    html += '<div class="detail-attr-label">Date created</div>';
    html += '<div class="detail-attr-data">' + details['date-created'] + '</div>';
    html += '</div>';
    // Word count
    html += '<div class="detail-attribute">';
    html += '<div class="detail-attr-label">Word count</div>';
    html += '<div class="detail-attr-data">' + details['word-count'] + '</div>';
    html += '</div>';
    html += '</div>';

    // Sharing block
    html += '<div class="detail-block">';
    html += '<h5 class="detail-subheading">SHARING</h5>';
    html += '<div class="persons-container">';
    var sharing = details.sharing;
    for (let i = 0; i < sharing.length; i++) {
        for (let j = 0; j < sharing[i].length; j++) {
            let role = sharing[i][j];
            let needsSeperator = (j == sharing[i].length - 1) && (i != sharing.length - 1);

            html += needsSeperator ? '<div class="person-separator">' : '';
            html += '<div class="person person-large" title="' + role.description + '">' + role.initial + '</div>';
            html += needsSeperator ? '</div>' : '';
        }
    }
    html += '</div>';
    html += '</div>';

    // Progress block
    if (details.progress != null) {
        html += '<div class="detail-block">';
        html += '<h5 class="detail-subheading">PROGRESS</h5>';
        html += '<div class="progress-container">';
        html += '<i class="fa fa-line-chart progress-icon" aria-hidden="true"></i>';
        html += '<div class="progress-bar">';
        html += '<span class="progress-bar-fill" style="width: ' + details.progress.percentage + '"></span>';
        html += '</div>';
        html += details.progress.percentage;
        html += '</div>';
        details.progress.tasks.forEach(task => {
            html += '<div class="detail-task">';
            html += '<input type="checkbox"' + (task.completed ? ' checked="checked"' : '') + '>';
            html += task.name;
            html += '</div>';
        })
        html += ' <div class="detail-task detail-task-edit">';
        html += '<i class="fa fa-pencil" aria-hidden="true"></i>';
        html += 'Edit tasks...';
        html += '</div>';
        html += '</div>';
    }

    // Versions block
    html += '<div class="detail-block detail-block-last">';
    html += '<h5 class="detail-subheading">VERSION HISTORY</h5>';
    details['version-history'].versions.forEach(version => {
        html += '<div class="detail-history">';
        html += '<div class="detail-history-icon">';
        html += '<i class="fa fa-history" aria-hidden="true"></i>';
        html += '</div>';
        html += '<div class="detail-history-time">';
        html += version.date;
        html += '</div>';
        if (details['version-history'].type == 'text') {
            html += '<div class="detail-history-diff">';
            html += '<span class="detail-history-add">+' + version.additions + '</span> ';
            html += '<span class="detail-history-del">-' + version.deletions + '</span>';
            html += '</div>';
        }
        html += '</div>';
    });
    html += '</div>';

    html += '</div>';

    document.getElementsByClassName("col-details")[0].innerHTML = html;
}

// Selects a file and displays its data in the details pane
function selectFile(file) {
    files.forEach(file => {file.classList.remove("file-card__selected")});
    file.classList.add("file-card__selected");

    renderDetailsHTML(file.id);
}

// Opens the sharing dialog
function openShareDialog() {
    shareDialog.classList.add("dialog__show");
    dialogBackground.classList.add("dialog__show");
}

// Closes the sharing dialog
function closeShareDialog() {
    shareDialog.classList.add("dialog-share__hide");
    dialogBackground.classList.add("dialog-background__hide");
    // Timeout for closing animations
    setTimeout(() => {
        shareDialog.classList.remove("dialog__show");
        dialogBackground.classList.remove("dialog__show");
        shareDialog.classList.remove("dialog-share__hide");
        dialogBackground.classList.remove("dialog-background__hide");
    }, 200);
    
}

// Submits the sharing dialog
function submitShareDialog() {
    closeShareDialog();
    successDialog.classList.add("dialog__show");
    // Timeout for closing animations
    setTimeout(closeSuccessDialog, 5000);
}

// Closes the success dialog
function closeSuccessDialog() {
    successDialog.classList.add("dialog-success__hide");
    // Timeout for autohide and closing animations
    setTimeout(() => {
        successDialog.classList.remove("dialog__show");
        successDialog.classList.remove("dialog-success__hide");
    }, 200);
    
}
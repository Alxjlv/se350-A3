const tags = document.querySelectorAll(".tags-btn")
const files = document.querySelectorAll(".file-card");

const shareDialog = document.getElementsByClassName("dialog-share")[0];
const dialogBackground = document.getElementsByClassName("dialog-background")[0];
const successDialog = document.getElementsByClassName("dialog-success")[0];

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
        "files": null
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
        "preview-image": null,
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
            {
                "initial": "DK",
                "description": "Di Kun Ong is the owner"
            },
            {
                "initial": "TF",
                "description": "Tait Fuller can edit"
            }
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
        "version-type": "text",
        "version-history": {
            "type": "text",
                "versions": [
                {
                    "date": "3 Jun 2020 10:09pm",
                    "additions": "403",
                    "deletions": "115"
                },
                {
                    "date": "2 Jun 2020 11:54am",
                    "additions": "0",
                    "deletions": "55"
                },
                {
                    "date": "2 Jun 2020 12:42am",
                    "additions": "98",
                    "deletions": "14"
                },
                {
                    "date": "1 Jun 2020 2:26pm",
                    "additions": "222",
                    "deletions": "0"
                }
            ]
        }
    },
    "se350A3": {
        "filename": "",
        "preview-image": null,
        "tags": [
            ""
        ],
        "type": "",
        "size": "",
        "date-modified": "",
        "date-created": "",
        "word-count": "",
        "sharing": [
            {
                "initial": "",
                "description": "r"
            }
        ],
        "progress": {
            "percentage": "%",
            "tasks": [
                {
                    "name": "",
                    "completed": false
                }
            ]
        },
        "version-type": "text",
        "version-history": {
            "type": "text",
            "versions": [
                {
                    "date": "",
                    "additions": "",
                    "deletions": ""
                }
            ]
        }
    },
    "usageTesting": {
        "filename": "",
        "preview-image": null,
        "tags": [
            ""
        ],
        "type": "",
        "size": "",
        "date-modified": "",
        "date-created": "",
        "word-count": "",
        "sharing": [
            {
                "initial": "",
                "description": "r"
            }
        ],
        "progress": {
            "percentage": "%",
            "tasks": [
                {
                    "name": "",
                    "completed": false
                }
            ]
        },
        "version-type": "text",
        "version-history": {
            "type": "text",
            "versions": [
                {
                    "date": "",
                    "additions": "",
                    "deletions": ""
                }
            ]
        }
    },
    "design-sketch.jpg": {
        "filename": "design-sketch.jpg",
        "preview-image": null,
        "tags": [
            "asset"
        ],
        "type": "",
        "size": "",
        "date-modified": "",
        "date-created": "",
        "word-count": "",
        "sharing": [
            {
                "initial": "DK",
                "description": "Di Kun Ong is the owner"
            }
        ],
        "progress": null,
        "version-history": {
            "type": "binary",
            "versions": [
                {
                    "date": "",
                    "additions": "",
                    "deletions": ""
                }
            ]
        }
    }
};

function indicateSelectedTag(tag) {
    clearSelectedTags();
    tag.classList.add("tags-btn__selected");
}

function clearSelectedTags() {
    tags.forEach(tag => {tag.classList.remove("tags-btn__selected")});
}

function showAllFiles(tag) {
    indicateSelectedTag(tag);
    files.forEach(file => {file.style.display = 'inline-grid'});
}

function hideAllFiles() {
    files.forEach(file => {file.style.display = 'none'});
}

function showTagFiles(tagId) {
    hideAllFiles();
    var files = tagDetails[tagId].files;
    if (files != null) {
        files.forEach(fileId => {
            document.getElementById(fileId).style.display = 'inline-grid'
        });
    }
}

function selectTag(tag) {
    indicateSelectedTag(tag);
    showTagFiles(tag.id);
}

function renderDetailsHTML(fileId) {
    var details = fileDetails[fileId];

    var html = "";

    if (details['preview-image'] == null) {
        html += '<div class="detail-preview">No preview available.</div>';
    } else {
        // TODO
        html += '<div class="detail-preview">No preview available.</div>';
    }
    html += '<div class="container">';

    html += '<h3 class="detail-filename">' + details['filename'] + '</h3>';
    
    html += '<div class="detail-block">';

    html += '<div class="detail-tag-container">';
    details['tags'].forEach(tag => {
        html += '<div class="tag tag-' + tagDetails[tag].colour + '"> ' + tagDetails[tag].name + ' <i class="fa fa-times" aria-hidden="true"></i></div>'
    });
    html += '<div class="tag tag-add"><i class="fa fa-plus" aria-hidden="true"></i> Add tag... </div>';
    html += '</div>';

    html += '<div class="detail-attribute">';
    html += '<div class="detail-attr-label">Type</div>';
    html += '<div class="detail-attr-data">' + details['type'] + '</div>';
    html += '</div>';

    html += '<div class="detail-attribute">';
    html += '<div class="detail-attr-label">Size</div>';
    html += '<div class="detail-attr-data">' + details['size'] + '</div>';
    html += '</div>';

    html += '<div class="detail-attribute">';
    html += '<div class="detail-attr-label">Date modified</div>';
    html += '<div class="detail-attr-data">' + details['date-modified'] + '</div>';
    html += '</div>';

    html += '<div class="detail-attribute">';
    html += '<div class="detail-attr-label">Date created</div>';
    html += '<div class="detail-attr-data">' + details['date-created'] + '</div>';
    html += '</div>';

    html += '<div class="detail-attribute">';
    html += '<div class="detail-attr-label">Word count</div>';
    html += '<div class="detail-attr-data">' + details['word-count'] + '</div>';
    html += '</div>';

    html += '</div>';

    html += '<div class="detail-block">';
    html += '<h5 class="detail-subheading">SHARING</h5>';
    html += '<div class="persons-container">';
    var sharing = details.sharing;
    html += sharing.length > 1 ? '<div class="person-separator">' : '';
    html += '<div class="person person-large" title="' + sharing[0].description + '">' + sharing[0].initial + '</div>';
    html += sharing.length > 1 ? '</div>' : '';
    for (let i = 1; i < sharing.length; i++) {
        html += '<div class="person person-large" title="' + sharing[i].description + '">' + sharing[i].initial + '</div>';
    }
    html += '</div>';
    html += '</div>';

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

function selectFile(file) {
    files.forEach(file => {file.classList.remove("file-card__selected")});
    file.classList.add("file-card__selected");

    renderDetailsHTML(file.id);
}

function openShareDialog() {
    shareDialog.classList.add("dialog__show");
    dialogBackground.classList.add("dialog__show");
}

function closeShareDialog() {
    shareDialog.classList.add("dialog-share__hide");
    dialogBackground.classList.add("dialog-background__hide");
    setTimeout(() => {
        shareDialog.classList.remove("dialog__show");
        dialogBackground.classList.remove("dialog__show");
        shareDialog.classList.remove("dialog-share__hide");
        dialogBackground.classList.remove("dialog-background__hide");
    }, 200);
    
}

function submitShareDialog() {
    closeShareDialog();
    successDialog.classList.add("dialog__show");
    setTimeout(closeSuccessDialog, 5000);
}

function closeSuccessDialog() {
    successDialog.classList.add("dialog-success__hide");
    setTimeout(() => {
        successDialog.classList.remove("dialog__show");
        successDialog.classList.remove("dialog-success__hide");
    }, 200);
    
}
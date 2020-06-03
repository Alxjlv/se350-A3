const tags = {
    "code": [
        "index.html"
    ],
    "deliverable": null,
    "asset": [
        "usageTesting",
        "design-sketch.jpg"
    ],
    "in-progress": [
        "index.html",
        "se350A3"
    ],
    "needs-review": null,
    "done": [
        "usageTesting"
    ],
    "untagged": null
}

const files = document.querySelectorAll(".file-card");

function showAllFiles() {
    files.forEach(file => {file.style.display = 'inline-grid'});
}

function hideAllFiles() {
    files.forEach(file => {file.style.display = 'none'});
}

function showTagFiles(tag) {
    hideAllFiles();
    var tagId = tag.id;
    if (tags[tagId] != null) {
        tags[tagId].forEach(fileId=> {
            document.getElementById(fileId).style.display = 'inline-grid'
        });
    }
}
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

function showTagFiles(tagName) {
    hideAllFiles();
    if (tags[tagName] != null) {
        tags[tagName].forEach(id=> {
            document.getElementById(id).style.display = 'inline-grid'
        });
    }
}
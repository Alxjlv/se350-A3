const tagFiles = {
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

const tags = document.querySelectorAll(".tags-btn")
const files = document.querySelectorAll(".file-card");

function indicateTag(tag) {
    clearTags();
    tag.classList.add("tags-btn__selected");
}

function clearTags() {
    tags.forEach(tag => {tag.classList.remove("tags-btn__selected")});
}

function showAllFiles(tag) {
    indicateTag(tag);
    files.forEach(file => {file.style.display = 'inline-grid'});
}

function hideAllFiles() {
    files.forEach(file => {file.style.display = 'none'});
}

function showTagFiles(tagId) {
    hideAllFiles();
    if (tagFiles[tagId] != null) {
        tagFiles[tagId].forEach(fileId=> {
            document.getElementById(fileId).style.display = 'inline-grid'
        });
    }
}

function selectTag(tag) {
    indicateTag(tag);
    showTagFiles(tag.id);
}
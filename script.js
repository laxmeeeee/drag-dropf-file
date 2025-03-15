document.getElementById("browseBtn").addEventListener("click", () => {
    document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", (event) => {
    handleFiles(event.target.files);
});

document.getElementById("dragArea").addEventListener("drop", (event) => {
    event.preventDefault();
    handleFiles(event.dataTransfer.files);
});

document.getElementById("dragArea").addEventListener("dragover", (event) => {
    event.preventDefault();
});

function handleFiles(files) {
    for (let file of files) {
        uploadFile(file);
    }
}

function uploadFile(file) {
    let uploadList = document.getElementById("uploadList");
    let fileItem = document.createElement("div");
    fileItem.className = "file-item";
    fileItem.innerHTML = `<p>${file.name}</p><div class='progress'><div class='progress-bar'></div></div>`;
    uploadList.appendChild(fileItem);
    
    let progressBar = fileItem.querySelector(".progress-bar");
    let progress = 0;
    let interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            alert("File Uploaded Successfully")
        } else {
            progress += 10;
            progressBar.style.width = progress + "%";
        }
    }, 300);
}
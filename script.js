var searchImageVersionEl = document.getElementById("searchImageVersion");
var compareBuildsEl = document.getElementById("compareBuilds");
var showReleaseNotesEl = document.getElementById("showReleaseNotes");
var reportsEl = document.getElementById("reports");
var syncDataEl = document.getElementById("syncData");

var imageSectionEl = document.getElementById("imageSection");
var compareBuildsSectionEl = document.getElementById("compareBuildsSection");
var releaseNotesSectionEl = document.getElementById("releaseNotesSection");
var reportsSectionEl = document.getElementById("reportsSection");
var syncDataSectionEl = document.getElementById("syncDataSection");

var imageInputEl = document.getElementById("imageInput");
var spinnerEl = document.getElementById("spinner");
var searchResultsEl = document.getElementById("searchResults");
var onSubmitBtn = document.getElementById("onSubmit");

//date input validation:
function validateDateFormat() {
    var regExp = /^[0-9. a-z A-Z]+$/;
    if (!regExp.test(imageInputEl.value)) {
        alert("Enter valid date format");
        imageInput.style.border = "2px solid red";
        return false;

    }
    imageInput.style.border = "2px solid green";
}


//Creating Tabs
compareBuildsSectionEl.classList.add("d-none");
releaseNotesSectionEl.classList.add("d-none");
reportsSectionEl.classList.add("d-none");
syncDataSectionEl.classList.add("d-none");

function imageSectionTab() {
    imageSectionEl.classList.remove("d-none");
    compareBuildsSectionEl.classList.add("d-none");
    releaseNotesSectionEl.classList.add("d-none");
    reportsSectionEl.classList.add("d-none");
    syncDataSectionEl.classList.add("d-none");

    searchImageVersionEl.classList.add("selectedTab");
    compareBuildsEl.classList.remove("selectedTab");
    showReleaseNotesEl.classList.remove("selectedTab");
    reportsEl.classList.remove("selectedTab");
    syncDataEl.classList.remove("selectedTab");
}

function compareBuildsSectionTab() {
    imageSectionEl.classList.add("d-none");
    compareBuildsSectionEl.classList.remove("d-none");
    releaseNotesSectionEl.classList.add("d-none");
    reportsSectionEl.classList.add("d-none");
    syncDataSectionEl.classList.add("d-none");

    searchImageVersionEl.classList.remove("selectedTab");
    compareBuildsEl.classList.add("selectedTab");
    showReleaseNotesEl.classList.remove("selectedTab");
    reportsEl.classList.remove("selectedTab");
    syncDataEl.classList.remove("selectedTab");
}

function showReleaseNotesTab() {
    imageSectionEl.classList.add("d-none");
    compareBuildsSectionEl.classList.add("d-none");
    releaseNotesSectionEl.classList.remove("d-none");
    reportsSectionEl.classList.add("d-none");
    syncDataSectionEl.classList.add("d-none");

    searchImageVersionEl.classList.remove("selectedTab");
    compareBuildsEl.classList.remove("selectedTab");
    showReleaseNotesEl.classList.add("selectedTab");
    reportsEl.classList.remove("selectedTab");
    syncDataEl.classList.remove("selectedTab");
}

function reportsSectionTab() {
    imageSectionEl.classList.add("d-none");
    compareBuildsSectionEl.classList.add("d-none");
    releaseNotesSectionEl.classList.add("d-none");
    reportsSectionEl.classList.remove("d-none");
    syncDataSectionEl.classList.add("d-none");

    searchImageVersionEl.classList.remove("selectedTab");
    compareBuildsEl.classList.remove("selectedTab");
    showReleaseNotesEl.classList.remove("selectedTab");
    reportsEl.classList.add("selectedTab");
    syncDataEl.classList.remove("selectedTab");
}

function syncDataTab() {
    imageSectionEl.classList.add("d-none");
    compareBuildsSectionEl.classList.add("d-none");
    releaseNotesSectionEl.classList.add("d-none");
    reportsSectionEl.classList.add("d-none");
    syncDataSectionEl.classList.remove("d-none");

    searchImageVersionEl.classList.remove("selectedTab");
    compareBuildsEl.classList.remove("selectedTab");
    showReleaseNotesEl.classList.remove("selectedTab");
    reportsEl.classList.remove("selectedTab");
    syncDataEl.classList.add("selectedTab");
}


//Creating and Appending seach results to the results container
function createAndAppendSearchResult(result) {
    let {
        link,
        title,
        description
    } = result;

    let resultItemEl = document.createElement("li");
    resultItemEl.textContent = title;
    resultItemEl.classList.add("result-title");
    resultItemEl.classList.add("result-item");

    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);
    searchResultsEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
    spinnerEl.classList.add("d-none");

    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }
}

function searchFiles(event) {
    if (event.key === "Enter") {
        if (imageInputEl.value === "") {
            alert("Please Enter Date(YYYY.MM.DD)");
        }

        spinnerEl.classList.remove("d-none");
        searchResultsEl.textContent = "";

        let searchInput = imageInputEl.value;

        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        // let url = "https://sheet2api.com/v1/B5BfzSPIQOCK/characters/" + searchInput;

        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}
imageInputEl.addEventListener("keydown", searchFiles);
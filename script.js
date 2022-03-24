// document.getElementsByClassName('navbar-fixed-top')[0].style.display = 'none';
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


//date input validation:
function validateDateFormat() {
    var regExp = /^[0-9.]+$/;
    if (!regExp.test(imageInputEl.value)) {
        alert("Enter valid image version format");
        imageInputEl.style.border = "2px solid red";
        return false;

    }
    imageInputEl.style.border = "2px solid green";
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

//Adding eventListener to the search box to get desired output
function searchFiles(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.remove("d-none");
        searchResultsEl.textContent = "";

        let searchInput = imageInputEl.value;
        let stringifiedInput = searchInput.toString();

        var data = [{
            "Software": "Intellijidea",
            "Category": "Development Environments",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "2021.2.3",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "snap list | grep -oP \"(?<=intellij-idea-community  )[^ ]+\"",
            "Test Command": "snap list | grep intellij-idea-community"
        },
        {
            "Software": "Pycharm",
            "Category": "Development Environments",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "2021.2.3",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "snap list | grep -oP \"(?<=pycharm-community        )[^ ]+\"",
            "Test Command": "snap find pycharm"
        },
        {
            "Software": "R Studio Desktop",
            "Category": "Development Environments",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "1.4.1717",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "rstudio --version",
            "Test Command": "rstudio --version"
        },
        {
            "Software": "Jupyter Lab",
            "Category": "Libraries",
            "Package Name": "jupyterlab",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "3.2.1",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_jupyterlab.py"
        },
        {
            "Software": "Jupyter Notebook",
            "Category": "Libraries",
            "Package Name": "notebook",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "6.4.5",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_notebook.py"
        },
        {
            "Software": "Jupyter Server",
            "Category": "Libraries",
            "Package Name": "jupyter_server",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "1.11.2",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_jupyter_server.py"
        },
        {
            "Software": "PyTorch Profiler TensorBoard Plugin",
            "Category": "Libraries",
            "Package Name": "torch-tb-profiler",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "0.3.1",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_troch_profilier.py"
        },
        {
            "Software": "azure-core",
            "Category": "Libraries",
            "Package Name": "azure-core",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "1.19.1",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_azurecore.py"
        },
        {
            "Software": "azureml-core",
            "Category": "Libraries",
            "Package Name": "azureml-core",
            "Package Manager": "conda",
            "Environment": "azureml_py36_automl",
            "Version": "1.35.0",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "pip show azureml-core"
        },
        {
            "Software": "catboost",
            "Category": "Libraries",
            "Package Name": "catboost",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "0.25.1",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_catboost.py"
        },
        {
            "Software": "cython",
            "Category": "Libraries",
            "Package Name": "cython",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "0.29.24",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_cython.py"
        },
        {
            "Software": "dlib",
            "Category": "Libraries",
            "Package Name": "dlib",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "19.18.0",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_dlib.py"
        },
        {
            "Software": "gensim",
            "Category": "Libraries",
            "Package Name": "gensim",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "4.1.2",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_gensim.py"
        },
        {
            "Software": "h2o",
            "Category": "Libraries",
            "Package Name": "h2o",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "3.26.0.9",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_h2o.py"
        },
        {
            "Software": "horovod",
            "Category": "Libraries",
            "Package Name": "horovod",
            "Package Manager": "conda",
            "Environment": "py38_tensorflow",
            "Version": "0.23.0",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_horovod.py"
        },
        {
            "Software": "keras",
            "Category": "Libraries",
            "Package Name": "keras",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "2.6.0",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_keras.py"
        },
        {
            "Software": "lightgbm",
            "Category": "Libraries",
            "Package Name": "lightgbm",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "2.3.0",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_lightgbm.py"
        },
        {
            "Software": "matplotlib",
            "Category": "Libraries",
            "Package Name": "matplotlib",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "3.4.3",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_matplotlib.py"
        },
        {
            "Software": "mkl",
            "Category": "Libraries",
            "Package Name": "mkl",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "2021.4.0",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_mkl.py"
        },
        {
            "Software": "onnx",
            "Category": "Libraries",
            "Package Name": "onnx",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "1.10.2",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_onnx.py"
        },
        {
            "Software": "onnxruntime",
            "Category": "Libraries",
            "Package Name": "onnxruntime",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "1.9.0",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_onnxruntime.py"
        },
        {
            "Software": "opencv-python",
            "Category": "Libraries",
            "Package Name": "opencv-python",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "4.5.4.58",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_opencv.py"
        },
        {
            "Software": "pandas",
            "Category": "Libraries",
            "Package Name": "pandas",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "1.3.4",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_pandas.py"
        },
        {
            "Software": "pytorch",
            "Category": "Libraries",
            "Package Name": "pytorch",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "1.10.0",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_pytorch.py"
        },
        {
            "Software": "scikit-learn",
            "Category": "Libraries",
            "Package Name": "scikit-learn",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "1.0.1",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_scikitlearn.py"
        },
        {
            "Software": "tensorflow-gpu",
            "Category": "Libraries",
            "Package Name": "tensorflow-gpu",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "2.6.2",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_tensorflowgpu.py"
        },
        {
            "Software": "xgboost",
            "Category": "Libraries",
            "Package Name": "xgboost",
            "Package Manager": "conda",
            "Environment": "py38_default",
            "Version": "1.3.3",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": null,
            "Test Command": "python test_xgboost.py"
        },
        {
            "Software": ".Net Framework",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "3.1.414",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "dotnet --version",
            "Test Command": "dotnet --version"
        },
        {
            "Software": "Azcopy",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "10.13.0",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "azcopy -v | grep -oP \"(?<=azcopy version )[^ ]+\"",
            "Test Command": "azcopy -v"
        },
        {
            "Software": "Azure Cli",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "\"2.30.0\"",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "az version --query \"\\\"azure-cli\\\"\"",
            "Test Command": "az version"
        },
        {
            "Software": "Blob Fuse",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "1.3.7",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "blobfuse -v | grep -oP \"(?<=blobfuse )[^ ]+\"",
            "Test Command": "blobfuse -v"
        },
        {
            "Software": "CUDA",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "11.5",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "nvidia-smi | grep -oP \"(?<=CUDA Version: )[^ ]+\"",
            "Test Command": "nvidia-smi | grep -oP \"(?<=CUDA Version: )[^ ]+\""
        },
        {
            "Software": "Conda",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "4.10.3",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "conda -V | grep -oP \"(?<=conda )[^ ]+\"",
            "Test Command": "conda -V"
        },
        {
            "Software": "Docker",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "20.10.10",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "docker --version | grep -oP \"(?<=Docker version )[0-9. ]+\"",
            "Test Command": "docker --version"
        },
        {
            "Software": "Emacs",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "25.2.2",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "emacs --version | grep -oP \"(?<=GNU Emacs )[0-9. ]+\"",
            "Test Command": "emacs --version"
        },
        {
            "Software": "Git",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "2.17.1",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": " git --version | grep -oP \"(?<=git version )[^ ]+\"",
            "Test Command": "git --version"
        },
        {
            "Software": "Julia",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "1.6.0",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "julia -v |  grep -oP \"(?<=julia version )[^ ]+\"",
            "Test Command": "julia -v"
        },
        {
            "Software": "NVIDIA Drivers",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "495.29.05",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "nvidia-smi | grep -oP \"(?<=Driver Version: )[^ ]+\"",
            "Test Command": "nvidia-smi | grep -oP \"(?<=Driver Version: )[^ ]+\""
        },
        {
            "Software": "NVIDIA SMI",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "495.29.05",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "nvidia-smi | grep -oP \"(?<=NVIDIA-SMI )[^ ]+\"",
            "Test Command": "systemctl status nvidia-persistenced"
        },
        {
            "Software": "Nodejs",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "v16.13.0",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "node -v",
            "Test Command": "node -v"
        },
        {
            "Software": "R Studio Server",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "1.4.1717",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "rstudio-server version | grep -Eo \"[0-9]+\\.[0-9]+\\.[0-9]+\"",
            "Test Command": "rstudio-server version"
        },
        {
            "Software": "Scala",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "2.12.10,",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "spark-submit --version 2>tmp && cat tmp | grep -oP \"(?<=version )[^ ]+\" |tail -n 1",
            "Test Command": "spark-submit --version"
        },
        {
            "Software": "Spark",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "3.1.2",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "spark-submit --version 2>tmp && cat tmp | grep -oP \"(?<=version )[^ ]+\" | head -n 1",
            "Test Command": "spark-submit --version"
        },
        {
            "Software": "VS Code",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "1.61.2",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "code -v --user-data-dir | head -n 1",
            "Test Command": "code -v --user-data-dir"
        },
        {
            "Software": "Vim",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "8.0",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "vim --version|  grep -oP \"(?<=IMproved )[^ ]+\"",
            "Test Command": "vim --version"
        },
        {
            "Software": "Vowpal Wabbit",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "8.5.0",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "vw --version",
            "Test Command": "vw --version"
        },
        {
            "Software": "cuDNN",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "8.1.1.",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "cat /usr/include/cudnn_version.h | grep -oP \"(?<= CUDNN_MAJOR | CUDNN_MINOR | CUDNN_PATCHLEVEL )[0-9.]+\" | awk '{print}' ORS='.'",
            "Test Command": "nvcc --version"
        },
        {
            "Software": "nano",
            "Category": "Operating System and Platform",
            "Package Name": null,
            "Package Manager": null,
            "Environment": null,
            "Version": "2.9.3",
            "Comment": null,
            "Test Result": "PASSED",
            "Detect Version Command": "nano --version|grep -oP \"(?<=version )[^ ]+\"",
            "Test Command": "nano --version"
        }
        ];

        for (var i = 0; i < data.length; i++) {
            if (stringifiedInput === "22.02.08") {

                var nameItemEl = document.createElement("li");

                nameItemEl.classList.add("list-group-item");
                nameItemEl.classList.add("active");

                nameItemEl.textContent = "Package Name: " + data[i]["Package Name"];


                var enviItemEl = document.createElement("li");
                enviItemEl.classList.add("list-group-item");
                enviItemEl.textContent = " Environment: " + data[i].Environment;

                var versionItemEl = document.createElement("li");
                versionItemEl.classList.add("list-group-item");
                versionItemEl.textContent = " Version: " + data[i].Version;


                var testCommandEl = document.createElement("li");
                testCommandEl.classList.add("list-group-item");
                testCommandEl.textContent = "Test Command: " + data[i]["Test Command"];


                searchResultsEl.appendChild(nameItemEl);
                searchResultsEl.appendChild(enviItemEl);
                searchResultsEl.appendChild(versionItemEl);
                searchResultsEl.appendChild(testCommandEl);
                searchResultsEl.style.color = "black";

            } else {
                searchResultsEl.textContent = "*Image-Version Not Found*";
                searchResultsEl.style.color = "red";
                spinnerEl.classList.add("d-none");

                return;
            }

        }

        spinnerEl.classList.add("d-none");

    }
}
imageInputEl.addEventListener("keydown", searchFiles);

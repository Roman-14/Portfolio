let productivity4_images = ["assets/productivity4-8.gif", "assets/productivity4-1.gif", "assets/productivity4-2.gif","assets/productivity4-3.gif",
                            "assets/productivity4-6.png",
                            "assets/productivity4-4.png","assets/productivity4-5.gif","assets/productivity4-7.png"
                            ];
let productivity4_captions = ["The log-in process of Productivity4, showing what happens when you enter wrongly and correctly",
                                "Using the graph that displays how much tasks you've completed and points you've earned every day",
                                "Creating, deleting, resizing and dragging non-volatile sticky notes around",
                                "Here is all of the attributes you can give a task in the GUI",
                                "A page where you can download data and view, pause and edit all tasks, including ones not completable for today",
                                "A zoomed out image of the home page of Productivity4",
                                "A presentation of checking tasks as complete, removing tasks, and how the progress bar and graph react in response to it",
                                "A still screenshot of the log-in page"
];

let RomanOS_images = ["assets/RomanOS-3.png", "assets/RomanOS-2.gif","assets/RomanOS-4.gif",
    "assets/RomanOS-5.gif", "assets/RomanOS-1.gif",
    "assets/RomanOS-6.gif","assets/RomanOS-7.gif","assets/RomanOS-8.gif"
    ];
let RomanOS_captions = ["An image encapsulating a few of the desktop environment's functions",
        "Creating and running python files from RomanOS",
        "Running the FizzBuzz algorithm",
        "Creating a desktop shortcut",
        "Navigating your computer's file system",
        "Simultaneously running two sorting algorithms",
        "Running several apps at once",
        "Changing the wallpaper using the shortcuts and terminal"
];

let productivity4_index = 0;

let RomanOS_index = 0;

function productivity4_right() {
    productivity4_index += 1;
    if (productivity4_index>=productivity4_images.length) {
        productivity4_index = 0;
    };
    //document.getElementById("productivity4").src = productivity4_images[productivity4_index];
    document.getElementById("productivity4-number").innerText = (productivity4_index+1).toString()+ "/" + productivity4_images.length.toString();
    document.getElementById("productivity4-caption").innerText = productivity4_captions[productivity4_index];
    let img = document.createElement('img');
    img.src = productivity4_images[productivity4_index] + `?time=${Date.now()}`
    document.querySelector(".media-div").appendChild(img);
    img.classList.add("media");
    img.classList.add("media-animation-right");
    img.classList.add("media-transition");
    setTimeout(() => {img.classList.remove("media-animation-right")}, 0);
    setTimeout(() => document.querySelector(".media-div").removeChild(document.querySelector(".media-div").children[0]), 1000);
};

function productivity4_left() {
    productivity4_index -= 1
    if (productivity4_index < 0) {
        productivity4_index = productivity4_images.length - 1
    };
    //document.getElementById("productivity4").src = productivity4_images[productivity4_index];
    document.getElementById("productivity4-number").innerText = (productivity4_index+1).toString() + "/" + productivity4_images.length.toString();
    document.getElementById("productivity4-caption").innerText = productivity4_captions[productivity4_index]
    let img = document.createElement('img');
    img.src = productivity4_images[productivity4_index] + `?time=${Date.now()}`
    document.querySelector(".media-div").appendChild(img);
    img.classList.add("media");
    img.classList.add("media-animation-left");
    img.classList.add("media-transition");
    setTimeout(() => {img.classList.remove("media-animation-left")}, 0);
    setTimeout(() => document.querySelector(".media-div").removeChild(document.querySelector(".media-div").children[0]), 1000);
};

function RomanOS_right() {
    RomanOS_index += 1;
    if (RomanOS_index>=RomanOS_images.length) {
        RomanOS_index = 0;
    };
    document.getElementById("RomanOS-number").innerText = (RomanOS_index+1).toString()+ "/" + RomanOS_images.length.toString();
    document.getElementById("RomanOS-caption").innerText = RomanOS_captions[RomanOS_index];
    let img = document.createElement('img');
    img.src = RomanOS_images[RomanOS_index] + `?time=${Date.now()}`
    document.querySelector(".media-div-2").appendChild(img);
    img.classList.add("media");
    img.classList.add("media-animation-right");
    img.classList.add("media-transition");
    setTimeout(() => {img.classList.remove("media-animation-right")}, 0);
    setTimeout(() => document.querySelector(".media-div-2").removeChild(document.querySelector(".media-div-2").children[0]), 1000);
};

function RomanOS_left() {
    RomanOS_index -= 1
    if (RomanOS_index < 0) {
        RomanOS_index = RomanOS_images.length - 1
    };
    document.getElementById("RomanOS-number").innerText = (RomanOS_index+1).toString() + "/" + RomanOS_images.length.toString();
    document.getElementById("RomanOS-caption").innerText = RomanOS_captions[RomanOS_index]
    let img = document.createElement('img');
    img.src = RomanOS_images[RomanOS_index] + `?time=${Date.now()}`
    document.querySelector(".media-div-2").appendChild(img);
    img.classList.add("media");
    img.classList.add("media-animation-left");
    img.classList.add("media-transition");
    setTimeout(() => {img.classList.remove("media-animation-left")}, 0);
    setTimeout(() => document.querySelector(".media-div-2").removeChild(document.querySelector(".media-div-2").children[0]), 1000);
};

function logoTyping() {
    let count = 0;
    let message = "Roman-14"

    setInterval(() => {
        document.querySelector('#logo').innerText = message.substring(0, count + 1)
        count = (count + 1) % (4 * message.length);
    }, 100)
};

logoTyping();

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.box-shadow');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});
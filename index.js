let productivity4_images = ["assets/productivity4-1.gif", "assets/productivity4-2.gif","assets/productivity4-3.gif",
                            "assets/productivity4-4.png","assets/productivity4-5.gif","assets/productivity4-6.png",
                        "assets/productivity4-7.png","assets/productivity4-8.gif"];
                        
let productivity4_index = 0;

function productivity4_right() {
    productivity4_index += 1;
    if (productivity4_index>=productivity4_images.length) {
        productivity4_index = 0;
    };
    document.getElementById("productivity4").src = productivity4_images[productivity4_index];
    document.getElementById("productivity4-caption").innerText = "Caption: "+(productivity4_index+1).toString()+ "/" + productivity4_images.length.toString();
};

function productivity4_left() {
    productivity4_index -= 1
    if (productivity4_index < 0) {
        productivity4_index = productivity4_images.length - 1
    };
    document.getElementById("productivity4").src = productivity4_images[productivity4_index];
    document.getElementById("productivity4-caption").innerText = "Caption: "+(productivity4_index+1).toString() + "/" + productivity4_images.length.toString();
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

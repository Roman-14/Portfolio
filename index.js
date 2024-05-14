function logoTyping() {
    let count = 0;
    let message = "Roman-14"

    setInterval(() => {
        document.querySelector('#logo').innerText = message.substring(0, count + 1)
        count = (count + 1) % (4 * message.length);
    }, 100)
}

logoTyping();

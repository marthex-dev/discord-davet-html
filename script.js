var images = ['all-games-0yht9b9b5lzjqncs.jpg'];

   $('#container').append('<style>#container, .acceptContainer:before, .logoContainer:before {background: url(' + images[Math.floor(Math.random() * images.length)] + ') center fixed }');
export default function Home() {
    return (
        <>
            <head>
                <title>Uri Website</title>
                <link rel="stylesheet" href="/css/style.css">

                    <script>
                        fetch('html-components/favicons.html')
      .then(response => response.text())
      .then(data => {
        var head = document.head;
                        var temp = document.createElement('div');
                        temp.innerHTML = data;
        Array.from(temp.children).forEach(child => head.appendChild(child));
      });
                    </script>

            </head>

            <body>
                <script src="/script/scripts.js"></script>

                <div id="header"></div>
                <script>
                    fetch('html-components/header.html')
      .then(response => response.text())
      .then(data => document.getElementById('header').innerHTML = data);
                </script>

                <section>
                    <div class="FirstPageText">
                        <h2>About this Site and Me</h2>
                        <p id="time">Hello!</p>
                        <p>Welcome to my corner of the web, where I share programming insights, tips, and experiments. This site is both a
                            journal of my journey in coding and a space to explore ideas and concepts I find fascinating.</p>
                        <p>I'll be posting everything I learn, stumble upon, or simply find cool as I work to become a better
                            programmer—or maybe just a curious one! And hey, if it turns out I don’t have all the answers, that’s part of
                            the journey too.</p>
                        <p>Feel free to explore, experiment, and reach out if something’s not working quite right—this is my playground,
                            after all. :D</p>
                    </div>
                </section>


                <footer>
                </footer>
            </body>
        </>
    );
}
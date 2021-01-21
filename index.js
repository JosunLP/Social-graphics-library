import "./dist/sgl.bundle.js";

var sgl = new SocialGraphicsLibrary();

console.log(sgl.info());

console.log(sgl.VERSION)

document
    .getElementById("generate")
    .addEventListener("click",
        async function() {
            sgl
                .multiGenerator(document
                    .getElementById('tName')
                    .value,
                    document
                    .getElementById('uName').value, [{
                        mode: 'twitch-title',
                        containerId: 'img-container-1',
                        imgMode: 'jpeg'
                    }, {
                        mode: 'elavate-title',
                        containerId: 'img-container-2',
                        imgMode: 'jpeg'
                    }, {
                        mode: 'twitter-title',
                        containerId: 'img-container-3',
                        imgMode: 'jpeg'
                    }, {
                        mode: 'youtube-title',
                        containerId: 'img-container-4',
                        imgMode: 'jpeg'
                    }, {
                        mode: 'logo',
                        containerId: 'img-container-5',
                        imgMode: 'png',
                        generateLink: true
                    }])
        });
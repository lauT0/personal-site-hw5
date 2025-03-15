class ArtCard extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const aName = this.getAttribute('aName') || 'Unknown Name';
        const link = this.getAttribute('link') || 'Unknown Link';
        const desc = this.getAttribute('desc') || 'Unknown Description';
        const srcUrl = this.getAttribute('srcUrl') || 'Unknown Source';
        const imgUrl = this.getAttribute('imgUrl') || 'Unknown Image';
        this.componentHeader = document.createElement('h2');
        this.componentHeader.textContent = aName;
        this.componentHeader.setAttribute('class', 'artName');
        this.appendChild(this.componentHeader);

        this.picture = document.createElement('picture');
        this.source = document.createElement('source');
        this.source.setAttribute('class', 'imgdes');
        this.source.setAttribute('media', '(min-width: 1500px)');
        this.source.setAttribute('srcset', srcUrl);
        this.imgDef = document.createElement('img');
        this.imgDef.setAttribute('class', 'imgmob');
        this.imgDef.setAttribute('src', imgUrl);

        this.picture.appendChild(this.source);
        this.picture.appendChild(this.imgDef);
        this.appendChild(this.picture);

        this.linkedCon = document.createElement('a');
        this.linkedCon.setAttribute('class', 'artLink');
        this.linkedCon.setAttribute('href', link);
        this.linkedCon.textContent = desc;
        this.appendChild(this.linkedCon);
    }
}
customElements.define('art-card', ArtCard);


const llocalbttn = document.getElementById('llocal');
const lremotebttn = document.getElementById('lremote');


lremotebttn.addEventListener('click', async () => {
    console.log("DOM Content loaded");
    const url = "https://api.jsonbin.io/v3/b/67d4e1898561e97a50ec368d";
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-Access-Key": "$2a$10$pevFeZOq1hJGsp9.cwKQh.V/RNsamY1v0mJB6JYNY5ppymuPrH7C2",
            }
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const jsonData = await response.json();
        localStorage.setItem('artData', JSON.stringify(jsonData));
        jsonData.record.forEach(work => {
            window.galleryItem = document.createElement("art-card");
            window.galleryItem.setAttribute('aName', work.name);
            window.galleryItem.setAttribute('link', work.linked_con);
            window.galleryItem.setAttribute('desc', work.description);
            window.galleryItem.setAttribute('srcUrl', work.source_url);
            window.galleryItem.setAttribute('imgUrl', work.img_url);
            document.getElementById("gallery").appendChild(window.galleryItem);
        });

    } catch (error) {
        console.error(error.message);
    }
});

llocalbttn.addEventListener('click', async () => {
    const data = localStorage.getItem("artData");
    if (data == null){
        alert("no data in local storage, please load from remote")
    } else{
        const jData = JSON.parse(data);
        jData.record.forEach(work => {
            console.log(work.source_url);
            window.galleryItem = document.createElement("art-card");
            window.galleryItem.setAttribute('aName', work.name);
            window.galleryItem.setAttribute('link', work.linked_con);
            window.galleryItem.setAttribute('desc', work.description);
            window.galleryItem.setAttribute('srcUrl', work.source_url);
            window.galleryItem.setAttribute('imgUrl', work.img_url);
            document.getElementById("gallery").appendChild(window.galleryItem);
        });
    }
});

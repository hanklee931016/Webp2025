var dataUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=9&format=json&nojsoncallback=1';

    function getimg() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', dataUrl, true);
      xhr.send();
      xhr.onload = function () {
        var data = JSON.parse(this.responseText);
        add_new_img(data);
      };
    }

    function add_new_img(dataset) {
      var gallery = document.getElementById("gallery");
      gallery.innerHTML = ""; 
      var photos = dataset.photos.photo;
      photos.forEach(photo => {
        var img = document.createElement("img");
        var imgUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
        img.src = imgUrl;
        gallery.appendChild(img);
      });
    }
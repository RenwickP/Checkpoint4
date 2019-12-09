// import ImageService from "../services/image-service.js";
import store from "../store.js";
import imageService from "../services/image-service.js";

function _drawImage() {
  let img = store.State.image;

  document.body.style.backgroundImage = `url('${img}')`;
}

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    imageService.getPic();
    store.subscribe("image", _drawImage);
  }
}

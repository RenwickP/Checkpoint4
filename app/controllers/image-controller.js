import ImageService from "../services/image-service.js";
import store from "../store.js";
import imageService from "../services/image-service.js";

function _drawImage() {}

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    imageService.getPic();
    // store.subscribe();
  }
}
